'use client'
import Link from "next/link";
import Contador from "./components/Contador";
import useCountDown from "./hooks/useCountdown";
import TypedText from "./components/TypedText";

const nomes = ['minha fuinha', 'meu limaozinho 🍋', 'minha chata', 'minha vida', 'Aurora 🥱', 'a acompanhante 🤭'];

export default function Home() {
  const [day, hour, minute, second] = useCountDown('10/04/2024 00:00:00')
  
  return (
    <div className='flex flex-col gap-16 justify-center items-center h-screen'>
      <div className="text-4xl lg:text-6xl font-bold text-center text-purple-700">
        <h1 className="flex gap-4">
          Vou ver <TypedText strings={nomes} /> em:
        </h1>
      </div>

      <div className='flex justify-center gap-10 w-30 flex-wrap'>
        <Contador title="Dias" number={day} />

        <Contador title="Horas" number={hour} />

        <Contador title="Minutos" number={minute} />

        <Contador title="Segundos" number={second} />

      </div>

      <Link 
        className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-3xl' 
        href='https://www.youtube.com/watch?v=zwL3KHTtdJk'
        target='_blank'
      >
        Em manutenção!
      </Link>
    </div>
  );
}
