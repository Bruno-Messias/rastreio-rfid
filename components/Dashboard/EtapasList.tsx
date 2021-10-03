import { useState } from "react";
import Etapa from "../../models/Etapa";
import Workflow from "../../models/Workflow";
import WorkflowDrop from './WorkflowDrop';
import EtapaCard from './EtapaCard';

interface WorkflowListProps {
    workflows: Workflow[]
    etapas: Etapa[]
}
export default function EtapaList (props: WorkflowListProps){

    const [wfAtivo, setWfAtivo] = useState(props.workflows[0]);
    const [etapaAtiva, setEtapaAtiva] = useState(props.etapas[0]);

    return (
        <div className="rounded-3xl p-5 mb-2 shadow-xl bg-white mt-2 ml-2">
            <div className = "m-2 flex justify-center">
                <WorkflowDrop workflows={props.workflows} />
            </div>

            <div className="text-3xl ml-5 mt-5">
                <h1>
                    Etapas
                </h1>
            </div>

            <div className="grid grid-cols-2 ml-0">
            {props.etapas.map(etapa => (
                    <EtapaCard key = {etapa.id}
                        nomeEtapa={etapa.nome} 
                        quantidadeDeItens={etapa.quantidadeDeItens} 
                        ativo = {etapaAtiva == etapa ? "true" : "false"} 
                        onClick = {() => setEtapaAtiva(etapa)}/>
                ))}
            </div>
        </div>
    )
}