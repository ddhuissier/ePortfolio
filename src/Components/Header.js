import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "english" },
  fr: { nativeName: "french" },
};

export default function Header() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = "Davy d'HUISSIER's Profile";
  }, []);

  return (
    <header className="text-center ">
      <div className="flex justify-center items-center">
        {Object.keys(lngs).map((lng) => (
          <img
            alt=""
            key={lng}
            className=" mx-4"
            style={{ width: 40, height: 40 }}
            /*   style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }} */
            src={process.env.PUBLIC_URL + "/images/" + lng + ".png"}
            onClick={() => i18n.changeLanguage(lng)}
          />
        ))}
      </div>
      {/* <span className="text-white text-2xl">{t("title")}</span> */}
      <div className="flex-1 justify-center content-center mt-4">
        <h1 className="text-4xl text-white font-semibold">D'HUISSIER DAVY</h1>
        <p className="text-white text-2xl">{t("function")}</p>
      </div>
    </header>
  );
}
