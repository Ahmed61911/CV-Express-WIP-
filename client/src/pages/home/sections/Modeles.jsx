import Slider from '../../components/Slider'

export const Modeles = () => {
      return (
        <div className='flex flex-col p-24 dark:bg-gray-800 bg-blue-300 lg:flex-row max-lg:p-4'>
          <div class="relative overflow-hidden p-10 justify-center ">
            <div class="relative">
              <div class="max-w-[85rem] ">
                <div class="max-w-2xl text-center mx-auto">
                  <div class="mt-5 max-w-2xl">
                    <h1 class="block font-semibold text-gray-800 text-xl md:text-3xl lg:text-4xl dark:text-gray-200 mb-16 max-lg:mb-6">
                      MODELES MODERN ET SIMPLES
                    </h1>
                  </div>
                  <div class="mt-5 max-w-3xl mb-24 max-lg:mb-6">
                    <p class="text-lg text-gray-600 dark:text-gray-400">Choisissez votre modèle préféré parmi une sélection variée et configurez votre CV en toute simplicité. En un seul clic, obtenez un document professionnel prêt à vous représenter efficacement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>
  )
}