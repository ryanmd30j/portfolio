"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  const isSending = status === "sending";

  return (
    <section id="contact" className="py-24 px-6 border-t border-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-lg text-gray-400">
            Open to graduate and junior roles in Software Engineering, DevOps, Site Reliability,
            and Security Engineering.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              disabled={isSending}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={isSending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              disabled={isSending}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to discuss?"
              rows={5}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSending || status === "success"}
            className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending && "Sending..."}
            {status === "success" && "✓ Message sent — I'll be in touch"}
            {(status === "idle" || status === "error") && "Send message"}
          </button>

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center"
            >
              {errorMessage}
            </motion.p>
          )}
        </form>

        <div className="flex gap-6 justify-center mt-12 pt-8 border-t border-gray-800/50 text-gray-400">
          <a
            href="https://www.linkedin.com/in/ryan-d-souza-59206a254/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ryanmd30j"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}