import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo_small.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer" className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <img style={{ width: 80, height: 80 }} src={logo} alt="" />
          <p className="text-[18px] my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            praesentium cupiditate, optio id nesciunt quia debitis nostrum
            blanditiis aperiam tempora!
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-indigo-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Project Manager</li>
            <li className="my-2">Tech Leader</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">Mobile Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-indigo-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: dhdmanufacturing@gmail.com</p>
          <p className="text-[16px] my-4">Whatsapp: +33 626724969 </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-indigo-800 py-2 uppercase">
            {t("follow-me")}
          </h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-indigo-800  transition-all duration-150 ease-in-out"
              href="https://github.com/ddhuissier"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-indigo-800  transition-all duration-150 ease-in-out"
              href="https://linkedin.com/in/davy-d-huissier"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-indigo-800  transition-all duration-150 ease-in-out"
              href="https://wa.me/33626724969"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
