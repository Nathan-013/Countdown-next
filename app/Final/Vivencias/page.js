'use client'

import filme from "../../public/filme2.mp4"
import Header from "../../components/Header";

export default function VivenciasPage() {
  return (
    <div>
      <Header/>
      
      <div >
        <section className="filme flex flex-col gap-8" >
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