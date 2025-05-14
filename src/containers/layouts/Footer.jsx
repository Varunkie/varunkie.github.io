import images from "../../resources/images";

import { useWindowSize } from '../../utils/hooks/useWindow';

import { FaTwitterSquare } from "react-icons/fa";
import { TbPencilHeart } from "react-icons/tb";

import Icon from "../../components/common/ExternalLink";

const Footer = ({ className = "", t, ready }) => {
  const { width } = useWindowSize();

  return (<>
      <footer className={`${className} relative overflow-hidden`}
        /*style={{ "clip-path": "url(#path)", "-webkit-clip-path": "url(#path)" }}*/
        style={{ "mask": "url(#path)", "WebkitMask": "url(#path)" }}
      >
        <div className="absolute w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images.blobs.footer_top_right})` }}>

        </div>

        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-left-bottom"
          style={{ backgroundImage: `url(${images.blobs.footer_bottom_left})` }}>

        </div>

        { ready && 
          <div className="w-9/12 md:w-2/3 lg:w-1/2 mx-auto
            sm:px-12 lg:px-16 py-16 space-y-30 sm:space-y-40">
            <div className="relative flex text-xl
              py-8 flex-col md:flex-row space-y-4 md:space-y0">
              <div className="flex flex-col grow space-y-2">
                <p className="font-bold">{t("footer.contact.title")}</p>
                <div className="flex items-center">
                  <TbPencilHeart className="mx-2 text-icon outline-0" />
                  <p className="text-lg">{t("common.email")}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="font-bold">{t("footer.social.title")}</p>
                <div className="flex h-full space-x-1 fill-icon">
                  <Icon className="w-8 h-8"
                    href="https://twitter.com/varunkie">
                    <FaTwitterSquare className="w-full h-full fill-inherit" />
                  </Icon>
                  <Icon className="w-8 h-8"
                    href="https://www.linkedin.com/in/eduardo-a-borges/">
                    <FaTwitterSquare className="w-full h-full fill-inherit" />
                  </Icon>
                  <Icon className="w-8 h-8"
                    href="https://www.linkedin.com/in/eduardo-a-borges/">
                    <FaTwitterSquare className="w-full h-full fill-inherit" />
                  </Icon>
                </div>
              </div>
            </div>

            <div className="w-fit relative flex flex-col text-xs">
              <div className="w-42 h-1 mb-2 bg-line" />
              <p className="font-bold">{t("footer.copyright.title")}</p>
              <p>{t("footer.copyright.subtitle")}</p>
            </div>
          </div>
      }
      </footer>

      <svg width="100%" height="0" preserveAspectRatio="none">
        <defs>
          <mask id="path" /*clipPathUnits="objectBoundingBox"*/>
            <path /*transform={`scale(${1/1440}, ${1/400})`}*/
              d="M0 38.25l80-10.7c80-10.3 240-32.3 400-26.6 160 5.3 320 37.3 480 42.6 160 5.7 320-16.3 400-26.6l80-10.7V400H0Z">
            </path>

            <rect  x="0" y="0" width="100%" height="400vh" fill="white" />

            <path transform={`scale(${width / 1440}, ${width / 1440})`}
                d="m1440 12-80 10.7C1280 33 1120 55 960 49.3 800 44 640 12 480 6.7 320 1 160 23 80 33.3L0 44V-1H1440Z">
            </path>
          </mask>
        </defs>
      </svg>
    </>
  );
};

export default Footer;
