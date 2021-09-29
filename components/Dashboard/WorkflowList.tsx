import Workflow from "../../models/Workflow";
import { WorkflowCard } from "./WorkflowCard";

interface WorkflowListProps {
    workflows: Workflow[]
}


export const WorkflowList = (props: WorkflowListProps) => {
    return (
        <div>
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