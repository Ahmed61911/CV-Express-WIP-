import Header from "../components/Header"
import Hero from "./sections/Hero"
import Footer from "../components/Footer"
import { Infos } from "./sections/Infos"
import { Temoinages } from "./sections/Temoinages"
import { Modeles } from "./sections/Modeles"

export const Home = () => {
  return (
    <>
        <main className='relative'>
          <section className='w-full'>
            <Header />
          </section>
          <section className='xl:p-0 sm:pr-0 sm:pb-24 pb-12 wide:p-20'>
            <Hero />
          </section>
          <section className='sm:px-16 px-8 sm:py-24 py-12 bg-blue-100'>
            <Infos />
          </section>
          <section className=''>
            <Modeles />
          </section>
          <section className=''>
            <Temoinages />
          </section>
          <section className=''>
            <Footer />
          </section>
        </main>
    </>
  )
}
