import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>
      <Head>    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
        <title>Portfólio do Damián </title>
        <meta name="title" content="Portfólio do Damián" />
        <meta name="description" content="Este é o portfólio do Jair Damián." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:title" content="Portfólio do Damián" />
        <meta property="og:description" content="Este é o portfólio do Jair Damián." />
        <meta property="og:image" content="http://localhost:3000/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/" />
        <meta property="twitter:title" content="Portfólio do Damián" />
        <meta property="twitter:description" content="Este é o portfólio do Jair Damián." />
        <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
      <div className=' h-3/4'>
        <main className='flex flex-col justify-center items-center p-6'>
          <h1 className=" w-40 flex items-center text-center text-3xl font-light underline mb-6 p-6 bg-gray-500 rounded-xl">Hello World</h1>
          {/* Usando variável de ambiente na frase abaixo */}
          Eu sou o {process.env.NEXT_PUBLIC_NOME}
          <ul className='flex flex-col space-y-4 mt-4'>
            <li><Link href="/damian">Página de Damián</Link></li>
            <li><Link href="/brenda">Página de Brenda</Link></li>
            <li><Link href="/valentina">Página de Valentina</Link></li>
            <li><Link href="/isis">Página de Isis</Link></li>
            <li><Link href="/lana">Página de Lana</Link></li>
            <li><Link href="/tyson">Página de Tyson</Link></li>
          </ul>
          {/* <Script strategy='afterInteractive'>
            {`window.alert('Carreguei')`}
          </Script> */}
        </main>
      </div>
    </>
  )
}
