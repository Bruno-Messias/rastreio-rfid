interface InstrumentalCardProps {
    imageUrl: string
    nomeInstrumental: string
    codigo: string
    lote: string
}


export default function InstrumentalCard(props: InstrumentalCardProps) {
    return (
        <div className="p-2 w-64 h-82 ">
            <div className="bg-white h-72 px-6 py-8 rounded-lg shadow-2xl text-center cursor-pointer">
                <div className="mb-5">
                    <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src={props.imageUrl}
                        alt=""
                    />
                </div>
                <p className="text-md text-gray-700">{props.nomeInstrumental}</p>
                <span className="text-blue-500 block mb-5">COD {props.codigo} - LOTE {props.lote}</span>
            </div>
        </div>
    )
}