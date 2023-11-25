import React from "react";

const Ubicacion = () => {
     return (
          <div id="ubicacion" className="w-full relative flex  flex-col items-center" >
               <div className="w-full p-10 relative flex  bg-cover bg-center p-10" >
                    <div className="flex flex-col items-center  w-full h-full p-10 bg-white bg-opacity-75 rounded-xl dark:bg-gray-800">
                         <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
                              style={{ fontFamily: 'Caveat' }}>Ubicación</h1>
                         <p class="mt-1 text-gray-600 dark:text-gray-400">
                              No podemos esperar a verte en nuestra boda, es por eso que  te dejamos la ubicación para que llegues sin problemas.
                         </p>
                         <div class="relative w-full h-0 mt-10 mb-8 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1335.217167980875!2d-87.24603693176364!3d13.288446745383473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7017046ffcd003%3A0x7ccb1d6d3287e65b!2sJard%C3%ADn%20de%20Eventos%20%22Los%20Prados%22!5e0!3m2!1ses-419!2shn!4v1700951119918!5m2!1ses-419!2shn" 
                              className="absolute inset-0 w-full h-full border-0"
                              style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>
                    </div>

               </div>
          </div>
     );
}

export default Ubicacion;