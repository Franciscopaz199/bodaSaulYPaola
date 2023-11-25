import React from "react";

const ItemAgenda = ({ number, title, description }) => {
     return (
          <div class="flex">
               <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="currentColor">{number}</text>
               </svg>
               <div class="ms-5 sm:ms-8">
                    <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                         {title}
                    </h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                         {description}
                    </p>
               </div>
          </div>
     );
}

export default ItemAgenda;