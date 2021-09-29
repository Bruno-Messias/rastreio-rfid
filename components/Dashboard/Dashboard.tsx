import Workflow from "../../models/Workflow";
import {WorkflowList} from "./WorkflowList";

interface DashboardProps{
    workflows : Workflow[]
}


export default function Dashboard(props : DashboardProps){
    return(
        <>
            <WorkflowList workflows = {props.workflows}/>
        </>
    )
}