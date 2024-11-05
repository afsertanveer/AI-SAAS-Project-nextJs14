'use client'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo-text"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <Link
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-sky-400 text-black hover:bg-sky-400'
                        : 'text-gray-700'
                    } sidebar-link `}
                    href={link.route}
                  >
                    <li key={link.route} className="flex justify-start ">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'} mr-3`}
                      />
                      {link.label}
                    </li>
                  </Link>
                )
              })}
            </ul>
            <ul className="siderbar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <Link
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-sky-400 text-black hover:bg-sky-400'
                        : 'text-gray-700'
                    } sidebar-link `}
                    href={link.route}
                  >
                    <li key={link.route} className="flex justify-start ">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'} mr-3`}
                      />
                      {link.label}
                    </li>
                  </Link>
                )
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
