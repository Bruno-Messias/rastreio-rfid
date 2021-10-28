import Instrumental from "../../models/Instrumental";
import InstrumentalCard from "./InstrumentalCard";

interface InstrumentaisListProps {
    instrumentais: Instrumental[]
}

export default function InstrumentaisList(props: InstrumentaisListProps) {
    return (
        <div className="rounded-lg p-4 bg-white m-2 flex-wrap">
            <div className="flex flex-wrap justify-start">
                {props.instrumentais.map(instrumental => (
                    <InstrumentalCard
                        key = {instrumental.instrId}
                        instrumental = {instrumental}
                        imageUrl={instrumental.instrImageUrl}
                        nomeInstrumental={instrumental.instrName}
                        codigo={instrumental.instrCode}
                        lote={instrumental.instrBatch} />
                ))}
            </div>
        </div>
    )
}