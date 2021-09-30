interface ProcessoTabProps{
    nomeProcesso: string
    ativo:string
    onClick: () => void
}


export default function ProcessoTab(props: ProcessoTabProps) {

    let style = ""

    if (props.ativo === "true") {
        style = "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
    } else {
        style = "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
    }

    return (
        <button 
            className={style}
            onClick = {props.onClick}>
            {props.nomeProcesso}
        </button>
    )
}