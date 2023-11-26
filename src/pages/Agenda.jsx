import React from "react";
import ItemAgenda from "../components/ItemAgenda";

const Agenda = () => {
     return (
          <div className="w-full relative flex  flex-col items-center" >
               <div className="flex flex-col items-center  w-full h-full p-10 bg-white bg-opacity-75 rounded-xl dark:bg-gray-800">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
                         style={{ fontFamily: 'Caveat' }}>Agenda Boda Sanabria Paz</h1>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                         A continuación se detallan la agenda de nuestra boda, para que no te pierdas ningún detalle.
                    </p>
               </div>


               <div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div class="max-w-4xl mx-auto">

                         <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
                              <div class="space-y-6 lg:space-y-10">


                                   <ItemAgenda
                                        number="1"
                                        title="Apertura del evento"
                                        description="Por José Isaí Paz Rodaz"
                                   />

                                   <ItemAgenda
                                        number="2"
                                        title="Alabanzas"
                                        description="Por Noel Rodriguez"
                                   />


                                   <ItemAgenda
                                        number="3"
                                        title="Entrada del novio"
                                        description="Por Saul Sanabria acompañado de sus padres (Silvia Cruz y Donaldo Sanabria )"
                                   />
                                   <ItemAgenda
                                        number="4"
                                        title="Entrada de las damas"
                                        description="Las damas de honor entraran a la ceremonia"
                                   />


                                   <ItemAgenda
                                        number="5"
                                        title="Entrada de la novia"
                                        description="Por Paola Paz acompañada de sus padres (Pablo Paz y Matilde Flores)"
                                   />


                                   <ItemAgenda
                                        number="6"
                                        title="Participación de las damas"
                                        description=" Las damas de honor participaran en la ceremonia"
                                   />

                                   <ItemAgenda
                                        number="7"
                                        title="Predica"
                                        description=" José Santos Paz (Ministro de la iglesia de Dios del 7mo día)"
                                   />

                              </div>


                              <div class="space-y-6 lg:space-y-10">

                                   
                                   <ItemAgenda
                                        number="8"
                                        title="Salida de los novios"
                                        description="Por Paola Paz y Saul Sanabria"
                                   />

                                   <ItemAgenda
                                        number="9"
                                        title="Espacio para fotos"
                                        description="Se tomara un espacio para fotos con los recién esposos"
                                   />

                                   <ItemAgenda
                                        number="10"
                                        title="Comida"
                                        description="Se servirá la comida"
                                   />
                                   <ItemAgenda
                                        number="11"
                                        title="Dinámicas"
                                        description="Se realizaran dinámicas con los invitados, por parte de Jassiel Rodriguez"
                                   />
                                    <ItemAgenda
                                        number="12"
                                        title="Brindis"
                                        description="Se realizara el brindis"
                                   />
                                   <ItemAgenda
                                        number="13"
                                        title="Corte de pastel"
                                        description="Se realizara el corte de pastel"
                                   />
                                  
                                   <ItemAgenda
                                        number="14"
                                        title="Espacio para Palabras"
                                        description="Se dará un espacio para palabras de los invitados"
                                   />




                              </div>
                         </div>

                    </div>
               </div>


          </div>
     );
}

export default Agenda;