import Instrumental from "../../models/Instrumental";
import InstrumentalCard from "./InstrumentalCard";

interface InstrumentaisListProps {
    instrumentais: Instrumental[]
}

export default function InstrumentaisList(props: InstrumentaisListProps) {
    return (
        <div className="rounded-lg p-6 shadow-xl bg-white m-2 flex-wrap">
            <div className="flex flex-wrap justify-around">
                {props.instrumentais.map(instrumental => (
                    <InstrumentalCard
                        imageUrl={instrumental.imageUrl}
                        nomeInstrumental={instrumental.nome}
                        codigo={instrumental.codigo}
                        lote={instrumental.lote} />
                ))}
            </div>
        </div>
    )

}