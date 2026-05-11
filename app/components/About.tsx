"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">About</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          The path so far.
        </h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I completed my BSc in Business Technology at Manchester Met with First Class Honours,
            with a final-year literature review on phishing attack methods, detection approaches,
            and user defence. That work pulled me toward the defensive side of cybersecurity.
          </p>
          <p>
            My MSc has built directly on that foundation recent coursework spans cloud-deployed
            Java web applications, object-oriented system design with full unit testing, relational
            database modelling, and information security management for Critical National Infrastructure.
            I&apos;m currently achieving Distinction-level grades across all completed modules.
          </p>
          <p>
            For my dissertation, I&apos;m researching automated security
            fuzzing in CI/CD pipelines building a tool that integrates fuzz testing into platforms
            like GitHub Actions to detect vulnerabilities during the automated build process.
          </p>
          <p>
            Alongside my studies, I work part-time at BT Group as a Contact Centre Guide,
            troubleshooting technical issues for customers and explaining complex problems
            in plain language. Two years in that role has taught me what every engineer needs:
            how to handle pressure, communicate clearly with non-technical people,
            and stay calm when systems aren&apos;t behaving.
          </p>
        </div>
      </motion.div>
    </section>
  );
}