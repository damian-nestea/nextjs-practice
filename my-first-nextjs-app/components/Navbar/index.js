import React from 'react'
import { navigationLinks } from '../../utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();

  const verifyPath = (linkPath) => {
    if(linkPath ==='/' && router.pathname !=='/') return false;
    if(router.pathname.indexOf(linkPath) === 0) return true;
    return false
  }

  return (
    <ul className={`flex gap-8 list-none uppercase font-bold`}>
      {navigationLinks.map((link,index) => (
        <li className={( verifyPath(link.path) ? 'text-red-600' : ' text-blue-800')} key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navbar