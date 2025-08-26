import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const modalRoot = typeof window !== "undefined"
  ? document.getElementById("modal-root") || (() => {
      const el = document.createElement("div");
      el.id = "modal-root";
      document.body.appendChild(el);
      return el;
    })()
  : null;

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-elevated p-8 max-w-lg w-full relative penis-lol"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 pill"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
