import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"
import { Infos } from "./Infos"
import { Temoinages } from "./Temoinages"
import { Modeles } from "./Modeles"
import Test from "../../assets/backup/Test"

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
