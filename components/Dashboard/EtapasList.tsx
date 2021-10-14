import { Key, ReactChild, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
import Etapa from "../../models/Etapa";
import Workflow from "../../models/Workflow";
import EtapaCard from './EtapaCard';
import MyContext from "../../context/myContext";
import { resolveHref } from "next/dist/shared/lib/router/router";

interface WorkflowListProps {
}
export default function EtapaList(props: WorkflowListProps) {

    const { etapaAtiva, setEtapaAtiva, workflows, setWorkflows, etapas, setEtapas} = useContext(MyContext);

    const user = "LEONARDO";

    useEffect(() => {
        fetch(`http://localhost:33457/api/Workflows/GetByUser/${user}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setWorkflows(result);
                    getEtapas(result[0].workflowID);
                }
            )
    }, []);

    function getEtapas(workflowID: string) {
        fetch(`http://localhost:33457/api/Stages/GetByWorkflow/${workflowID}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setEtapas(result);
                    setEtapaAtiva(result[0]);
                }
            )
    }

    return (
        <div className="rounded-3xl p-3 mb-2 shadow-xl bg-white mt-2 ml-2">
            <div className="m-2 flex justify-center">
                <div className="relative inline-flex w-56 mx-3">
                    <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299"/></svg>
                    <select onChange = {w => getEtapas(w.target.value)} className="w-56 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        {workflows.map((workflow: { workflowID: Key; workflowDescription: boolean | ReactChild | ReactFragment | ReactPortal; }) => (
                            <option key = {workflow.workflowID} value = {workflow.workflowID}>
                                {workflow.workflowDescription}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="text-3xl ml-5 mt-5">
                <h1>
                    Etapas
                </h1>
            </div>

            <div className="grid grid-cols-2 ml-0">
                {etapas.map((etapa: { stageId: Key; stageDescription: string; }) => (
                    <EtapaCard key={etapa.stageId}
                        nomeEtapa={etapa.stageDescription}
                        ativo={etapaAtiva == etapa ? "true" : "false"}
                        onClick={() => setEtapaAtiva(etapa)} />
                        
                ))}
            </div>
        </div>
    )
}