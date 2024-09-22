'use client'
import Link from "next/link";
import Contador from "./components/Contador";
import useCountDown from "./hooks/useCountdown";

export default function Home() {
  const [day, hour, minute, second] = useCountDown('10/04/2024 07:00:00')
  
  return (
    <div className='flex flex-col gap-16 justify-center items-center h-screen'>
      <h1 className="text-6xl font-bold text-center text-purple-700">
        Vou ver minha fuinha em:
      </h1>

      <div className='flex justify-center gap-20'>
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
