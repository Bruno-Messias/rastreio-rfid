export default function ProcessosList(props: any) {
    return (
        <div className="rounded-lg p-6 shadow-xl bg-white m-2">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    <button className="py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                        Tab 1
                    </button><button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                        Tab 2
                    </button><button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                        Tab 3
                    </button><button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                        Tab 4
                    </button>
                </nav>
            </div>
        </div>
    )

}