import { useContext } from "react";
import MyContext from "../../context/myContext";

export default function ModalPage() {
    const {instrumentalClicked,modalOpen,setModalOpen} = useContext(MyContext);
    return (
      <>
        {modalOpen ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Histórico do Instrumental
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setModalOpen(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {instrumentalClicked.instrName}
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="ring-2 ring-red-400 bg-emerald-500 text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow-xl hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalOpen(false)}
                    >
                      Fechar
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
  