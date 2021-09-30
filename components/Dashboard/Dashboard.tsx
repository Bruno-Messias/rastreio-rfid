import Etapa from "../../models/Etapa";
import Instrumental from "../../models/Instrumental";
import Processo from "../../models/Processo";
import Workflow from "../../models/Workflow";
import EtapasList from "./EtapasList";
import InstrumentaisList from "./InstrumentaisList";
import ProcessosList from "./ProcessosList";
import SearchBar from "./SearchBar";
import { WorkflowList } from "./WorkflowList";

interface DashboardProps {
    workflows: Workflow[]
    etapas: Etapa[]
    processos: Processo[]
    instrumentais: Instrumental[]
}


export default function Dashboard(props: DashboardProps) {
    return (
        <div className="flex justify-end bg-blue-50 min-h-screen">
            <WorkflowList workflows={props.workflows} />
            <div className = "flex flex-col w-10/12">
                <SearchBar />
                <EtapasList etapas={props.etapas} />
                <ProcessosList processos = {props.processos}>
                    <InstrumentaisList instrumentais = {props.instrumentais}/>
                </ProcessosList>
            </div>
        </div>
    )
}