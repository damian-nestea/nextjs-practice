import React from 'react'
import { navigationLinks } from '../../utils/data'
import Link from 'next/link'

const Navbar = () => {
  return (
    <ul className=' flex gap-8 list-none uppercase'>
      {navigationLinks.map((link,index) => (
        <li className=' hover:underline' key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar