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

  const workflows = [
    new Workflow("1", "Workflow 1"),
    new Workflow("2", "Workflow 2"),
    new Workflow("3", "Workflow 3"),
    new Workflow("4", "Workflow 4")
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

  return (
    <div>
      <Navbar />
      <div className="flex bg-blue-50 justify-around">
        <Menu />
        <Dashboard workflows={workflows} etapas={etapas} processos={processos} />
      </div>
      <Footer/>
    </div>
  )
}
