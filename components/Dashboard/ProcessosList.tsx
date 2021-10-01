import { useEffect, useState } from "react";
import Processo from "../../models/Processo";
import ProcessoTab from "./ProcessoTab";
import React, { useContext } from 'react'
import MyContext from '../../context/myContext'

interface ProcessosListProps {
    children: any
    processos: Processo[]

}

export default function ProcessosList(props: ProcessosListProps) {

    const {imagemProcesso, setImagemProcesso, processoAtivo, setProcessoAtivo} = useContext(MyContext);

    function alterarProcesso(processo : Processo, id:string){
        setImagemProcesso(id)
        setProcessoAtivo(processo)

        console.log(processoAtivo.nome)
    }
    return (
        <div className="rounded-3xl p-6 shadow-xl bg-white m-2 h-full">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    {props.processos.map(processo => (
                        <ProcessoTab nomeProcesso={processo.nome} ativo = {processo == processoAtivo ? "true" : "false"} onClick = {()=>alterarProcesso(processo, processo.id)}/>
                    ))}
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )

}