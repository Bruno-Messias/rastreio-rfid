import TagInstrumental from './TagInstrumental'


interface InstrumentalCardProps {
    imageUrl: string
    nomeInstrumental: string
    codigo: string
    lote: string
}


export default function InstrumentalCard(props: InstrumentalCardProps) {
    return (
        <div className="relative bg-white pt-6 px-6 rounded-3xl w-60 my-4 shadow-2xl h-52 cursor-pointer">
            <div className=" text-white flex items-center absolute rounded-full py-0.5 px-0.5 shadow-xl bg-blue-400 left-4 -top-6">
                <img
                    className="w-16 h-16 mx-auto rounded-full"
                    src={props.imageUrl}
                    alt=""
                />
            </div>
            <div className="mt-8 flex flex-col content-center justify-end h-32">
                <div className=" h-full flex content-start">
                <p className="text-md font-semibold my-2">{props.nomeInstrumental}</p>
                </div>
                <div className="h-max flex flex-col content-end">
                    <div className="border-t-2 border-green-300"></div>
                    <div className="flex space-x-4 mt-2 justify-center content-center">
                        <TagInstrumental tipo="cod" valor={props.codigo} cor="azul" />
                        <TagInstrumental tipo="lote" valor={props.lote} cor="azul" />
                    </div>
                </div>
            </div>
        </div>

    )
}

