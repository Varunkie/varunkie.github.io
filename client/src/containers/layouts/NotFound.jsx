import { useTranslation } from "react-i18next";
import React from 'react';

const NotFound = () => {
	const { t } = useTranslation();

	return (<>
		<h1>{t("pages.titles.notfound")}</h1>
	</>);
}

export default NotFound;
