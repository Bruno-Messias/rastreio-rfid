import Instrumental from "../../models/Instrumental";
import InstrumentalCard from "./InstrumentalCard";

interface InstrumentaisListProps {
    instrumentais: Instrumental[]
}

export default function InstrumentaisList(props: InstrumentaisListProps) {
    return (
        <div className="rounded-lg p-4 bg-white m-2 flex-wrap">
            <div className="flex flex-wrap justify-evenly">
                {props.instrumentais.map(instrumental => (
                    <InstrumentalCard
                        key = {instrumental.id}
                        imageUrl={instrumental.imageUrl}
                        nomeInstrumental={instrumental.nome}
                        codigo={instrumental.codigo}
                        lote={instrumental.lote} />
                ))}
            </div>
        </div>
    )
}