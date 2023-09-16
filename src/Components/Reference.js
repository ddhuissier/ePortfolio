import { useEffect } from "react";
import img1 from "../assets/images/customers/AIRVANCE_LOG-RVB-web-3.png";
import img2 from "../assets/images/customers/Carrefour.jpg";
import img3 from "../assets/images/customers/neuchatel.jpg";
import img4 from "../assets/images/customers/HCL.jpg";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Reference = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-indigo-500"
      >
        {t("customers-title")}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          data-aos="fade-up"
          height={250}
          width={250}
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-800 bg-white b_glow"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={250}
          width={250}
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-800 b_glow"
          src={img2}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={250}
          width={250}
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-800 b_glow"
          src={img3}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={250}
          width={250}
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-indigo-800 b_glow"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Reference;
