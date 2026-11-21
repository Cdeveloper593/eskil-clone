"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <p className="eskil-fade-in border border-black bg-white px-5 py-4 text-center text-[15px] text-black">
        Thank you for subscribing — welcome to the Nordvik newsletter.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
      className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="eskil-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="eskil-newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="h-[52px] flex-1 border border-black bg-white px-4 text-[15px] text-black outline-none placeholder:text-[#999]"
      />
      <button type="submit" className="eskil-btn h-[52px]">
        Subscribe
      </button>
    </form>
  );
}
