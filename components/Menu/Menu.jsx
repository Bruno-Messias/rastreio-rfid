// import Menuitem from '../components/Menu/Menuitem'

export default function Menu(props) {
    return (

        <aside
            className="flex flex-col items-center bg-white text-gray-700 shadow-xl h-full rounded-r-3xl">
    
            <ul>
                <li className="hover:bg-gray-100 rounded-3xl">
                    <a
                        href="."
                        className="mt-20 h-5 p-4 px-6 flex justify-center items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
                        </svg>
                    </a>

                    <div className="mr-3 flex items-center justify-center">
                        Dashboard
                    </div>
                </li>

                <li className="hover:bg-gray-100 rounded-3xl">
                    <a
                        href="."
                        className="mt-5 h-5 px-6 flex justify-center items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>

                    </a>

                    <div className="pb-1 mr-3 flex items-center justify-center">
                        Cadastro
                    </div>
                </li>
    
                <li className="hover:bg-gray-100 rounded-3xl">
                    <a
                        href="."
                        className="mt-5 h-5 px-6 flex justify-center items-center w-full
                        focus:text-orange-500">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                
                    </a>

                    <div className="p-1 mr-3 flex items-center justify-center">
                        Dados
                    </div>
                </li>
    
                <li className="hover:bg-gray-100 rounded-3xl">
                    <a
                        href="."
                        className="mt-5 h-5 px-6 flex justify-center items-center w-full
                        focus:text-orange-500">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"    stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                        </svg>
    
                    </a>

                    <div className="p-1 mr-3 flex items-center justify-center">
                            Instrumentais
                    </div>
                </li>
    
                <li className="hover:bg-gray-100 rounded-3xl">
                    <a
                        href="."
                        className="mt-5 h-5 px-6 flex justify-center items-center w-full
                        focus:text-orange-500">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>

                    </a>

                    <div className="p-1 mr-3 flex items-center justify-center">
                        Equipamentos
                    </div>
                </li>
    
            </ul>
    
            <div className="mt-auto h-16 flex items-center w-full">
                {/* <!-- Action Section --> */}
                <button
                    className="h-5 w-10 mx-auto flex justify-center items-center
                    w-full focus:text-orange-500 hover:bg-red-200 rounded-r-3xl focus:outline-none">
                    <svg
                        className="h-5 w-5 text-red-700"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
    
                </button>
            </div>
    
        </aside>

    )
}

