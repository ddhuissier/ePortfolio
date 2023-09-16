import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo_small.png";

const lngs = {
  en: { nativeName: "english" },
  fr: { nativeName: "french" },
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = "Davy d'HUISSIER's Profile";
  }, []);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("nav-home")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("about-title")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Techno">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("service-title")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Reference">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("customers-title")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="footer">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("contact-title")}
            </li>
          </Link>

          <div className="flex justify-center items-center">
            {Object.keys(lngs).map((lng) => (
              <img
                alt=""
                key={lng}
                className=" mx-4"
                style={{ width: 10, height: 10 }}
                src={process.env.PUBLIC_URL + "/images/" + lng + ".png"}
                onClick={() => i18n.changeLanguage(lng)}
              />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          {/* <span className="text-3xl font-bold">Logo</span> */}
          <img style={{ width: 80, height: 80 }} src={logo} alt="" />
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">
                  {t("nav-home")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">
                  {t("about-title")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">
                  {t("service-title")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">
                  {t("customers-title")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="footer">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">
                  {t("contact-title")}
                </li>
              </Link>
              <div className="flex justify-center items-center">
                {Object.keys(lngs).map((lng) => (
                  <img
                    alt=""
                    key={lng}
                    className=" mx-4"
                    style={{ width: 30, height: 30 }}
                    src={process.env.PUBLIC_URL + "/images/" + lng + ".png"}
                    onClick={() => i18n.changeLanguage(lng)}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
