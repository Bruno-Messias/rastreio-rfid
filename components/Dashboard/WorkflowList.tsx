import Workflow from "../../models/Workflow";
import WorkflowCard from "./WorkflowCard";

interface WorkflowListProps {
    workflows : Workflow[]
}


export default function WorkflowList(props: WorkflowListProps) {
    return (
        <div>
            <h1>
                Seus Workflows
            </h1>
            {props.workflows.map(workflow => {
                <WorkflowCard nomeWorkflow = {workflow.nome}/>
            })}
        </div>
    )
}