import Workflow from "../../models/Workflow";
import { WorkflowCard } from "./WorkflowCard";

interface WorkflowListProps {
    workflows: Workflow[]
}


export const WorkflowList = (props: WorkflowListProps) => {
    return (
        <div className = "rounded-lg p-6 shadow-xl bg-white mt-28 w-1/3 mb-2 ml-2">
            <div>
                <h1>
                    Seus
                </h1>
                <h1>
                    Workflows
                </h1>
                <p>
                    Clique para visualizar...
                </p>
            </div>
            {props.workflows.map(workflow => (
                <WorkflowCard nomeWorkflow={workflow.nome} />
            ))}
        </div>
    )
}