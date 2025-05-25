import images from "../../resources/images";

import { useResizeObserver } from '../../utils/hooks/useWindow';

import { FaTwitterSquare } from "react-icons/fa";
import { TbPencilHeart } from "react-icons/tb";
import { useRef } from 'react';

import Link from "../../components/common/ExternalLink";
import { d } from "../../components/layouts/WaveContainer";

const Footer = ({ className = "", t }) => {
  const containerRef = useRef(null);

  return (<>
      <footer className={`${className} relative overflow-hidden z-100`} ref={containerRef}>
        {/*
        <div className="absolute w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(\"${images.blobs.footer_top_right}\")` }} />

        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-left-bottom"
          style={{ backgroundImage: `url(\"${images.blobs.footer_bottom_left}\")` }} />
          */}
 
        <div className="w-9/12 md:w-2/3 lg:w-1/2 mx-auto
          sm:px-12 lg:px-16 py-16 space-y-30 sm:space-y-40">
          <div className="relative flex text-xl 
            py-8 flex-col md:flex-row space-y-4 md:space-y0 
            items-center md:items-start text-center md:text-left">
            <div className="flex flex-col grow space-y-2">
              <p className="font-bold">{t("footer.contact.title")}</p>
              <div className="flex items-center">
                <TbPencilHeart className="mx-2 text-icon outline-0" />
                <p className="text-lg select-all">{t("common.email")}</p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="font-bold hidden md:block">{t("footer.social.title")}</p>
              <div className="flex h-full space-x-1 fill-icon">
                <Link className="w-8 h-8"
                  href="https://twitter.com/varunkie">
                  <FaTwitterSquare className="w-full h-full fill-inherit hover:fill-icon-hover" />
                </Link>
                <Link className="w-8 h-8"
                  href="https://www.linkedin.com/in/eduardo-a-borges/">
                  <FaTwitterSquare className="w-full h-full fill-inherit hover:fill-icon-hover" />
                </Link>
                <Link className="w-8 h-8"
                  href="https://www.linkedin.com/in/eduardo-a-borges/">
                  <FaTwitterSquare className="w-full h-full fill-inherit hover:fill-icon-hover" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-fit relative flex flex-col text-xs 
            items-center md:items-start text-center md:text-left">
            <div className="w-42 h-1 mb-2 bg-line" />
            <p className="font-bold">{t("footer.copyright.title")}</p>
            <p>{t("footer.copyright.subtitle")}</p>
          </div>
        </div>
      </footer>

      <Background className={className} containerRef={containerRef} />
    </>
  );
};

const Background = ({ className = "", containerRef }) => {
  const containerSize = useResizeObserver(containerRef);
  const pathScale = containerSize.width / 1440;
  const xOffset = containerSize.width - 1440;
  const yOffset = containerSize.height - 475;

  return (
    <svg className={`${className} absolute bottom-0 z-90 transform-gpu`} 
      width="100%" height={containerSize.height}
      preserveAspectRatio="none">

      <defs>
        <mask id="path">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <path transform={`scale(${pathScale}, ${pathScale})`}
            d={d}>
          </path>
        </mask>
      </defs>

      <rect x="0" y="0" 
        className="fill-div" 
        width="100%" height="100%" 
        mask="url(#path)" />

      <image x={Math.max(xOffset, 0)} y="0" 
        width={1440} height={containerSize.height} 
        href={images.blobs.footer_top_right} 
        preserveAspectRatio="none"
        mask="url(#path)" />

      <image x="0" y={Math.max(yOffset, 0)} 
        width={650} height={500}
        href={images.blobs.footer_bottom_left} 
        preserveAspectRatio="none"
        mask="url(#path)" />
    </svg>
  );
};

export default Footer;
