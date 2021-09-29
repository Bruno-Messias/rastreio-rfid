import Workflow from "../../models/Workflow";
import SearchBar from "./SearchBar";
import {WorkflowList} from "./WorkflowList";

interface DashboardProps{
    workflows : Workflow[]
}


export default function Dashboard(props : DashboardProps){
    return(
        <div className = "flex items-stretch">
            <WorkflowList workflows = {props.workflows}/>
            <div>
                <SearchBar/>
                <h2>
                    Etapas
                </h2>
            </div>
        </div>
    )
}