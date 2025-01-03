import Link from "next/link";
import QuizPage from "./Quiz";

const questions = [
  'dasdaasdsa'
]

export default function FinalPage() {
  return (
    <div className='flex flex-col'>
      {/* <QuizPage title='ss' questions={questions}/> */}
      <Link
        className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-3xl'
        href="/"
      >
        Voltar para pagina inicial.
      </Link>
    </div>
  );
}