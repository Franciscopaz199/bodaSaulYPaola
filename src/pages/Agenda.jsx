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
                                        description="Saul Ernesto Sanabria Cruz acompañado de sus padres: <br>Silvia Cruz y Donaldo Sanabria"
                                   />
                                   <ItemAgenda
                                        number="4"
                                        title="Entrada de las damas "
                                        description="Cindy Alvares y Lourdes Merlo<br/>
                                             Suany Avilez y Jassiel Rodriguez<br/>
                                             Clara Vargas e Isela Lainez<br/>
                                             Vielka Cruz y Yaneli Flores<br/>
                                        "
                                   />
                                   <ItemAgenda
                                        number="5"
                                        title="Entrada de la dama de honor"
                                        description="Karla Elizabeth Paz Flores <br>(Hermana de la novia)"
                                   />
                                   <ItemAgenda
                                        number="6"
                                        title="Niños de los cojines"
                                        description="David Paz y Mateo Paz"
                                   />
                                   <ItemAgenda
                                        number="7"
                                        title="Anuncio ahí viene la novia"
                                        description="Alexander Muñoz Cruz"
                                   />


                                   <ItemAgenda
                                        number="8"
                                        title="Entrada de la novia"
                                        description="Keila Paola Paz Flores acompañada de sus padres: <br>Matilde Flores y Pablo Paz"
                                   />


                              </div>


                              <div class="space-y-6 lg:space-y-10">

                                   <ItemAgenda
                                        number="9"
                                        title="Participación especial por damas de honor"
                                        description="__"
                                   />


                                   <ItemAgenda
                                        number="10"
                                        title="Alabanzas"
                                        description=" Por Noel Rodriguez"
                                   />
                                   <ItemAgenda
                                        number="11"
                                        title="Reflexión y bendición"
                                        description="Ministro Jose Santos Paz Carbajal"
                                   />


                                   <ItemAgenda
                                        number="12"
                                        title="Salida de los ahora esposos"
                                        description="Paola Paz y Saul Sanabria"
                                   />

                                   <ItemAgenda
                                        number="13"
                                        title="Espacio para fotos"
                                        description="__"
                                   />

                                   <ItemAgenda
                                        number="14"
                                        title="Comida"
                                        description="__"
                                   />
                                   <ItemAgenda
                                        number="15"
                                        title="Dinámicas"
                                        description="Jassiel Rodriguez"
                                   />

                                   <ItemAgenda
                                        number="16"
                                        title="Espacio para Palabras"
                                        description="__"
                                   />
                                   <ItemAgenda
                                        number="17"
                                        title="Corte de pastel"
                                        description="__"
                                   />





                              </div>
                         </div>

                    </div>
               </div>


          </div>
     );
}

export default Agenda;