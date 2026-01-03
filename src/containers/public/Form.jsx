import { Context } from "../../controllers/contexts/DataContext";

import penguins from "../../resources/content/penguin.json";
import questions from "../../resources/content/questions.json";
import groups from "../../resources/content/groups.json";
import passwords from "../../resources/content/password.json";

import ns from '../../settings/routes/locales.routes';
import images from "../../resources/images";

import { useTranslation, Trans } from "react-i18next";
import { useState, useContext, useCallback, useEffect } from 'react';

import { WaveContainer } from "../../components/layouts/WaveContainer";
import Sparkles from "../../components/effects/Sparkles";

import { SubmitButton } from "../../components/styles/CustomButton";
import { InputWithButton, RadioWithButton } from "../../components/styles/CustomInput";
import { WindowWithBorder } from "../../components/styles/CustomWindow";

export const NUMBER_OF_QUESTIONS = 10;

const generateQuestions = (limit = 10) => {
    const array = [];
    for (let i = 0; i < limit; i++) {
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
    return array;
};

const calculateResults = (data, retry = 0) => {
  let score = [{ id: 0, points: 0 }, { id: 1, points: 0 }, { id: 2, points: 0 },
    { id: 3, points: 0 },{ id: 4, points: 0 },{ id: 5, points: 0 },{ id: 6, points: 0 }];

  for (let i = 0; i < data.values.options.length; i++) {
    let question = questions[data.indexes[i]];
    let option = question.options[data.values.options[i]];

    score[0].points += parseInt(option.points.otakus);
    score[1].points += parseInt(option.points.nerds);
    score[2].points += parseInt(option.points.emo);
    score[3].points += parseInt(option.points.hippies);
    score[4].points += parseInt(option.points.hipsters);
    score[5].points += parseInt(option.points.cosplayers);
    score[6].points += parseInt(option.points.kpopers);
  }

  score.sort((a, b) => b.points - a.points);

  let group = score[retry].id;
  const secret = score[retry].points + score[0].points - score[6].points * score[3].points;
  return { group, secret };
};

export const NewForm = () => {
  const { t } = useTranslation([ns.form, ns.common]);
  const { localData, setLocalData } = useContext(Context);

  useEffect(() => {
    if (localData && !localData.token) {
      setLocalData(temp => ({ ...temp, data: penguins[temp.data.code], token: "v1" }));
    }
  }, [setLocalData]);
  
  return (<>
      { localData && localData.values && localData.values.index >= localData.indexes.length ? 
        <>
          <div className="absolute w-full h-full overflow-hidden select-none -z-10">
            <img className="w-full h-full min-h-screen object-cover select-none pointer-events-none"
              src="https://clubpenguinmountains.com/wp-content/uploads/2016/06/backgrounds-custom.png" alt="" />
          </div>

          <FormWithResults t={t} data={localData} setData={setLocalData} />
        </>
          :
        <>
          <div className="absolute w-full h-full overflow-hidden select-none -z-10">
            <img className="w-full min-h-screen object-cover select-none pointer-events-none"
              src="https://clubpenguinmountains.com/wp-content/uploads/2016/06/backgrounds-custom.png" alt="" />
          </div>

          <FormWithCode t={t} data={localData} setData={setLocalData} />

          <WaveContainer className="bg-div-bold relative" fill="fill-div-bold" height="50" top>
            <div className="w-4/5 sm:w-2/3 py-8 space-y-8">
              {localData && localData.data && <FormWithQuestion t={t} data={localData} setData={setLocalData} />}
              <FormWithError t={t} data={localData} />
            </div>
          </WaveContainer>
          <div className="grow bg-div-bold z-10"></div>
        </>
      }
  </>);
};

const FormWithCode = ({ t, data, setData }) => {
  const [code, setCode] = useState("");
  const submitted = data && data.data;

  const checkCode = useCallback(() => {
    if (penguins[code]) {
      const array = generateQuestions(penguins[code].done ? questions.length : NUMBER_OF_QUESTIONS);
      setData({ data: penguins[code], indexes: array, values: { index: 0, options: [] }, token: "v1" });
    } else {
      setData({ error: { type: "no-list" }});
    }
  }, [code, setData]);

  return (
    <div className="py-8 flex flex-col items-center">
      <Sparkles className="w-16 h-16 z-10 fill-dark-cyan translate-y-3" stars={3} />

      <div className="w-2/3 md:w-1/3 space-y-2 py-8">
        <WindowWithBorder className="px-4">
          <h2>
            { submitted ? <>
              {t("header.contents.welcome", { name: data.data.name, context: data.data.gender })}
            </> :
              <Trans i18nKey="header.subtitle" t={t}>
                <span className="font-bold"></span>
              </Trans> 
            }
          </h2>
        </WindowWithBorder>

        { !submitted &&
          <InputWithButton className="space-x-2" 
            type="text" name="user_code" 
            value={code} onChange={(e) => setCode(e.target.value)}
            onClick={checkCode} />
        }
      </div>
    </div>
  );
};

const FormWithQuestion = ({ t, data, setData }) => {
  const [option, setOption] = useState(null);

  const checkOption = useCallback(() => {
    if (option === 0 || option > 0) {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
      setData(temp => ({ ...temp, values: { ...temp.values, index: temp.values.index + 1, options: [...temp.values.options, option] }}));
      setOption(undefined);
    }
  }, [option, setOption, setData]);

  return (<>
    <div className="flex flex-col md:flex-row space-x-8 space-y-4 pt-12 items-center">
      <div className="">
        <img className="w-60 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIUfUwP6C3Be7eAs_xPG9rg9Wml_-uUJoZg&s" alt="" />
      </div>
      <div className="w-full bg-div flex relative mx-auto justify-center items-center px-4 py-2
        border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">
          { data.values.index == 0 ? 
            t("form.header.title", { name: data.data.name, number: data.indexes.length, count: questions.length, context: data.data.gender })
          : data.values.index <= 3 ?
            t("form.header.contents.starting", { name: data.data.name, context: data.data.gender })
          : data.values.index <= 6 ?
            t("form.header.contents.midway", { name: data.data.name, context: data.data.gender })
          : 
            t("form.header.contents.ending", { name: data.data.name, context: data.data.gender })
          }
      </div>
    </div>

    <div className="w-full h-1 border-b-olive border-b-8 rounded-2xl" id="scroll">
    </div>

    <div className="flex flex-col md:flex-row items-center space-x-4 space-y-2">
      <h2 className="text-6xl font-bold">
        {data.values.index + 1}
      </h2>

      <div className="grow bg-div px-4 py-2 flex text-center
        border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">
          {questions[data.indexes[data.values.index]].title}
      </div>

      <img className="hidden md:flex w-20 h-20 object-contain"
        src="https://i.redd.it/85y00x00iigd1.gif" alt="" />
    </div>

    <div className="w-full h-1 border-b-olive border-b-8 rounded-2xl">
    </div>

    <div className="w-full bg-div px-4 py-4 mb-8 xs:mb-0 flex text-center space-x-4 md:mt-8
      border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden">

      <RadioWithButton className="w-full"
        type="radio" name={`option_${data.values.index}`} 
        options={questions[data.indexes[data.values.index]].options} 
        onChange={e => setOption(e.target.value)} 
        onClick={checkOption} />

    </div>
  </>);
};

const FormWithResults = ({ t, data, setData}) => {
  const [password, setPaswsword] = useState("");

  const sendEmail = useCallback(({ to, subject, body }) => {
    const parameters = `subject=${subject}&body=${body}`;
    window.open(`mailto:${to}${parameters ? `?${parameters}` : ''}`, '_blank');
  }, []);

  const resendEmail = useCallback(() => {
    const email_body = `PENGUIN CODE: ${data.data.code}. GROUP ID: ${groups[data.results.group].code}. SECRET ID: ${data.results.secret}`
    sendEmail({ to: "edbg97@gmail.com", subject: `${data.data.name} results`, body: email_body });
  }, [sendEmail, data, data]);

  const handleSubmit = useCallback((e) => {
    const results = calculateResults(data, 0);
    setData(temp => ({ ...temp, results }));
  }, [data, setData, sendEmail]);

  const checkPassword = useCallback(() => {
    if (passwords[password]) {
      const retry = passwords[password];
      const results = calculateResults(data, retry);
      setData(temp => ({ ...temp, results }));
      setPaswsword("");
    }
  }, [password, setPaswsword, data, setData]);

  const handleRepeat = () => {
    setData({});
  };

  return (<>
    <WindowWithBorder className="w-9/10 xs:w-3/4 md:w-1/2 space-y-4 my-12 px-4">
      { data.results ?
        <>
          <p className="text-center">
            <Trans i18nKey={`form.results.contents.descriptions.${groups[data.results.group].name}`} name={data.data.name} context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>

          <img className="w-60 object-cover mx-auto"
            src={groups[data.results.group].image} alt="" />

          <p className="text-center">
            <Trans i18nKey={"form.results.contents.explication"} name={data.data.name} context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>

          <p className="text-center">
            <Trans i18nKey="form.results.contents.caption" name={data.data.name} context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>


          <div className="flex mx-auto space-x-4">
            <SubmitButton className="px-4 py-2"
              onClick={resendEmail}>
                {t("form.buttons.send")}
            </SubmitButton>
            { data.data.done && 
              <SubmitButton className="px-4 py-2"
                onClick={handleRepeat}>
                  Repetir
              </SubmitButton>
            }
          </div>

          <p className="text-center">
            <span className="font-bold">Actualizacion: </span> si el boton del correo no funciona por favor enviar de forma manual los siguientes datos a <span className="font-bold">edbg97@gmail.com</span>
          </p>
          <p className="text-center">{`PENGUIN CODE: ${data.data.code}. GROUP ID: ${groups[data.results.group].code}. SECRET ID: ${data.results.secret}`}</p>

          <p className="text-center">
            <Trans i18nKey="form.results.contents.warning" name={data.data.name} context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>

          <InputWithButton className="md:w-2/3 flex items-center space-x-2 mx-auto" 
            type="text" name="user_password" 
            value={password} onChange={(e) => setPaswsword(e.target.value)}
            onClick={checkPassword} />

          { data.data.done && false && <>
            <p className="text-center">
              <span className="font-bold">Actualizacion:</span> usa las siguientes contraseñas para ver tus otros resultados! 
            </p>
            <ol className="text-center">
              <li>000000000000</li>
              <li>203294529151</li>
              <li>212398583653</li>
              <li>150932952390</li>
              <li>439528532985</li>
              <li>663493984834</li>
              <li>321459815853</li>
            </ol>
            <p className="text-center">
              <span className="font-bold">Como usar:</span> la primera contraseña es tu primer resultado, la segunda tu segundo resultado, y así...
              <span className="font-bold">Como usar:</span> la primera contraseña es tu primer resultado, la segunda tu segundo resultado, y así...
            </p>
          </>}

          <p className="text-center">
            <Trans i18nKey="form.results.contents.thanks" name={data.data.name} context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>
        </> 
          : 
        <>
          <img className="w-60 object-cover mx-auto"
            src={images.pages.penguin} alt="" />
            
          <p className="text-center">
            <Trans i18nKey="form.results.title" context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>

          <div className="flex mx-auto space-x-4">
            <SubmitButton className="px-4 py-2"
              onClick={handleSubmit}>
                {t("form.buttons.submit")} 
            </SubmitButton>
            { data.data.done && 
              <SubmitButton className="px-4 py-2"
                onClick={handleRepeat}>
                  Repetir
              </SubmitButton>
            }
          </div>

          <p className="text-center">
            <Trans i18nKey="form.results.subtitle" context={data.data.gender} t={t}>
              <span className="font-bold"></span>
            </Trans> 
          </p>
        </>
      }
    </WindowWithBorder>
  </>);
};

const FormWithError = ({ t, data }) => {
  return (<>
    { data && data.error && data.error.type === "no-list" && 
      <div className="flex flex-col md:flex-row items-center space-x-8 space-y-4 py-12">
        <div>
          <img className="w-180 object-cover"
            src="https://i.pinimg.com/236x/c7/b3/3d/c7b33d446e86f619af4c3633a43c1844.jpg" alt="No Cheating" />
        </div>
        <div className="font-bold text-red-600">
          {t("form.errors.nolist")}
        </div>
      </div>
    }
  </>);
};

export default NewForm;
