import { Context } from "../../controllers/contexts/DataContext";

import penguins from "../../resources/content/penguin.json";
import questions from "../../resources/content/questions.json";
import groups from "../../resources/content/groups.json";
import passwords from "../../resources/content/password.json";

import ns from '../../settings/routes/locales.routes';

import { useTranslation, Trans } from "react-i18next";
import { useState, useContext, useCallback } from 'react';

import { SubmitButton, ContinueButton } from "../../components/customs/CustomButton";
import { WaveContainer } from "../../components/layouts/WaveContainer";
import { HardText as WaveText } from "../../components/effects/WaveText";

import Sparkles from "../../components/effects/Sparkles";
export const NUMBER_OF_QUESTIONS = 10;

const calculateResults = (data, retry = 0) => {
  console.log(data);

  let score = [{ id: 0, points: 0 }, { id: 1, points: 0 }, { id: 2, points: 0 },
    { id: 3, points: 0 },{ id: 4, points: 0 },{ id: 5, points: 0 },{ id: 6, points: 0 }];
  for (let i = 0; i < data.values.options.length; i++) {
    let question = questions[data.indexes[i]];
    let option = question.options[data.values.options[i]];

    score[0].points += parseInt(option.points.cosplayers);
    score[1].points += parseInt(option.points.emo);
    score[2].points += parseInt(option.points.hipsters);
    score[3].points += parseInt(option.points.hippies);
    score[4].points += parseInt(option.points.otakus);
    score[5].points += parseInt(option.points.nerds);
    score[6].points += parseInt(option.points.kpopers);
  }

  console.log(score);
  score.sort((a, b) => b.points - a.points);

  let group = score[retry].id;
  if (data.data.cantEmo && group === 1 && retry < 6)
    group = score[retry + 1].id;

  const secret = score[retry].points + score[0].points - score[6].points * score[3].points;
  return { group, secret };
};

const Form = () => {
  const { t } = useTranslation([ns.form, ns.common]);

  const { localData, setLocalData } = useContext(Context);
  const [temp, setTemp] = useState({});

  const [password, setPaswsword] = useState("");
  const [code, setCode] = useState("");
  const [option, setOption] = useState();
  const [error, setError] = useState(null);

  const onChange = useCallback((setMethod) => (event) => {
    setMethod(event.target.value);
  }, []);

  const checkCode = useCallback(() => {
    if (penguins[code]) {

      const array = [];
      for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let initial_index = Math.floor(Math.random() * questions.length);
        let current_index = initial_index;
        while (array.some(value => value === current_index))
        {
          if (current_index + 1 === questions.length)
            current_index = 0;
          else
            current_index += 1;

          if (current_index === initial_index) break;
        }
        array.push(current_index);
      } 

      setTemp({ data: penguins[code], indexes: array, values: { index: 0, options: [] }})
      setError(undefined);
    } else {
      setError({ type: "no-list" });
    }
  }, [penguins, questions, code, setTemp, setError]);

  const checkOption = useCallback(() => {
    if (option >= 0) {
      setTemp(temp => ({ ...temp, values: { ...temp.values, index: temp.values.index + 1, options: [...temp.values.options, option] }}));
      setOption(undefined);
    }
  }, [option, setOption, setTemp]);

  const sendEmail = useCallback(({ to, subject, body }) => {
    const parameters = `subject=${subject}&body=${body}`;
    window.open(`mailto:${to}${parameters ? `?${parameters}` : ''}`, '_blank');
  }, []);

  const handleSubmit = useCallback((e) => {
    const results = calculateResults(temp, 0);
    setTemp(temp => ({ ...temp, results }));
  }, [temp, calculateResults, sendEmail, setTemp]);

  const resendEmail = useCallback(() => {
    const email_body = `PENGUIN CODE: ${temp.data.code}. GROUP ID: ${groups[temp.results.group].code}. SECRET ID: ${temp.results.secret}`
    sendEmail({ to: "edbg97@gmail.com", subject: `${temp.data.name} results`, body: email_body });
  }, [sendEmail, t, temp]);

  const checkPassword = useCallback(() => {
    if (passwords[password]) {
      const retry = passwords[password];
      const results = calculateResults(temp, retry);
      setTemp(temp => ({ ...temp, results }));
      setPaswsword("");
    }
  }, [password, calculateResults, setTemp]);

  return (<>

    <div className={`pt-8 ${temp && temp.values && temp.values.index >= NUMBER_OF_QUESTIONS ? "min-h-screen" : "pb-50"} relative flex flex-col items-center bg-cover`}
      style={{ backgroundImage: `url(https://clubpenguinmountains.com/wp-content/uploads/2016/06/backgrounds-custom.png)` }}>

      { temp && temp.values && temp.values.index >= NUMBER_OF_QUESTIONS ? <>
        <div className="w-3/4 md:w-1/2 bg-div flex flex-col relative mx-auto justify-center items-center px-8 py-8 my-8
          border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden space-y-4">
            
          { temp.results ?
            <>
              <p className="text-center">
                <Trans i18nKey={`form.results.contents.descriptions.${groups[temp.results.group].name}`} name={temp.data.name} context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>

              <img className="w-60 object-cover"
                src={groups[temp.results.group].image} alt="" />

              <p className="text-center">
                <Trans i18nKey={"form.results.contents.explication"} name={temp.data.name} context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>

              <p className="text-center">
                <Trans i18nKey="form.results.contents.caption" name={temp.data.name} context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>

              <SubmitButton 
                value={t("form.buttons.send")} 
                onClick={resendEmail} />

              <p className="text-center">
                <Trans i18nKey="form.results.contents.warning" name={temp.data.name} context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>

              <div className="md:w-2/3 flex flex-col md:flex-row items-center md:space-x-1 space-y-2 md:space-y-0">
                <Input className="space-y-1 grow h-10"
                  type="text" name="user_password" 
                  value={password} onChange={onChange(setPaswsword)}
                  placeholder="Clave"
                  onEnter={checkPassword} />

                <SubmitButton className="" 
                  value={t("form.buttons.again")} 
                  onClick={checkPassword} />
              </div>

              <p className="text-center">
                <Trans i18nKey="form.results.contents.thanks" name={temp.data.name} context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>
            </> : <>
              <img className="w-60 object-cover"
                src="https://www.nicepng.com/png/detail/117-1175030_arco-ris-4-club-penguin-penguin-colors.png" alt="" />
                
              <p className="text-center">
                <Trans i18nKey="form.results.title" context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>

              <SubmitButton 
                value={t("form.buttons.submit")} 
                onClick={handleSubmit} />

              <p className="text-center">
                <Trans i18nKey="form.results.subtitle" context={temp.data.gender} t={t}>
                  <span className="font-bold"></span>
                </Trans> 
              </p>
            </>
          }
        </div>
      </> : <>
        <Sparkles className="w-16 h-16 z-10 fill-dark-cyan translate-y-3" stars={3} />
        <WaveText id="c1"
          className="w-full h-18 font-extrabold fill-light-cyan text-6xl" 
          viewport="0.625 -58.86821746826172 225 81.77326965332031" 
          alignment="middle" anchor="middle" offset="0px"
          value={t("header.title")} />

        <div className="w-2/3 md:w-1/3 flex flex-col text-center text-sm space-y-4 
          bg-div border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden p-4 mt-4">
          <h2>
            { temp && temp.data ? <>
              {t("header.contents.welcome", { name: temp.data.name, context: temp.data.gender })}
            </> :
              <Trans i18nKey="header.subtitle" t={t}>
                <span className="font-bold"></span>
              </Trans> 
            }
          </h2>
        </div>

        { (!temp || !temp.data) && <>
          <div className="mt-1 w-2/3 md:w-1/3 flex items-center space-x-1">
            <Input className="space-y-1 grow h-min"
              type="text" name="user_name" 
              value={code} onChange={onChange(setCode)}
              onEnter={checkCode} />

            <ContinueButton className="" 
              onClick={checkCode} />
          </div>
        </>}
      </>}
    </div>

    {(!temp || !temp.values || temp.values.index < NUMBER_OF_QUESTIONS) && <>
      <WaveContainer className="bg-transparent fill-div-bold overflow-hidden -mt-30" 
        content="bg-div-bold py-4 pb-20 relative" height="50" top>
          <div className="w-3/4 sm:w-2/3 space-y-4 z-10 pb-1">
            { temp && temp.data ? <>
                {temp.values.index >= NUMBER_OF_QUESTIONS ? <>

                </> : <>
                  <div className="flex flex-col md:flex-row space-x-8 space-y-4 pt-12 items-center">
                    <div className="">
                      <img className="w-60 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIUfUwP6C3Be7eAs_xPG9rg9Wml_-uUJoZg&s" alt="" />
                    </div>
                    <div className="w-full bg-div flex relative mx-auto justify-center items-center px-4 py-2
                      border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">
                        { temp.values.index == 0 ? 
                          t("form.header.title", { name: temp.data.name, number: NUMBER_OF_QUESTIONS, count: questions.length, context: temp.data.gender })
                        : temp.values.index <= 3 ?
                          t("form.header.contents.starting", { name: temp.data.name, context: temp.data.gender })
                        : temp.values.index <= 6 ?
                          t("form.header.contents.midway", { name: temp.data.name, context: temp.data.gender })
                        : 
                          t("form.header.contents.ending", { name: temp.data.name, context: temp.data.gender })
                        }
                    </div>
                  </div>

                  <div className="w-full h-1 border-b-olive border-b-8 rounded-2xl">
                  </div>

                  <div className="flex flex-col md:flex-row items-center space-x-4 space-y-4 md:pt-4">
                    <h2 className="text-6xl font-bold">
                      {temp.values.index + 1}
                    </h2>

                    <div className="grow bg-div px-4 py-2 flex text-center
                      border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">
                        {questions[temp.indexes[temp.values.index]].title}
                    </div>

                    <img className="hidden md:flex w-20 h-20 object-contain"
                      src="https://i.redd.it/85y00x00iigd1.gif" alt="" />
                  </div>

                  <div className="w-full h-1 border-b-olive border-b-8 rounded-2xl ">
                  </div>

                  <div className="w-full bg-div px-4 py-4 flex text-center space-x-4 md:mt-8
                    border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">

                    <Input className="flex-col space-y-1 grow h-min"
                      type="radio" name={`option_${temp.values.index}`} 
                      options={questions[temp.indexes[temp.values.index]].options} 
                      onChange={onChange(setOption)} />

                    <ContinueButton className="" 
                      onClick={checkOption} />

                  </div>
              </>}
            </> : error && error.type == "no-list" && <>
                <div className="flex flex-col md:flex-row items-center space-x-8 space-y-4 py-12">
                  <div>
                    <img className="w-180 object-cover"
                      src="https://i.pinimg.com/236x/c7/b3/3d/c7b33d446e86f619af4c3633a43c1844.jpg" alt="No Cheating" />
                  </div>
                  <div className="font-bold text-red-600">
                    {t("form.errors.nolist")}
                  </div>
                </div>

            </>}
          </div>
      </WaveContainer>
      <div className="bg-div-bold grow"></div>
    </>}
    
  </>);
};

const Input = ({ className = "", type = "", name = "", label = "", placeholder = "", autocomplete = "off", rows = 1, options = [], onChange, onEnter, ...rest }) => {
  const handleEnter = useCallback((e) => {
    if (onEnter && e.keyCode == 13) onEnter();
  }, [onEnter]);
  
  return (
    <label className={`${className} flex group space-x-2`} htmlFor={name}>
      { label && 
        <span className="space-x-1 group-focus-within:text-dark-sky ">
          {label}
        </span>
      }

      { type === "textarea" && 
        <textarea className="grow px-4 field-sizing-fixed border-2 rounded-2xl border-dark-sky caret-dark-sky bg-div focus:outline-none placeholder:italic"
          id={name} name={name} placeholder={placeholder} rows={rows} onKeyDown={handleEnter} onChange={onChange} {...rest} />}
      { type === "" || type === "text" && 
        <input className="grow px-4 border-2 rounded-2xl border-dark-sky caret-dark-sky bg-div focus:outline-none placeholder:italic"
          type={type} id={name} name={name} placeholder={placeholder} autoComplete={autocomplete} onKeyDown={handleEnter} onChange={onChange} {...rest} />}
      { type === "radio" && <>
        { options && options.map((item, i) => 
          <div key={`${name}_${i}_key`} className="w-full flex grow space-x-2">
            <input className=""
              type="radio" id={`${name}_${i}`} name={name} value={i} onChange={onChange} />
            <label className="grow px-2 border-b-2 border-dark-sky text-left h-min w-full"
              htmlFor={`${name}_${i}`}>{item.label}</label>   
          </div>
        )}
      </>}

    </label>
  );
};

export default Form;
