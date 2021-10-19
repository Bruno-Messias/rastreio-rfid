import Etapa from "../../models/Etapa";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import Instrumental from "../../models/Instrumental";
import Processo from "../../models/Processo";
import Workflow from "../../models/Workflow";
import InstrumentaisList from "./InstrumentaisList";
import ProcessosList from "./ProcessosList";
import SearchBar from "./SearchBar";
import EtapaList from "./EtapasList";
import MyContext from '../../context/myContext'
import { useEffect, useRef, useState } from "react";

interface DashboardProps {
}

export default function Dashboard(props: DashboardProps) {

  const [etapaAtiva, setEtapaAtiva] = useState<Etapa>();
  const [processAtivo, setProcessAtivo] = useState<Processo>();
  const [processos, setProcessos] = useState<Processo[]>([]);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [etapas, setEtapas] = useState<Etapa[]>([]);
  const [instrumentals, setInstrumentals] = useState<Instrumental[]>([]);
  const [atualizar, setAtualizar] = useState<boolean>(true);

  useEffect(() => {
    async function fetchApi() {
      if (etapaAtiva != undefined) {
        await fetch(`http://localhost:33457/api/Processes/GetByStage/${etapaAtiva.stageId}`)
          .then(res => res.json())
          .then(
            (result) => {
              setProcessos(result);
              setProcessAtivo(result[0]);
            }
          )
      }
    }
    fetchApi();
  }, [etapaAtiva]);

  useEffect(() => {
    async function fetchApi() {
      if (processAtivo != undefined) {  
        await fetch(`http://localhost:33457/api/Instrumentals/GetByProcess/${processAtivo.processId}`)
          .then(res => res.json())
          .then(
            (result) => {
              setInstrumentals(result);
            }
          )
      }
    }
    fetchApi();
  }, [processAtivo, atualizar])

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:33457/message", { withCredentials: false })
      .withAutomaticReconnect()
      .build();
    connect
      .start()
      .then(() => {
        connect.on("SendAsync", (message) => {
          setAtualizar(!atualizar)
        });
      })
      .catch((error) => console.log(error));
  }, [atualizar]);

  return (
    <div className="flex justify-left bg-blue-50 min-h-screen w-screen">
      <MyContext.Provider value={{ etapaAtiva, setEtapaAtiva, workflows, setWorkflows, etapas, setEtapas, processAtivo, setProcessAtivo, processos, setProcessos, instrumentals }}>
        <EtapaList />
        <div className="flex flex-col w-full">
          <ProcessosList processos={processos}>
            <InstrumentaisList instrumentais={instrumentals} />
          </ProcessosList>
        </div>
      </MyContext.Provider>
    </div>
  )
}