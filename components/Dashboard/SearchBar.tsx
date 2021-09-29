export default function SearchBar(props: any) {
    return (
        <div className="flex flex-wrap content-center items-center rounded-lg p-3 shadow-xl h-15 ">
            <input className="text-input focus:ring-2 focus:ring-blue-600"
                type="search"
                placeholder="Pesquise um instrumental..."
            />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

        </div>
    )

}