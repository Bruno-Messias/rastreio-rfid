import Etapa from "../../models/Etapa";
import Workflow from "../../models/Workflow";
import EtapasList from "./EtapasList";
import SearchBar from "./SearchBar";
import { WorkflowList } from "./WorkflowList";

interface DashboardProps {
    workflows: Workflow[]
    etapas: Etapa[]
}


export default function Dashboard(props: DashboardProps) {
    return (
        <div className="flex justify-end items-stretch bg-blue-50 min-h-screen">
            <WorkflowList workflows={props.workflows} />
            <div>
                <SearchBar />
                <EtapasList etapas={props.etapas} />
            </div>
        </div>
    )
}