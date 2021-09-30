interface InstrumentalCardProps {
    imageUrl: string
    nomeInstrumental: string
    codigo: string
    lote: string
}


export default function InstrumentalCard(props: InstrumentalCardProps) {
    return (
        <div className="p-2 w-64 h-82">
            <div className="bg-white h-96 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                    <img
                        className="w-36 h-36rounded-full"
                        src={props.imageUrl}
                        alt=""
                    />
                </div>
                <h2 className="text-lg font-medium text-gray-700">{props.nomeInstrumental}</h2>
                <span className="text-blue-500 block mb-5">COD {props.codigo} - LOTE {props.lote}</span>
            </div>
        </div>
    )
}