import Slider from './Slider'

export const Modeles = () => {
      return (
        <div className='flex p-24 dark:bg-gray-800 '>
          <Slider />
          <div class="relative overflow-hidden p-10">
            <div class="relative">
              <div class="max-w-[85rem] ">
                <div class="max-w-2xl text-center mx-auto">
                  <div class="mt-5 max-w-2xl">
                    <h1 class="block font-semibold text-gray-800 text-xl md:text-3xl lg:text-4xl dark:text-gray-200 mb-16">
                      MODELES MODERN ET SIMPA
                    </h1>
                  </div>
                  <div class="mt-5 max-w-3xl mb-24">
                    <p class="text-lg text-gray-600 dark:text-gray-400">Choisissez votre modèle préféré parmi une sélection variée et configurez votre CV en toute simplicité. En un seul clic, obtenez un document professionnel prêt à vous représenter efficacement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}