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
  } else if (day + hour + minute + second < 0) {
    return (
      <section className="flex flex-col gap-5">
       <div>
          <h1 className='text-3xl lg:text-5xl font-bold text-center text-purple-600'>
            Enfim Zerou!
          </h1>
          <h1 className='text-xl lg:text-3xl font-bold text-center text-purple-300'>
            Espero não ter que usar isso tão cedo.
          </h1>
       </div>
        <div className='flex justify-center gap-10 w-30 flex-wrap'>
          <Contador title="Dias" number={0} />

          <Contador title="Horas" number={0} />

          <Contador title="Minutos" number={0} />

          <Contador title="Segundos" number={0} />
        </div>
      </section>
    )
  } else {
    return(
      <h1 className='text-3xl lg:text-6xl font-bold text-center text-purple-700'>
        Carregando a saudade...
      </h1>
    )
  }


}

export default function Home() {
  const [day, hour, minute, second] = useCountDown('01/23/2025 01:00:00')
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

      {/* <Link
        className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-3xl'
        href="/Final"
      >
        Clique Aqui! (quando zerar!)
      </Link> */}
      <Link
        className='bg-zinc-950 hover:bg-black border-red-700 border text-red-700 font-bold text-xl tracking-wide px-6 py-3 rounded-xl'
        href="/Final"
      >
        Netflix
      </Link>
    </div>
  );
}
