export default function MobileMenu({ show, onClick }) {
  return (
    <div className={`${show ? 'flex' : 'hidden'}
    fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[contentShow_150ms_cubic-bezier(0.16,_1,_0.3,_1)] 
    p-5 bg-black w-screen h-screen bg-opacity-65 justify-center
    `}>
      <div className="w-[90%] border bg-black bg-opacity-80 rounded-lg shadow border-red-950 flex flex-col">
        <div className="w-full flex items-start justify-between p-4">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
              Menu
            </h5>
            <hr className="bg-red-500" />
          </div>

          <button className="text-2xl font-bold text-red-600 hover:text-zinc-800" onClick={onClick}>
            X
          </button>
        </div>

        <ul className="flex flex-col md:gap-4 p-4 text-lg">
          <li className="cabecario__item"><a href="" className="hover:text-red-600">• Início</a></li>
          <li className="cabecario__item"><a href="" className="hover:text-red-600">• Filmes</a></li>
          <li className="cabecario__item"><a href="" className="hover:text-red-600">• Minha Lista</a></li>
          <li className="cabecario__item mobile__sumir"><a href="" className="hover:text-red-600">• Séries</a></li>
        </ul>
      </div>
    </div>
  )
}