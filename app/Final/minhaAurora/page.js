'use client'

import filme from "@/app/public/Iza.mp4"
import Header from "../../components/Header";

export default function MinhaAuroraPage() {
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