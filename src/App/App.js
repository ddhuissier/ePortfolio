import "../App.css";
import { Suspense, useEffect, useState } from "react";
import Home from "../Components/Home";
import logo from "../assets/images/logo_small.png";
import NavBar from "../Components/NavBar";
import { BallTriangle } from "react-loader-spinner";
import About from "../Components/About";
import Reference from "../Components/Reference";
import Footer from "../Components/Footer";
import Techno from "../Components/Techno";
import { BsArrowUpCircleFill } from "react-icons/bs";

function App() {
  const getBackBtnSelector = () => {
    const top = document.querySelector(".back-to-top");
    if (top) {
      top.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getBackBtnSelector();
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={200}
            width={200}
            radius={5}
            color="#2D00FB"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div style={{ backgroundColor: "#110F1A" }}>
          <NavBar />
          <Home />
          <About />
          <Techno />
          <Reference />
          <Footer />
          <div className="back-to-top">
            <BsArrowUpCircleFill className="bg-indigo-800" size={40} />
          </div>
        </div>
      )}
    </>
  );
}

const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

export default function WrappedApp() {
  return (
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  );
}
