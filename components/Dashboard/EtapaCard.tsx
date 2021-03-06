interface EtapaCardProps {
    nomeEtapa: string
    ativo: string
    onClick: () => void
}

export default function EtapaCard(props: EtapaCardProps) {


    let style = ""

    if (props.ativo === "true") {
        style = " ring-2 ring-blue-300text-black pt-1 px-2 m-3 bg-gradient-to-b h-max-32 w-max-32 rounded-xl shadow-lg transform hover:scale-110 motion-reduce:transform-none"
    } else {
        style = "bg-white text-gray-600 pt-1 px-2 m-3 rounded-xl shadow-lg h-max-32 w-max-32 transform hover:scale-110 motion-reduce:transform-none"
    }

    return (
        <button className={style}
        onClick = {props.onClick}>
            <div className="flex justify-center">
                <div className={props.ativo == "true" ? 
                                ("flex justify-center p-4 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl w-25") : 
                                ("flex justify-center p-4 bg-white ring-2 ring-blue-300 rounded-lg shadow-xl w-25")} >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        className={props.ativo == "true" ? ("h-6 w-6 text-white"): ("h-6 w-6 text-blue-400")} 
                        fill="none" viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
            </div>
            <div className="p-2">
                <p className=" font-semibold text-center" >{props.nomeEtapa}</p>
                <div className="mt-1">
                    <p className="text-center">10 Itens </p>
                </div>
            </div>
        </button>
    )

}