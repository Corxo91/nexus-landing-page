"use client"
import { MotionTransition } from "../MotionTransitio";
import { dataCounter } from "./CounterData.data";
import CountUp from 'react-countup';


export function CounterData() {
  return (
    <MotionTransition className="max-w-5xl py-10 mx-auto md:py-64">
        <div className="justify-between md:flex">
          {dataCounter.map(({ id, startNumber, endNumber, description}) => (
            <div key={id} className="py-5 text-xl md:text-2xl text-center md:text-left">
              +
              <CountUp start={startNumber} end={endNumber} duration={1.5} enableScrollSpy/>
              {" "}
              <span className="degradedBlue">{description}</span>
            </div>
          ))}
        </div>
    </MotionTransition> 
  )
}
