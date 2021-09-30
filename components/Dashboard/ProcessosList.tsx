import { useState } from "react";
import Processo from "../../models/Processo";
import ProcessoTab from "./ProcessoTab";

interface ProcessosListProps {
    children: any
    processos: Processo[]

}

export default function ProcessosList(props: ProcessosListProps) {
    const [processoAtivo, setProcessoAtivo] = useState(props.processos[0]);
    return (
        <div className="rounded-lg p-6 shadow-xl bg-white m-2">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    {props.processos.map(processo => (
                        <ProcessoTab nomeProcesso={processo.nome} ativo = {processo == processoAtivo ? "true" : "false"} onClick = {()=>setProcessoAtivo(processo)}/>
                    ))}
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )

}