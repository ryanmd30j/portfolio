"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30" />
        <Image
          src="/ryan.jpg"
          alt="Ryan D'Souza"
          width={140}
          height={140}
          className="rounded-full border-2 border-gray-800 relative"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm uppercase tracking-widest text-gray-400 mb-4"
      >
        MSc Computer Science · Manchester Metropolitan University
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight"
      >
        Building toward{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          DevOps
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          security engineering
        </span>
        .
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
      >
        Distinction-track MSc student researching automated security fuzzing in CI/CD pipelines.
        First Class BSc, Cisco-certified, currently looking for graduate roles.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition shadow-lg shadow-white/10"
        >
          View projects
        </a>
      </motion.div>
    </section>
  );
}