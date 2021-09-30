import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard/Dashboard'
import Etapa from '../models/Etapa'
import Instrumental from '../models/Instrumental'
import Processo from '../models/Processo'
import Workflow from '../models/Workflow'
import styles from '../styles/Home.module.css'


export default function Home(){

  const IMAGE_URL = "https://www.prolab.com.br/wp-content/uploads/2018/12/Instrumentos-Cirurgicos.jpg"

  const workflows = [
    new Workflow("1", "Workflow 1"),
    new Workflow("2", "Workflow 2"),
    new Workflow("3", "Workflow 3"),
    new Workflow("4", "Workflow 4"),
  ]

  const etapas = [
    new Etapa("1", "Expurgo", +13),
    new Etapa("2", "Arsenal", +12),
    new Etapa("3", "Preparo", +25),
    new Etapa("4", "Teste", +26)
  ]

  const processos = [
    new Processo("1", "Limpeza Manual"),
    new Processo("2", "Lavagem Ultrassônica"),
    new Processo("3", "Termodesinfecção")
  ]

  const instrumentais = [
    new Instrumental("1", IMAGE_URL, "JOGO DE APLICAÇÃO PARA ENXERTO ÓSSEO D=9MM.","31156ON","7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=5MM, C=30CM.","31156ON","7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA KARL STORZ CLICKLINE, D=3.5MM, C=20CM, ROTATÓRIA.","31156ON","7897"),
    new Instrumental("1", IMAGE_URL, "RASPADOR KARL STORZ, NEGUS, TIPO CURETA, TAMANHO 3.","3216JN","7897"),
    new Instrumental("1", IMAGE_URL, "RETRATOR KARL STORZ, VOLKMANN.","31156ON","7897"),
    new Instrumental("1", IMAGE_URL, "PINÇA SELADORA DE VASOS 8MM, ESTÉRIL, 128 VIDAS.","315KJN2","990"),
  ]

  return(
    <Dashboard workflows = {workflows} etapas = {etapas} processos = {processos} instrumentais = {instrumentais}/>
  )

}
