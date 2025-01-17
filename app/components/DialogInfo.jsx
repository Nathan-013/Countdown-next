export default function DialogInfo({ show, onClick }) {
  return (
    <div className={`${show ? 'flex' : 'hidden'}
    fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[contentShow_150ms_cubic-bezier(0.16,_1,_0.3,_1)] 
    p-5 bg-black w-screen h-screen bg-opacity-45 justify-center items-center
    `}>
      <div className=" w-[450px] h-[200px] pt-3 px-4 border bg-black bg-opacity-80 rounded-lg shadow border-red-950">
        <div className="flex justify-between">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
              Veio ver se funcionava né! 👀
            </h5>
            <hr className="bg-red-500"/>
          </div>

          <button className="text-2xl font-bold text-red-600" onClick={onClick}>
            X
          </button>
        </div>

        <div className="flex flex-col gap-4 font-normal py-4 text-gray-700 dark:text-gray-400 text-lg">
          <p className="">
            Tá achando que aqui é qualquer coisa? hihi Funciona tudo, ou quase 😅.
          </p>
          <p className="">
            Para de ficar rodando e vamos ver logo o filme!
          </p>
        </div>
      </div>
    </div>
  )
}