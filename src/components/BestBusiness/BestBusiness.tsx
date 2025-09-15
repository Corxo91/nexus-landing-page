"use client"

import { BackgroundRadialLeft } from "../BackgrounRadialLef"
import { Reveal } from "../Reveal" 
import Link from "next/link"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"


export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
          <BackgroundRadialLeft/>
          <div className="grid max-w-5xl mx-auto md:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-5xl font-semibold">
                  <span className="block degradedBlue">Tu creas la visión</span>
                  nosotros<br />
                  la hacemos realidad.
                </h2>
              </Reveal>
              <Reveal>
                <p className="max-w-md mt-10">
                  Desde software hasta ciberseguridad, desde comercio hasta conectividad, Nexus Corp convierte ideas en soluciones reales. Nuestro ecosistema te acompaña en cada paso, para que tu negocio evolucione y conquiste el futuro.
                </p>
              </Reveal>
              <Reveal>
                <div className="my-8">
                  <Link href="#clients" className="px-4 py-3 rounded-md bg-degradedBlue">Elija su servicio</Link>
                </div>
              </Reveal>
            </div>
            <div className="grid items-center py-5 md:p-8">
              {dataFeaturesBusiness.map(({id,icon,title,description})=>(
                <Reveal key={id}>
                  <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                    <Image src={`/assets/${icon}.svg`} alt={title} width={50} height={50} />
                    <div>
                      <h4 className="text-primary">{title}</h4>
                      <p className="text-primaryDark">{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
    )
}
