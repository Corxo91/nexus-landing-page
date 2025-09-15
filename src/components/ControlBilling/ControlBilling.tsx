"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransitio"
import { Reveal } from "../Reveal"

export function ControlBilling() {
  return (
    <div className="p-4 py-20 md:py-64">
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image src="/assets/block.svg" alt="Control Billing" width={580} height={411} className="w-full h-auto"/>
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold">
              Cotrola digitalmente <br /> 
              tus servicios
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Centraliza el control de tus servicios, desde software hasta finanzas, en una sola plataforma. Más orden, menos fricción y decisiones más inteligentes para tu empresa.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
