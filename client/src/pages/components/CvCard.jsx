import ButtonGroupCard from "./ButtonGroupCard"
const CvCard = ({Type}) => {
    if (Type == 'add'){
        return(
            <>
                <div class="">
                    <div class="w-60 h-72 relative cursor-pointer dark:bg-gray-800 bg-slate-50 flex flex-col items-center justify-center text-center rounded-2xl">
                        <div class="w-28 h-28">
                            <button title="Add New" class="group cursor-pointer outline-none hover:rotate-90 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-gray-700 dark:stroke-zinc-200 fill-none group-hover:fill-zinc-300 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
                                <path d="M8 12H16" stroke-width="1.5"></path>
                                <path d="M12 16V8" stroke-width="1.5"></path>
                            </svg>
                            </button>
                            <p className="text-xl text-gray-700 font-semibold dark:text-zinc-200">Ajouter un CV</p>
                        </div>
                        
                    </div>  
                </div>        
            </>
        )
    }
  else return (
    <>
        <div class="group dark:bg-gray-800 cursor-pointer before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-60 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 dark:border-slate-600 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
        <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <span class="text-2xl font-semibold dark:text-gray-200">George Johnson</span>
            <p className="dark:text-gray-200">Support Specialist</p>
        </div>
            <ButtonGroupCard />
        </div>            
    </>
  )
}

export default CvCard