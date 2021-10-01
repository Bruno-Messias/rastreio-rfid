import SearchBar from "../Dashboard/SearchBar";

export default function Navbar(props: any) {
    return (

        <nav className="flex items-center justify-between content-center h-28 flex-wrap bg-white py-4 px-8 shadow-2xl border-solid border-t-4 border-blue-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0 ">
                <img src="https://www.strattner.com.br/wp-content/themes/strattner/images/logo.png" />
            </div>
            <SearchBar />
        </nav>
    )

}