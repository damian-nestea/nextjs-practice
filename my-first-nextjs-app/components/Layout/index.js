import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <header className=' bg-green-300 max-h-24 flex px-10 items-center justify-between'>
        <div className=' w-28'>
          <img className=' w-11/12 duration-500 hover:w-full' src='/logo.png' />
        </div>
        <nav>
        <Navbar />
        </nav>
      </header>
      
      <main className=' min-h-3/5'>
        {children}
      </main>
      <footer className=' bg-gradient-to-br from-orange-400 to-yellow-400 px-6 py-8 mt-10 flex items-center justify-center'>
        {/* <Link href='/blog' legacyBehavior><a target='_blank'>EXERCÍCIO SSG - BLOG</a></Link>
        <Link href='/album'>EXERCÍCIO CSR - ALBUM</Link>
        <Link href='/todo'>EXERCÍCIO SSR - LISTA DE TAREFAS</Link>
        <Link href='/harryPotter'>EXERCÍCIO API Harry Potter</Link>
        <Link href='/harryPotterStaff'>EXERCÍCIO CSS Modules</Link>
        <Link className='btn-primary' href='/pokedex'>EXERCÍCIO POKEMON API</Link> */}
        <p>Todos os direitos reservados. DamianDev</p>
      </footer>
    </div>
  )
}

export default Layout