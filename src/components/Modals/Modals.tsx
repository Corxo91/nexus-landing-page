import { useEffect } from "react";
import React from "react";
import { termsData, privacyData } from "./modalsData";

interface ModalsProps {
  open: boolean;
  onClose: () => void;
  type: "terms" | "privacy" | null;
}

export function Modals({ open, onClose, type }: ModalsProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open || !type) return null;
  const modalContent = type === "terms" ? termsData[0] : privacyData[0];
  // Divide el contenido en apartados por salto de línea doble y título por salto de línea simple
  const sections = modalContent.content.trim().split(/\n\n+/).map((section, idx) => {
    const [title, ...rest] = section.split(/\n/);
    return (
      <div key={idx} className="mb-6">
        <h3 className="font-semibold text-primary text-base mb-2">{title}</h3>
        <p className="text-white text-[15px] leading-relaxed whitespace-pre-line">{rest.join("\n")}</p>
      </div>
    );
  });
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm overflow-hidden sm:items-center">
      <div
        className="bg-black rounded-md w-full max-w-screen-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-2 sm:mx-auto p-2 sm:p-8 relative border border-primaryDark flex flex-col overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-2  text-white text-3xl md:text-5xl hover:text-primary transition"
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-lg md:text-2xl font-bold text-primary mb-6 text-center tracking-tight">
          {modalContent.title}
        </h2>
        <div className="overflow-y-auto px-1 w-full h-full" style={{ maxHeight: 'calc(100svh - 140px)' }}>
          {sections}
        </div>
      </div>
    </div>
  );
}
