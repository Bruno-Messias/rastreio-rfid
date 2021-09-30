import { useState } from "react";
import Etapa from "../../models/Etapa";
import EtapaCard from "./EtapaCard";

interface EtapasListProps {
    etapas: Etapa[]
}

export default function EtapasList(props: EtapasListProps) {

    const [etapaAtiva, setEtapaAtiva] = useState(props.etapas[0]);
    
    return (
        <div className = "rounded-lg p-6 shadow-xl bg-white m-2 ">
            <h1 className="text-3xl ml-5">
                Etapas
            </h1>
            <div className="flex flex-wrap justify-center ">
                {props.etapas.map(etapa => (
                    <EtapaCard
                        nomeEtapa={etapa.nome} 
                        quantidadeDeItens={etapa.quantidadeDeItens} 
                        ativo = {etapaAtiva == etapa ? "true" : "false"} 
                        onClick = {() => setEtapaAtiva(etapa)}/>
                ))}
            </div>
        </div>

    )

}