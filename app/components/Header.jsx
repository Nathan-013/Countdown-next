'use client'

import logo from "../public/logo-title.png"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"



export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  function handleClick() {
    setShowMenu(!showMenu)
  }

  return (
    <header className="cabecario">

      <ul className="hidden md:flex md:gap-4 p-4 text-lg">
        <Link href='/Final' className='mr-5'>
          <Image alt='logo' src={logo} width={100} />
        </Link>
        <li className="cabecario__item"><a href="#" className="cabecario__link">Início</a></li>
        <li className="cabecario__item"><a href="#filme" className="cabecario__link">Filmes</a></li>
        <li className="cabecario__item"><a href="#Assnov" className="cabecario__link">Minha Lista</a></li>
        <li className="cabecario__item mobile__sumir"><a href="#minlis" className="cabecario__link">Séries</a></li>
      </ul>

      <MobileMenu show={showMenu} onClick={handleClick}/>

      <div className="flex md:hidden p-3 sm:p-5 justify-between w-full">
        <Link href='/Final' className='mr-5'>
          <Image src={logo} width={100} className="" alt="logoNetflix" />
        </Link>
        <button
          onClick={handleClick}
          className=" flex items-center justify-center text-gray-400 hover:text-white"
          id="menu-button"
        >
          <svg className="w-8 h-8" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}