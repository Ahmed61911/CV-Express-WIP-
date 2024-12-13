import {HomeBanner} from '../../../assets/images'

export const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen p-0">
      <div className='xl:w-[100%] flex flex-col bg-white dark:bg-gray-800 justify-center items-start p-28 max-lg:py-16 max-lg:px-8'>
        <h1 className='text-8xl max-sm:text-[62px] xl:mt-16 font-bold text-blue-900'><span>CV</span>&nbsp;<span className='text-[hsl(0,0%,20%)] dark:text-[hsl(0,0%,96%)]'>Express</span></h1>
        <h2 className='text-xl font-semibold my-8 text-blue-600'>Donnez un élan à votre carrière</h2>
        <p className=' max-sm:text-[12px] dark:text-[hsl(0,0%,90%)] text-slate-900 text-[17px] xl:mb-0'>
            CV Express est l'outil idéal pour créer des CV professionnels et percutants en toute simplicité. Que vous soyez un expert chevronné ou que vous débutiez votre parcours, notre plateforme vous permet de concevoir un CV qui attire l'attention et ouvre les portes vers vos opportunités de rêve. Personnalisez des modèles, mettez en avant vos compétences, et démarquez-vous.
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 flex justify-center items-end xl:min-h-screen w-[100%]'>
        <img src={HomeBanner} className=''/>
      </div>

    </section>
  )
}
export default Hero