'use client'
import Link from "next/link";
import Contador from "./components/Contador";
import useCountDown from "./hooks/useCountdown";
import TypedText from "./components/TypedText";
import useTimeTogether from "./hooks/UseTimeTogether";

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
    const [year, month, day, hour, minute, second] = useCountDown('02/12/2025 08:00:00') // dia 12 é o certo
    return (
      <section className="flex flex-col gap-5">
       <div className="flex flex-col gap-3">
          <h1 className='text-5xl lg:text-5xl font-bold text-center text-purple-600'>
            Fuinha
          </h1>
          <h1 className='text-xl lg:text-3xl font-bold text-center'>
            ❤️Meu hiperfoco há:
          </h1>
       </div>
        <div className='flex justify-center gap-10 w-30 flex-wrap'>
          <Contador title="Dias" number={day} />

          <Contador title="Horas" number={-hour} />

          <Contador title="Minutos" number={-minute} />

          <Contador title="Segundos" number={-second} />
        </div>

        <div className='flex justify-center gap-10 w-30 flex-wrap'>
          <Contador title="Anos" number={-year} />

          <Contador title="Meses" number={-month} />

          <Contador title="Dias" number={-day} />

          <Contador title="Horas" number={-hour} />
        </div>

      </section>
    )
  } else {
    return(
      <h1 className='text-3xl lg:text-6xl font-bold text-center text-stroke'>
        Carregando a saudade...
      </h1>
    )
  }


}

export default function Home() {
  // const [year, month, day, hour, minute, second] = useCountDown('01/23/2025 08:00:00')
  const { years, months, days, hours, minutes } =useTimeTogether('2025-02-12T08:30:00');

  return (
    <div className='flex flex-col gap-16 justify-center items-center h-screen'>
      {/* <CountDown
        names={names}
        day={day}
        hour={hour}
        minute={minute}
        second={second}
      /> */}

      <section className="flex flex-col gap-5 bg-[#292829] py-10 rounded-xl w-[75%] h-[50%]">
        <div className="flex flex-col gap-3">
          <h1 className='text-5xl lg:text-5xl font-bold text-center text-purple-700'>
            Minha Fuinha
          </h1>
          <h1 className='text-xl lg:text-2xl text-center text-gray-200'>
            Me fazendo o cara mais feliz do mundo há:
          </h1>
        </div>
        <div className='flex justify-center gap-10 w-30 flex-wrap'>
          <Contador title="Anos" number={years} />

          <Contador title="Meses" number={months} />

          <Contador title="Dias" number={days} />

          <Contador title="Horas" number={hours} />
        </div>  
      </section>
      <Link
        className='bg-zinc-950 hover:bg-black border-red-700 border text-red-700 font-bold text-xl tracking-wide px-6 py-3 rounded-xl'
        href="/Final"
      >
        Netflix
      </Link>

    </div>
  );
}
