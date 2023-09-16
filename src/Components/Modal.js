import React from "react";
import { useTranslation } from "react-i18next";
import { TimeLine } from "./TimeLine";

export default function Modal() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="neno-button shadow-xl hover:shadow-indigo-800/50  text-white border-2 hover:bg-indigo-800 border-indigo-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        Short Resume
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-blue-800 font-semibold">
                    {t("modal-title")}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-blue-800 opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-blue-800 opacity-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <TimeLine />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="neno-button shadow-xl hover:shadow-indigo-800/50  text-blue-800 border-2 hover:bg-indigo-800 border-indigo-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
