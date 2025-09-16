import Link from "next/link"
import { Reveal } from "../Reveal"

export function CpaDark() {
  return (
    <div className="px-6 my-20 md:mt-36">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="grid items-center md:grid-cols-2 ">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold">Explora el ecosistema Nexus</h3>
            </Reveal>
            <Reveal>
              <p>Le brindamos las herramientas para desarrollar, vender y expandir sin límites su negocio.</p>
            </Reveal>
          </div>
          <div className="mx-auto">
              <Reveal>
                <div className="my-8">
                  <Link href="#" className="px-4 py-3 rounded-md bg-degradedBlue">Empieza hoy</Link>
                </div>
              </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
