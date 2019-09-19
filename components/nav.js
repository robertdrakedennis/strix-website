import React from 'react'
import Link from 'next/link'

const links = [
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="container mx-auto p-4 mt-10 flex items-center justify-between mb-6">
    <ul>
      <li className="mr-auto flex items-center">
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
    </ul>

    <ul className="flex items-center">
      {links.map(({ key, href, label }) => (
          <li key={key}>
            <a className="hidden md:inline-flex items-center text-primary-100 ml-5" href={href}>{label}</a>
          </li>
      ))}
    </ul>
  </nav>
)

export default Nav
