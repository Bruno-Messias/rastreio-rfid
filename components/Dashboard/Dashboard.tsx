import Etapa from "../../models/Etapa";
import Instrumental from "../../models/Instrumental";
import Processo from "../../models/Processo";
import Workflow from "../../models/Workflow";
import EtapasList from "./EtapasList";
import InstrumentaisList from "./InstrumentaisList";
import ProcessosList from "./ProcessosList";
import SearchBar from "./SearchBar";
import { WorkflowList } from "./WorkflowList";
import MyContext from '../../context/myContext'
import { useState } from "react";

interface DashboardProps {
    workflows: Workflow[]
    etapas: Etapa[]
    processos: Processo[]
}


export default function Dashboard(props: DashboardProps) {

    const [processoAtivo, setProcessoAtivo] = useState(props.processos[0]);
    const [imagemProcesso, setImagemProcesso] = useState("1");


    let IMAGE_URL = ""
  
    if (imagemProcesso == "1") {
      IMAGE_URL = "https://www.prolab.com.br/wp-content/uploads/2018/12/Instrumentos-Cirurgicos.jpg"
    } else if (imagemProcesso == "2") {
      IMAGE_URL = "https://fibracirurgica.vteximg.com.br/arquivos/ids/185144-1000-1000/Kit-Instrumental-Academico-Fibra-Cirurgica..jpg?v=636687127762600000"
    } else {
      IMAGE_URL = "https://manutencao.dimsolucoes.com.br/instrumentos/imagens/gravacao-instrumental-cirurgico.jpg"
    }

    const instrumentais = [
        new Instrumental("1", IMAGE_URL, "JOGO DE APLICAÇÃO PARA ENXERTO ÓSSEO D=9MM.", "31156ON", "7897"),
        new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=5MM, C=30CM.", "31156ON", "7897"),
        new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=3.5MM, C=20CM, ROTATÓRIA.", "31156ON", "7897"),
        new Instrumental("1", IMAGE_URL, "RASPADOR KARL STORZ, NEGUS, TIPO CURETA, TAMANHO 3.", "3216JN", "7897"),
        new Instrumental("1", IMAGE_URL, "RETRATOR KARL STORZ, VOLKMANN.", "31156ON", "7897"),
        new Instrumental("1", IMAGE_URL, "PINÇA SELADORA DE VASOS 8MM, ESTÉRIL, 128 VIDAS.", "315KJN2", "990"),
      ]

    return (
        <div className="flex justify-end bg-blue-50 min-h-screen">
            <WorkflowList workflows={props.workflows} />
            <div className = "flex flex-col w-10/12">
                <SearchBar />
                <EtapasList etapas={props.etapas} />

                <MyContext.Provider value={{imagemProcesso, setImagemProcesso, processoAtivo, setProcessoAtivo}}>
                <ProcessosList processos = {props.processos}>
                    <InstrumentaisList instrumentais = {instrumentais}/>
                </ProcessosList>
                </MyContext.Provider>
            </div>
        </div>
    )
}