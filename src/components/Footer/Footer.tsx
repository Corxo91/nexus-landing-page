"use client"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { footerData, footerSocialNetworks } from "./Footer.data"
import Link from "next/link"
import { useState } from "react"
import { Modals } from "../Modals/Modals"

export function Footer() {
    const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

    const handleModalClick = (e: React.MouseEvent, name: string) => {
      if (name === "Términos y Condiciones") {
        e.preventDefault();
        setModalType("terms");
      }
      if (name === "Políticas de Privacidad") {
        e.preventDefault();
        setModalType("privacy");
      }
    };

    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 md:mt-40">
          <div className="md:flex justify-between">
            <div>
              <Image src='/brand/nexus-logo.svg' alt='NexusCorp Logo' width={200} height={40} />
              <Reveal>
                <p className="mt-5 text-primaryDark max-w-[220px]">Conecte tecnología, seguridad y negocios en un solo ecosistema.</p>
              </Reveal>
            </div>
            {footerData.map(({id,title,links}) => (
              <div key={id} className="max-w-[150px]">
                <h4 className="mt-8 text-lg md:mt-0">
                  <Reveal>
                    {title}
                  </Reveal>
                </h4>
                {links.map(({id,name,link}) => (
                  <Link
                    key={id}
                    href={link}
                    className="block mt-4 text-primaryDark hover:text-white"
                    onClick={e => handleModalClick(e, name)}
                  >
                    <Reveal>
                      {name}
                    </Reveal>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="border-t border-[#3F3E45] border-[1px] my-7" />
          
          <div className="items-center justify-between md:flex">
            <div className="flex gap-5">
              {footerSocialNetworks.map(({id,icon,link}) => (
                <Link key={id} href={link} className="text-2xl">
                  <Reveal>
                    {icon}
                  </Reveal>
                </Link>
              ))}
            </div>
            <div className="my-3 text-[12px] text-primaryDark">
              <Reveal>
                © 2025 Nexus Corp — Todos los derechos reservados.
              </Reveal>
            </div>
          </div>
          <div className="my-3 text-[12px] text-primaryDark">
            <Reveal>
              Al utilizar este sitio, usted acepta nuestros <span className="underline cursor-pointer text-primary" onClick={e => {e.preventDefault();setModalType("terms")}}>Términos y Condiciones</span> y <span className="underline cursor-pointer text-primary" onClick={e => {e.preventDefault();setModalType("privacy")}}>Política de Privacidad</span>. Nexus Corp y sus divisiones proporcionan sus servicios, sujetos a disponibilidad y condiciones de uso. El uso no autorizado de logotipos, marcas o contenido de este sitio está prohibido y puede ser sancionado por la ley.
            </Reveal>
      <Modals
        open={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType}
      />
          </div>

        </div>
    )
}
