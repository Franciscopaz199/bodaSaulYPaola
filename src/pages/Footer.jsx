import React from "react";

const Footer = () => {
     return (
          <>
          <div className="w-full  relative flex  bg-cover bg-center p-12 flex-col items-center" >
               <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center"
               style={{fontFamily: 'Caveat'}}>
                    #Comparte fotos de nuestra boda en tus redes sociales
               </h2>
               <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-9 text-center">
                    Utiliza el hashtag <b>#Saul&Pao</b>
               </p>

          </div>
          <div>
               <p className="text-center text-gray-500 dark:text-gray-400 mt-9 text-center pb-5">
                    Por Saul Sanabria y Paola Paz
               </p>
          </div>
          </>
     )
}

export default Footer;