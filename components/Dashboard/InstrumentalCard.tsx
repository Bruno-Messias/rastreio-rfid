export default function InstrumentalCard(props: any) {
    return (
        <div>
            <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                    <div className="mb-3">
                        <img
                            className="w-auto mx-auto rounded-full"
                            src="https://sc04.alicdn.com/kf/H59be5056d53041589300e36c76b6f828z.jpg"
                            alt=""
                        />
                    </div>
                    <h2 className="text-xl font-medium text-gray-700">Pande Muliada</h2>
                    <span className="text-blue-500 block mb-5">Front End Developer</span>
                </div>
            </div>
        </div>
    )
}