import { useCallback, useEffect, useState } from "react";
import Processo from "../../models/Processo";
import ProcessoTab from "./ProcessoTab";
import React, { useContext } from 'react'
import MyContext from '../../context/myContext'

interface ProcessosListProps {
    children: any
    processos: Processo[]
}

export default function ProcessosList(props: ProcessosListProps) {

    const {etapaAtiva, processAtivo, setProcessAtivo, processos, setProcessos} = useContext(MyContext);

    return (
        <div className="rounded-3xl p-6 shadow-xl bg-white m-2 h-full">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    {props.processos.map((processo) => (
                        <ProcessoTab 
                            key = {processo.processId}
                            nomeProcesso={processo.processName}
                            ativo = {processo == processAtivo ? "true" : "false"} 
                            onClick = {()=>setProcessAtivo(processo)}/>
                    ))}
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}