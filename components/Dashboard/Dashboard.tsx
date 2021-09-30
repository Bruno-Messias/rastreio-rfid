import Etapa from "../../models/Etapa";
import Workflow from "../../models/Workflow";
import EtapasList from "./EtapasList";
import ProcessosList from "./ProcessosList";
import SearchBar from "./SearchBar";
import { WorkflowList } from "./WorkflowList";

interface DashboardProps {
    workflows: Workflow[]
    etapas: Etapa[]
}


export default function Dashboard(props: DashboardProps) {
    return (
        <div className="flex justify-end bg-blue-50 min-h-screen">
            <WorkflowList workflows={props.workflows} />
            <div className = "flex flex-col w-10/12">
                <SearchBar />
                <EtapasList etapas={props.etapas} />
                <ProcessosList/>
            </div>
        </div>
    )
}