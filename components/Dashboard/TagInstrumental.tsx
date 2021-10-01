interface TagInstrumentalProps {
    tipo: string
    valor: string
    cor: string
}


export default function TagInstrumental(props: TagInstrumentalProps) {

    let borderTagStyle = ""
    let bodyTagStyle = ""
    let textTagStyle = ""

    if (props.cor == "azul") {
        borderTagStyle = "absolute inset-0 text-blue-500 flex"
        bodyTagStyle = "flex-grow h-full -ml-px bg-blue-500 rounded-md rounded-l-none"
        textTagStyle = "relative text-white uppercase font-semibold pr-px"

    } else {
        borderTagStyle = "absolute inset-0 text-green-300 flex"
        bodyTagStyle = "flex-grow h-full -ml-px bg-green-300 rounded-md rounded-l-none"
        textTagStyle = "relative text-white uppercase font-semibold pr-px"
    }

    return (
        <div>
            <div className="inline-block relative py-1 text-xs">
                <div className={borderTagStyle}>
                    <svg height="100%" viewBox="0 0 50 100">
                        <path
                            d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                            fill="currentColor" />
                    </svg>
                    <div className={bodyTagStyle}></div>
                </div>
                <span className={textTagStyle}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{props.tipo} {props.valor}<span>&nbsp;</span>
                </span>
            </div>
        </div>
    )

}