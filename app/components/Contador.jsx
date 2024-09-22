const Contador = ({ title, number }) => {
  return (
    <div className='flex flex-col rounded-lg bg-indigo-200 w-36 h-36 items-center justify-between ring-2 ring-purple-400'>
      <p className='text-5xl font-bold mt-7 text-purple-950'>
        {number}
      </p>
      <h3 className='text-xl text-white font-semibold bg-slate-900 w-full py-1.5 rounded-b-lg text-center'>
        {title}
      </h3>
    </div>
  )
}

export default Contador