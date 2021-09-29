import Etapa from "../../models/Etapa";
import EtapaCard from "./EtapaCard";

interface EtapasListProps {
    etapas: Etapa[]
}

export default function EtapasList(props: EtapasListProps) {
    return (
        <div className = "rounded-lg p-6 shadow-xl bg-white m-2">
            <h1 className="text-3xl ml-5">
                Etapas
            </h1>
            <div className="flex flex-wrap items-stretch ">
                {props.etapas.map(etapa => (
                    <EtapaCard nomeEtapa={etapa.nome} quantidadeDeItens={etapa.quantidadeDeItens} />
                ))}
            </div>
        </div>

    )

}