'use client'
import Link from "next/link";
import Contador from "./components/Contador";
import useCountDown from "./hooks/useCountdown";
import TypedText from "./components/TypedText";

const names = ['minha fuinha', 'meu limaozinho 🍋', 'minha chata', 'minha vida', 'Aurora 🥱', 'a acompanhante 🤭'];
const CountDown = ({ names, day, hour, minute, second }) => {
  if (day+hour+minute+second >= 0) {
    return(
    <>
      <div className="text-2xl lg:text-6xl font-bold text-center text-purple-700">
        <h1 className="flex gap-2 lg:gap-4">
          Vou ver <TypedText strings={names} /> em:
        </h1>
      </div>

      <div className='flex justify-center gap-10 w-30 flex-wrap'>
        <Contador title="Dias" number={day} />

        <Contador title="Horas" number={hour} />

        <Contador title="Minutos" number={minute} />

        <Contador title="Segundos" number={second} />

      </div>
    </>)
  } else {
    return(
      <>
        XESDEDE
      </>
    )
  }


}

export default function Home() {
  const [day, hour, minute, second] = useCountDown('11/25/2024 06:00:00')
  const time = day+hour+minute+second
  console.log(time)
  return (
    <div className='flex flex-col gap-16 justify-center items-center h-screen'>
      <CountDown
        names={names}
        day={day}
        hour={hour}
        minute={minute}
        second={second}
      />

      <Link
        className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-3xl'
        // href='https://www.youtube.com/watch?v=zwL3KHTtdJk'
        href="/Final"
        target='_blank'
      >
        Em manutenção!
      </Link>
    </div>
  );
}
