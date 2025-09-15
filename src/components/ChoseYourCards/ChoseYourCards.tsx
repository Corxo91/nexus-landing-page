"use client"
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { Reveal } from "../Reveal"
import { MotionTransition } from "../MotionTransitio"
import { EffectCards } from "swiper/modules"
import { dataCards } from "./ChoseYourCards.data"


export function ChoseYourCards() {
  return (
    <div className="relative px-6 p-20 md:py-64" id="extensions">
      <BackgroundRadialRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">Elige la división que más
            <span className="block degradedBlue">se adapta a tu negocio</span>
          </h2>
        </Reveal>
        <div className="px-5 pt-5 md:pt-0">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {dataCards.map(({image,id}) => (
                <SwiperSlide key={id}>
                  <Image src={image} alt="Divition" width={400} height={300}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}
