import React from 'react'
import { navigationLinks } from '../../utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();

  return (
    <ul className={`flex gap-8 list-none uppercase font-bold`}>
      {navigationLinks.map((link,index) => (
        <li className={(link.path === router.pathname ? 'text-red-600' : ' text-blue-800')} key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar