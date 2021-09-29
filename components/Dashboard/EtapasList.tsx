import Etapa from "../../models/Etapa";
import EtapaCard from "./EtapaCard";

interface EtapasListProps{
    etapas : Etapa[]
}

export default function EtapasList(props : EtapasListProps){
    return(
        <div className = "flex items-stretch">
            {props.etapas.map(etapa => (
                <EtapaCard nomeEtapa={etapa.nome} quantidadeDeItens = {etapa.quantidadeDeItens}/>
            ))}
        </div>
    )

}