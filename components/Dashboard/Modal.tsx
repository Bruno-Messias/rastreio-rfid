import { useContext } from "react";
import MyContext from "../../context/myContext";
import TableHistory from "./Table";

export default function ModalPage() {
    const {instrumentalClicked,modalOpen,setModalOpen} = useContext(MyContext);
    return (
      <>
        {modalOpen ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none h-max-screen
              "
            >
              <div className=" h-max relative w-auto h-full my-6 mx-auto max-w-3xl">
                <div className="h-max border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-hidden">
                  <div className="h-max flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-2xl font-semibold">
                      Histórico do Instrumental
                    </h3>
                    <button
                      className="flex flex-wrap content-center p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setModalOpen(false)}
                    >
                      <span className=" flex flex-wrap content-center bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-5 pt-1 pb-1 flex-auto overflow-y-hidden h-full">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {instrumentalClicked.instrName}
                    </p>
                    <TableHistory/>
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
  