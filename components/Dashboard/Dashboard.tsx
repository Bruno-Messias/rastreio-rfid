import Etapa from "../../models/Etapa";
import Instrumental from "../../models/Instrumental";
import Processo from "../../models/Processo";
import Workflow from "../../models/Workflow";
import InstrumentaisList from "./InstrumentaisList";
import ProcessosList from "./ProcessosList";
import SearchBar from "./SearchBar";
import EtapaList from "./EtapasList";
import MyContext from '../../context/myContext'
import { useEffect, useState } from "react";

interface DashboardProps {
  processos: Processo[]
}


export default function Dashboard(props: DashboardProps) {


  const [etapaAtiva, setEtapaAtiva] = useState<Etapa>();
  const [processAtivo, setProcessAtivo] = useState<Processo>();
  const [processos, setProcessos] = useState<Processo[]>([]);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [etapas, setEtapas] = useState<Etapa[]>([]);


  let IMAGE_URL = ""

  const instrumentais = [
    new Instrumental("1", IMAGE_URL, "JOGO DE APLICAÇÃO PARA ENXERTO ÓSSEO D=9MM.", "31156ON", "7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=5MM, C=30CM.", "31156ON", "7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=3.5MM, C=20CM, ROTATÓRIA.", "31156ON", "7897"),
    new Instrumental("1", IMAGE_URL, "RASPADOR KARL STORZ, NEGUS, TIPO CURETA, TAMANHO 3.", "3216JN", "7897"),
    new Instrumental("1", IMAGE_URL, "RETRATOR KARL STORZ, VOLKMANN.", "31156ON", "7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA SELADORA DE VASOS 8MM, ESTÉRIL, 128 VIDAS.", "315KJN2", "990"),
    new Instrumental("1", IMAGE_URL, "RASPADOR KARL STORZ, NEGUS, TIPO CURETA, TAMANHO 3.", "3216JN", "7897"),
    new Instrumental("1", IMAGE_URL, "RETRATOR KARL STORZ, VOLKMANN.", "31156ON", "7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA SELADORA DE VASOS 8MM, ESTÉRIL, 128 VIDAS.", "315KJN2", "990"),
    new Instrumental("1", IMAGE_URL, "RASPADOR KARL STORZ, NEGUS, TIPO CURETA, TAMANHO 3.", "3216JN", "7897"),
  ]

  useEffect(() => {

    fetch(`https://localhost:44349/api/Processes/GetByStage/${etapaAtiva?.stageId}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          setProcessos(result);
          setProcessAtivo(result[0]);
        }
      )
  }, [etapaAtiva]);

  return (
    <div className="flex justify-center bg-blue-50 min-h-screen">
      <MyContext.Provider value={{ etapaAtiva, setEtapaAtiva, workflows, setWorkflows, etapas, setEtapas, processAtivo, setProcessAtivo, processos, setProcessos }}>
        <EtapaList />
        <div className="flex flex-col w-10/12">
          <ProcessosList processos={processos}>
            <InstrumentaisList instrumentais={instrumentais} />
          </ProcessosList>
        </div>
      </MyContext.Provider>
    </div>
  )
}