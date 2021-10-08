import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Menu from '../components/Menu/Menu'
import Etapa from '../models/Etapa'
import Instrumental from '../models/Instrumental'
import Processo from '../models/Processo'
import Workflow from '../models/Workflow'
import styles from '../styles/Home.module.css'
import MyContext from '../context/myContext'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Home() {


  const processos = [
    new Processo("1", "Limpeza Manual"),
    new Processo("2", "Lavagem Ultrassônica"),
    new Processo("3", "Termodesinfecção")
  ]


  const [processoAtivo, setProcessoAtivo] = useState(processos[0]);

  return (
    <div>
      <Navbar />
      <div className="flex bg-blue-50 justify-around">
        <Menu />
        <Dashboard processos={processos} />
      </div>
      <Footer/>
    </div>
  )
}
