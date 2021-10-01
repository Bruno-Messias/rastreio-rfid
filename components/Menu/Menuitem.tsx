import { useState } from "react";

export default function Menuitem(props: any) {

    const [state, setState] = useState(0)

    return (
        <>
            {/* Dashboard */}

            <li className={state == 0 ?
                ("bg-blue-500 text-white p-2 shadow-md rounded-r-3xl ") :
                ("bg-white text-gray-600 p-2 hover:bg-gray-100 rounded-r-3xl")}>

                <button onClick={() => setState(0)} className="flex justify-center items-center h-full w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className={state == 0 ?
                        ("text-white h-6") :
                        ("text-blue-400 h-6")}

                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>

                </button>

                <a onClick={() => setState(0)} className={state == 0 ? ("text-white h-5 p-2 cursor-pointer flex items-center justify-center ") : ("text-blue-400 h-5 p-2 cursor-pointer flex items-center justify-center")}>
                    Dashboard
                </a>

            </li>

            {/* Cadastro */}

            <li className={state == 1 ?
                ("bg-blue-500 text-white p-2 shadow-md rounded-r-3xl my-5") :
                ("bg-white text-gray-600 p-2 hover:bg-gray-100 rounded-r-3xl my-5")}>

                <button onClick={() => setState(1)} className="flex justify-center items-center h-full w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className={state == 1 ?
                        (" text-white h-6") :
                        ("text-blue-400 h-6")}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>

                </button>

                <a onClick={() => setState(1)} className={state == 1 ? (" text-white h-6 cursor-pointer flex items-center justify-center") : ("text-blue-400 h-6 cursor-pointer flex items-center justify-center")}>
                    Cadastro
                </a>

            </li>

            {/* Data */}

            <li className={state == 2 ?
                ("bg-blue-500 text-white p-2 shadow-md rounded-r-3xl my-5") :
                ("bg-white text-gray-600 p-2 hover:bg-gray-100 rounded-r-3xl my-5")}>

                <button onClick={() => setState(2)} className="flex justify-center items-center h-full w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className={state == 2 ?
                        (" text-white h-6") :
                        ("text-blue-400 h-6")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>

                </button>

                <a  onClick={() => setState(2)} className={state == 2 ? (" text-white h-6 cursor-pointer flex items-center justify-center") : ("text-blue-400 h-6 cursor-pointer flex items-center justify-center")}>
                    Dados
                </a>

            </li>

            {/* Instrumentos  */}

            <li className={state == 3 ?
                ("bg-blue-500 text-white p-2 shadow-md rounded-r-3xl my-5") :
                ("bg-white text-gray-600 p-2 hover:bg-gray-100 rounded-r-3xl my-5")}>

                <button onClick={() => setState(3)} className="flex justify-center items-center h-full w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className={state == 3 ? (" text-white h-6") : ("text-blue-400 h-6")}

                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>

                </button>

                <a  onClick={() => setState(3)} className={state == 3 ? (" text-white h-6 cursor-pointer flex items-center justify-center") : ("text-blue-400 h-6 cursor-pointer flex items-center justify-center")}>
                    Instrumentos
                </a>

            </li>

            {/* Equipamentos */}

            <li className={state == 4 ?
                ("bg-blue-500 text-white p-2 shadow-md rounded-r-3xl my-5") :
                ("bg-white text-gray-600 p-2 hover:bg-gray-100 rounded-r-3xl my-5")}>

                <button onClick={() => setState(4)} className="flex justify-center items-center h-full w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" className={state == 4 ?
                        (" text-white h-6") :
                        ("text-blue-400 h-6 ")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    </svg>

                </button>

                <a onClick={() => setState(4)} className={state == 4 ? (" text-white h-6 cursor-pointer flex items-center justify-center") : ("text-blue-400 h-6 cursor-pointer flex items-center justify-center")}>
                    Equipamentos
                </a>

            </li>

        </>
    )
}
