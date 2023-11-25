import React from "react";
import bod from "../source/bod.jpeg";
import { useEffect } from "react";
import { useState } from "react";

const Index = () => {
     const [time, setTime] = useState(0);

     useEffect(() => {
          const countDownDate = new Date("December 17, 2023 17:00:00").getTime();
          //const countDownDate = new Date("November 25, 2023 15:00:00").getTime();
          const x = setInterval(function () {
               const now = new Date().getTime();
               const distance = countDownDate - now;

               const days = Math.floor(distance / (1000 * 60 * 60 * 24));
               const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
               );
               const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
               );
               const seconds = Math.floor((distance % (1000 * 60)) / 1000);

               setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

               if (distance < 0) {
                    clearInterval(x);
                    setTime("NOS CASAMOS!!!");
               }
          }, 1000);
     }, []);


     return (
          <div className="w-full h-screen relative flex justify-center  bg-cover bg-center p-10"
               style={{ backgroundImage: `url(${bod})` }}
          >
               <div className="absolute inset-0 bg-black opacity-50 sm:opacity-60"></div>
               <div className="flex flex-col z-10 text-center">
                    <div className="flex justify-center items-center  flex-col h-[5vh]" >
                         <h2 className="text-white z-10 font-bold italic ml-5 sm:text-4xl text-3xl"
                              style={{ fontFamily: 'Caveat' }}>
                              Nuesta boda
                         </h2>
                    </div>

                    <div className="flex flex-col items-center justify-center z-10 text-center h-[95vh]">
                        
                         <h1 className="text-white z-10 sm:text-9xl text-6xl mb-9"
                              style={{ fontFamily: 'Pacifico, cursive' }}>
                              Paola y Saul
                         </h1>
                         <p className="text-white z-10 text-1xl  italic mt-[5vh] mt-9">
                              17 de Diciembre del 2023
                         </p>

                         <div className="flex justify-center items-center mt-10 flex-col">
                              <span className="text-white z-10 text-1xl  italic">
                                   Tiempo restante:
                              </span>
                              <h2 className="text-white z-10 font-bold italic ml-5 sm:text-6xl text-5xl">
                                   {time}
                              </h2>

                         </div>


                         <div>
                              <a
                                   href="#ubicacion"
                                   className="inline-block bg-white text-black px-10 py-3 rounded-lg uppercase tracking-wider font-bold mt-10"
                              >
                                   Ver ubicación
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Index;