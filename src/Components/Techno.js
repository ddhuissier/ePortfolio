import Aos from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Techno = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500"
      >
        {t("service-title")}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2
          data-aos="fade-up"
          className="text-[18px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          PROJECT MANAGEMENT
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          TECH LEAD
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          SOFTWARE DEVELOPER
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          REACT JS - NATIVE
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          .NET Core
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          ANGULAR
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          AZURE DEVOPS
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-indigo-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-indigo-800 b_glow"
        >
          SQL SERVER
        </h2>
      </div>
    </div>
  );
};

export default Techno;
