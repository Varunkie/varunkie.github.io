import ns from '../../settings/routes/locales.routes';

import { useTranslation, Trans } from "react-i18next";
import { useCallback, useRef } from "react";

import { BlobBackground } from "../../components/customs/BlobBackground";

const Page = () => {
  const { t } = useTranslation([ns.commissions, ns.common]);
  const containerRef = useRef(null);

  return (<>
    <BlobBackground className="w-full min-h-120" containerRef={containerRef} />

    <div className="w-full" ref={containerRef}>

    </div>
  </>);
};

export default Page;
