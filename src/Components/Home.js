import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profile from "../assets/images/bg-davy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          {t("welcome-title-part1")}
          <span className="text-indigo-500">{t("welcome-title-part2")}</span>
        </h1>
        <p data-aos="fade-left">{t("home-description")}</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div data-aos="fade-up" className="flex space-x-2">
              <a
                href="https://github.com/ddhuissier"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://linkedin.com/in/davy-d-huissier"
                className="text-indigo-600 hover:text-indigo-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href="https://wa.me/33626724969"
                className="text-indigo-600 hover:text-indigo-500 rounded-full glow p-2"
              >
                <FaWhatsapp className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={profile}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-indigo-500 img_glow"
        alt=""
      />
    </div>
  );
};

export default Home;
