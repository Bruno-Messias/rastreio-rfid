interface EtapaCardProps {
    nomeEtapa: string
    quantidadeDeItens: number
}

export default function EtapaCard(props: EtapaCardProps) {
    return (
        <button className={`
            bg-blue-600 pt-1 px-2 m-5 bg-gradient-to-b
            from-blue-400 to-blue-500 rounded-xl 
            shadow-lg w-52
            transform hover:scale-110 motion-reduce:transform-none
        `}>
            <div className="flex justify-center">
                <div className="flex justify-center p-4 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl w-25" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-center" >{props.nomeEtapa}</p>
                <div className="mt-2">
                    <p className="text-gray-200 text-center">{props.quantidadeDeItens} Itens </p>
                </div>
            </div>
        </button>
    )

}