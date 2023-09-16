import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import profile from "../assets/images/bg-davy.png";

const lngs = {
  en: { nativeName: "english" },
  fr: { nativeName: "french" },
};

export default function Main() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = "Davy d'HUISSIER's Profile";
  }, []);

  return (
    <header className="text-center ">
      <div className="container-home bg-gray-100 min-h-screen py-12">
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
        <div className="flex justify-center items-center div-photo">
          <img src={profile} className="panel-photo" alt="profile" />
        </div>
        <div className="descriptif">
          <h2>descriptif</h2>
        </div>
      </div>
    </header>
  );
}
