import { useState } from "react";
import Workflow from "../../models/Workflow";
import { WorkflowCard } from "./WorkflowCard";

interface WorkflowListProps {
    workflows: Workflow[]
}


export const WorkflowList = (props: WorkflowListProps) => {

    const [wfAtivo, setWfAtivo] = useState(props.workflows[0]);
    return (
        <div className="rounded-lg p-1 pl-0 shadow-xl bg-white mt-28 w-1/3 mb-2 ml-2">
            <div className="text-3xl ml-10 mt-10">
                <h1>
                    Seus
                </h1>
                <h1>
                    Workflows
                </h1>
            </div>
            <div className="flex flex-col p-10 ml-0">
                {props.workflows.map(workflow => (
                    workflow == wfAtivo ? (
                        <WorkflowCard nomeWorkflow={workflow.nome} ativo="true" onClick = {() => setWfAtivo(workflow)} />
                    ) : (
                        <WorkflowCard nomeWorkflow={workflow.nome} ativo="false" onClick = {() => setWfAtivo(workflow)} />
                    )

                ))}

            </div>

        </div>
    )
}