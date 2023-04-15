import React from 'react'
import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>
      <header className=' bg-green-300 h-1/6 flex p-10 justify-between'>
        <p>Logo</p>
        <nav>
          <ul className=' list-none uppercase flex space-x-4'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={''}>Contato</Link></li>
            <li><Link href={''}>Links</Link></li>
            <li><Link href={''}>Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className=' bg-gradient-to-br from-orange-400 to-yellow-400 px-6 py-8 mt-10 flex gap-12 flex-wrap'>
        <Link href='/blog' legacyBehavior><a target='_blank'>EXERCÍCIO SSG - BLOG</a></Link>
        <Link href='/album'>EXERCÍCIO CSR - ALBUM</Link>
        <Link href='/todo'>EXERCÍCIO SSR - LISTA DE TAREFAS</Link>
        <Link href='/harryPotter'>EXERCÍCIO API Harry Potter</Link>
        <Link href='/harryPotterStaff'>EXERCÍCIO CSS Modules</Link>
        <Link className='btn-primary' href='/pokedex'>EXERCÍCIO POKEMON API</Link>
      </footer>
    </div>
  )
}

export default Layout