import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"
import Cards from "./Cards"
import { Infos } from "./Infos"

export const Home = () => {
  return (
    <>
        <main className='relative'>
          <section className='fixed w-full'>
            <Header />
          </section>
          <section className='xl:p-0 sm:pr-0 sm:pb-24 pb-12 wide:p-20'>
            <Hero />
          </section>
          <section className='sm:px-16 px-8 sm:py-24 py-12 bg-blue-100'>
            <Infos />
          </section>
          <section className='sm:px-16 px-8 sm:py-24 py-12'>
            modeles
          </section>
          <section className='sm:px-16 px-8 sm:py-24 py-12'>
            temoinages
          </section>
          <section className=''>
            <Footer />
          </section>
        </main>
    </>
  )
}
