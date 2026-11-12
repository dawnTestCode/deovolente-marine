"use client";
import { useState } from "react";

export function ContactForm() {
  const [state, setState] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    }).catch(() => null);
    setState(res && res.ok ? "ok" : "error");
  }
  return (
    <form className="box" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" autoComplete="name" />
      <label htmlFor="email">Email *</label>
      <input id="email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Tell us about your boat and what it needs…" />
      <div style={{ marginTop: 18 }}><button className="btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send"}
      </button></div>
      {state === "ok" && <div className="ok">Thanks — your message is on its way. We'll be in touch soon.</div>}
      {state === "error" && <div className="err">Something went wrong. Please call us instead.</div>}
    </form>
  );
}

export function SubscribeForm() {
  const [state, setState] = useState("idle");
  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/subscribe", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
    }).catch(() => null);
    setState(res && res.ok ? "ok" : "error");
  }
  return (
    <form className="box" onSubmit={onSubmit}>
      <label htmlFor="sub-email">Email *</label>
      <input id="sub-email" name="email" type="email" required autoComplete="email" />
      <div style={{ marginTop: 18 }}><button className="btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Signing up…" : "Subscribe"}
      </button></div>
      {state === "ok" && <div className="ok">You're in — watch your inbox for your 10% off.</div>}
      {state === "error" && <div className="err">Something went wrong. Please try again.</div>}
    </form>
  );
}
