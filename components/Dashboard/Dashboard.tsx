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
        <div className="flex items-stretch justify-between bg-blue-50">
            <WorkflowList workflows={props.workflows} />
            <div>
                <SearchBar />
                <EtapasList etapas={props.etapas} />
            </div>
        </div>
    )
}