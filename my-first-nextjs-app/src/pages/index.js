import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {


  return (
    <>
      <Head>
        <title>My First NextJS App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center p-6'>
        <h1 className="text-3xl font-light underline mb-6 p-6 bg-gray-500 mr-auto rounded-xl">Hello World</h1>
        {/* Usando variável de ambiente na frase abaixo */}
        Eu sou o {process.env.NEXT_PUBLIC_NOME}
        <ul className='flex flex-col gap-4'>
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
      <footer className=' mt-10 flex flex-col gap-5'>
        <Link href='/blog' legacyBehavior><a target='_blank'>EXERCÍCIO SSG - BLOG</a></Link>
        <Link href='/album'>EXERCÍCIO CSR - ALBUM</Link>
        <Link href='/todo'>EXERCÍCIO SSR - LISTA DE TAREFAS</Link>
      </footer>
      </main>
    </>
  )
}
