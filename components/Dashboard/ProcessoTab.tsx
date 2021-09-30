interface ProcessoTabProps{
    nomeProcesso: string
}


export default function ProcessoTab(props: ProcessoTabProps) {
    return (
        <button className="py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            {props.nomeProcesso}
        </button>
    )
}