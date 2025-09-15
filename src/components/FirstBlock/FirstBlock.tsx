"use client"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import Link from "next/link"
import { MotionTransition } from "../MotionTransitio"
import Image from "next/image"
import { Reveal } from "../Reveal/Reveal"

export default function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
            El entorno de 
            <span className="block degradedBlue">
              NexusCorp
            </span>
            crea tu futuro
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
            Nexus Corp es más que una empresa: es un puente entre innovación y negocio. Desde software hasta seguridad, desde comercio hasta finanzas, te acompañamos en cada paso. Porque tu visión merece crecer sin límites.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link href="#clients" className="px-4 py-3 rounded-md bg-degradedBlue">
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image src="/assets/image3.svg" alt="Hero Image" width={450} height={450} className="h-auto w-72 md:w-full"/>
        </MotionTransition>
      </div>
    </div>
  )
}

