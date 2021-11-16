import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import Social from './Social'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ?
            `${title} | Casa Chakra`
            :
            `Casa Chakra`
          }
        </title>
      </Head>
      <Social />
      <Nav />
      <main className="flex flex-col items-center justify-center text-center w-screen px-16 mt-16 pb-32">
        {children}
      </main>
      <Footer />
    </>
  )
}
