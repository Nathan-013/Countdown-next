import Link from "next/link";
import Netflix from "./Netflix";

export default function FinalPage() {
  return (
    <div className='flex flex-col'>
      {/* <Link
        className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-4 rounded-3xl'
        href="/"
      >
        Voltar para pagina inicial.
      </Link> */}

      <div>
        <Netflix/>
      </div>
    </div>
  );
}