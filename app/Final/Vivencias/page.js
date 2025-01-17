'use client'

import filme from "../../public/filme2.mp4"
import Header from "../../components/Header";

export default function VivenciasPage() {
  return (
    <div>
      <Header/>
      
      <div >
        <section className="filme flex flex-col gap-8" >
          <a href="https://www.youtube.com/shorts/-7RSkOijdRI?feature=share" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            LINK
          </a>
          {/* <video 
            src={filme} 
            controls="controls" 
            className="w-[90%] lg:w-[70%] border border-red-950 rounded-lg"
          /> */}
        </section>
      </div>
    </div>
  );
}