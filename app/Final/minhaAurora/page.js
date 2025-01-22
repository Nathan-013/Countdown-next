'use client'

import filme from "../../public/Iza.mp4"
import Header from "../../components/Header";

export default function MinhaAuroraPage() {
  return (
    <div>
      <Header/>
      
      <div >
        <section className="filme flex flex-col gap-8" >
          <h5 className="text-3xl font-black text-red-700 border p-3 border-yellow-500">
            ⚠️ Tô de olho, nem tenta! ⚠️
          </h5>
          <video 
            src={filme} 
            controls="controls" 
            className="w-[90%] lg:w-[70%] border border-red-950 rounded-lg"
          />
        </section>
      </div>
    </div>
  );
}