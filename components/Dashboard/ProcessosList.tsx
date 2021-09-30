import Processo from "../../models/Processo";
import ProcessoTab from "./ProcessoTab";

interface ProcessosListProps {
    children: any
    processos: Processo[]

}

export default function ProcessosList(props: ProcessosListProps) {
    return (
        <div className="rounded-lg p-6 shadow-xl bg-white m-2">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    {props.processos.map(processo => (
                        <ProcessoTab nomeProcesso={processo.nome} />
                    ))}
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )

}