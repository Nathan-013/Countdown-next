'use client'

import Image from "next/image"
import { useState } from "react"

import logoNetflix from "../public/logo.png"
import filme2 from "../public/filme2.png"
import filme1 from "../public/filme1.png"
import play from "../public/play.png"
import info from "../public/info.png"
import Header from "../components/Header"
import DialogInfo from "../components/DialogInfo"


export default function FinalPage() {
  const [showDialog, setShowDialog] = useState(false)

  function handleClick() {
    return setShowDialog(!showDialog)
  }

  return (
    <div className="NetflixPage">
      <Header/>

      <section id='filme' className="container__background px-6">
        <section  className="netflix-title shadow">
          <span className="flex gap-2 pb-3">
            <Image src={logoNetflix} width={50} height={50} alt="logoNetflix"/>
            <span className="flex items-center font-light tracking-widest font-sans text-2xl">
              FILME
            </span>
          </span>
          <span className="text-4xl lg:text-5xl font-semibold lg:mt-10">
            MINHA AURORA
          </span>
          
          <section className="title">
            <p className="container__texto">
              Conheça a princesa mais linda (e sonolenta) que já existiu. Tem um senso de humor duvidoso mas consegue deixar sua marca onde passa. 
            </p>

            <div className="container__botao">
              <a href="/Final/minhaAurora" className="botao__assistir">
                <Image src={play} width={50} height={50} alt="play" className="play" />
                <span>
                  Assistir
                </span>
              </a>

              <DialogInfo show={showDialog} onClick={handleClick}/>

              <button className="botao__assistir info" onClick={handleClick}>
                <Image src={info} width={50} height={50} alt="info"  className="play" />
                <p className="mais__info">Mais Informações</p>
              </button>

            </div>
          </section>
        </section>
        
      </section>

      {/* fim de uma parte */}
      <section id='Assnov' className="Assistir novamente">
        <p className="text-2xl font-semibold ml-5 my-5">Minha Lista</p>
        <ul className="container__lista">
          <li className="container__video">
            <a href="/Final/minhaAurora">
              <Image src={filme1} alt="Video" className="cropped"/>
            </a>
          </li>

          <li className="container__video">
            <a href="/Final/Vivencias">
              <Image src={filme2} alt="Video" className="cropped" />
            </a>
          </li>
        </ul>
      </section>

      <section id='minlis' className="Minha Lista">
        <p className="text-2xl font-semibold ml-5 my-5">Séries</p>
        <ul>
          <li className="flex items-center justify-center text-base mt-6 text-red-700 font-base mb-12">
            <span className="text-xl">
              Aguarde! Em Produção...
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}