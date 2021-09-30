import Menuitem from './Menuitem'

export default function Menu(props) {
    return (

        <aside
            className="mt-28 flex flex-col items-center bg-white text-gray-700 shadow-xl h-full rounded-r-3xl mr-0">

            <ul className="">
                <>
                    <Menuitem icon="./dashicon.svg" text="Dashboard" href="." />

                    <Menuitem icon="./boardicon.svg" text="Cadastro" href="." />

                    <Menuitem icon="./dataicon.svg" text="Dados" href="." />

                    <Menuitem icon="./instricon.svg" text="Instrumentais" href="." />

                    <Menuitem icon="./equipicon.svg" text="Equipamentos" href="." />
                </>

            </ul>

            <div className="mt-auto h-16 flex items-center w-full">
                {/* <!-- Action Section --> */}
                <button
                    className="h-16 mx-auto flex justify-center items-center
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

