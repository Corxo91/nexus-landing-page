"use client"

import Link from "next/link"
import Image from "next/image"
import { RiMenu3Line } from "react-icons/ri"
import { dataHeader } from "./Header.data"
import { useState } from "react"
import {MotionTransition} from "../MotionTransitio/"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <MotionTransition>
          <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 md:py-8 mx-auto">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo.svg" width={130} height={40} alt="Nexus Corporation Logo" />
            </Link>
            <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
              <div className={`${openMobileMenu ? "block" : "hidden"} w-full md:w-auto md:block`}>
                <div className="flex flex-col mt-4 p-4 md:flex-row md:p-0 md:space-x-8 md:mt-0 md:border=0">
                  {dataHeader.map(({id, name, idLink}) => (
                    <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                      <Link href={idLink} className="text-lg hover:text-secondary">{name}</Link>
                    </div>
                  ))}
                </div>
              </div>
          </nav>
        </MotionTransition>
    )
}
