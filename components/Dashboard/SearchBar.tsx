export default function SearchBar(props: any) {
    return (
        <div className = " flex justify-end items-stretch">
            <div className="flex flex-wrap content-center items-center rounded-lg m-3 p-4 shadow-xl h-15 bg-white justify-self-auto">
                <input className={`
                    shadow appearance-none border rounded w-60 py-2 px-3
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                `}
                    type="search"
                    placeholder="Pesquise um instrumental..."
                />
                <button className = 'm-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

            </div>

        </div>

    )

}