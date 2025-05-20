import images from "../../resources/images";

import { useResizeObserver } from '../../utils/hooks/useWindow';

import { FaTwitterSquare } from "react-icons/fa";
import { TbPencilHeart } from "react-icons/tb";
import { useRef } from 'react';

import Icon from "../../components/common/ExternalLink";
import { d } from "../../components/layouts/WaveContainer";

const Footer = ({ className = "", t }) => {
  const containerRef = useRef(null);
  const containerSize = useResizeObserver(containerRef);

  return (<>
      <svg width="100%" height="0" preserveAspectRatio="none">
        <defs>
          <mask id="path" /*clipPathUnits="objectBoundingBox"*/>
            <rect  x="0" y="0" width="100%" height={containerSize.height} fill="white" />

            <path transform={`scale(${containerSize.width / 1440}, ${containerSize.width / 1440})`}
                d={d}>
            </path>
          </mask>
        </defs>
      </svg>

      <footer className={`${className} relative overflow-hidden mask-[url(#path)]`} ref={containerRef}>
        <div className="absolute w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(\"${images.blobs.footer_top_right}\")` }} />

        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-left-bottom"
          style={{ backgroundImage: `url(\"${images.blobs.footer_bottom_left}\")` }} />
 
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
      </footer>
    </>
  );
};

export default Footer;
