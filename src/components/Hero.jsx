const Hero = () => {
 return (
   <>
     <div className="container mx-auto px-20 py-10 text-gray-600 bg-white">
       <p>YouQuote / Accueil</p>
     </div>

     <div className="container mx-auto px-20 py-10 bg-white">
       <h1 className="text-4xl font-bold text-gray-800">
         Découvrez des citations inspirantes
       </h1>
       <p className="text-gray-600 my-6">
         Explorez, partagez et sauvegardez vos citations préférées
       </p>

       <div className="mt-12 flex">
         <div className="relative flex-grow max-w-xl">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600 search-icon"
             >
               <path
                 fillRule="evenodd"
                 d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                 clipRule="evenodd"
               />
             </svg>
           </div>
           <input
             className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm rounded pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
             placeholder=""
           />
         </div>
         <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 rounded-r">
           Rechercher
         </button>
       </div>
     </div>
   </>
 );
};

export default Hero;
