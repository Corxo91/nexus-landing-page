"use client"
import { BackgroundRadialLeft } from "../BackgrounRadialLef"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonial() {
  return (
    <div className="relative p-8 md:py-64" id="testimonial">
      <BackgroundRadialLeft/>
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl mb-5 font-semibold">
            Lo que opinan quienes confían en nosotros
          </h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-primaryDark">
              Descubre cómo Nexus Corp impulsa negocios, protege datos y crea oportunidades globales.
            </p>
          </div>
        </Reveal>
      </div>
      <Slide/>
    </div>
  )
}
