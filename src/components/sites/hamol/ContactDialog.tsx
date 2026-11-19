"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { CONTACT_EMAIL } from "./data";

export const CONTACT_EVENT = "hamol:open-contact";

export function openContactDialog() {
  window.dispatchEvent(new Event(CONTACT_EVENT));
}

const LOOKING_FOR = ["A new venture", "A new product", "Just to say hello"] as const;

export function ContactDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof LOOKING_FOR)[number]>(LOOKING_FOR[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onOpen = () => ref.current?.showModal();
    window.addEventListener(CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_EVENT, onOpen);
  }, []);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${topic} — ${name || "Website enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWhat are you looking for? ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      className="m-auto w-[min(560px,calc(100vw-48px))] rounded-3xl border-0 bg-white p-0 text-[#171a1c] shadow-2xl backdrop:bg-black/70"
      aria-labelledby="contact-dialog-title"
    >
      <form onSubmit={send} className="relative max-h-[88svh] overflow-y-auto p-8 sm:p-10">
        <button
          type="button"
          aria-label="Close contact form"
          onClick={() => ref.current?.close()}
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/60 transition hover:text-black"
        >
          <X size={18} />
        </button>

        <h2 id="contact-dialog-title" className="text-4xl font-medium tracking-[-0.04em]">
          Let&rsquo;s talk
        </h2>
        <p className="mt-3 max-w-[44ch] leading-relaxed text-[#5b6560]">
          Tell us about your project or idea — the first conversation is free and without
          commitment.
        </p>
        <p className="mt-5 text-[11px] font-medium tracking-[0.18em] text-[#8a938d] uppercase">
          Step 1 of 5
        </p>

        <label className="mt-7 block text-sm font-medium">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-[15px] font-normal outline-none focus:border-black/45"
            autoComplete="name"
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-[15px] font-normal outline-none focus:border-black/45"
            autoComplete="email"
          />
        </label>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium">What are you looking for?</legend>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {LOOKING_FOR.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTopic(option)}
                aria-pressed={topic === option}
                className={`rounded-full border px-4 py-2 text-[13px] transition ${
                  topic === option
                    ? "border-[#171a1c] bg-[#171a1c] text-white"
                    : "border-black/20 hover:border-black/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="mt-5 block text-sm font-medium">
          Tell us more…
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-2 w-full resize-none rounded-xl border border-black/15 px-4 py-3 text-[15px] font-normal outline-none focus:border-black/45"
          />
        </label>

        <p className="mt-5 text-[13px] text-[#8a938d]">We usually reply within one business day.</p>
        <button
          type="submit"
          className="mt-3.5 w-full rounded-full bg-[#171a1c] py-3.5 text-sm font-semibold text-white transition hover:bg-black"
        >
          Send message
        </button>
      </form>
    </dialog>
  );
}

export function ContactButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openContactDialog} className={className}>
      {children}
    </button>
  );
}
