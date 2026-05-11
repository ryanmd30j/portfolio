"use client";

import { motion } from "framer-motion";
import { FaJava, FaAws, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTypescript } from "react-icons/si";
import { TbApi, TbShieldLock } from "react-icons/tb";
import { TbArrowUpRight } from "react-icons/tb";

type IconType = React.ComponentType<{ className?: string }>;

const tagIcons: Record<string, IconType> = {
  Java: FaJava,
  REST: TbApi,
  MVC: TbApi,
  JavaScript: SiJavascript,
  MySQL: SiMysql,
  Cloud: FaAws,
  OOP: SiTypescript,
  JUnit: SiTypescript,
  GUI: SiTypescript,
  "File I/O": SiTypescript,
  "Risk Management": TbShieldLock,
  "ISO 27001": TbShieldLock,
  NIST: TbShieldLock,
  "Security Architecture": TbShieldLock,
};

const projects = [
  {
    title: "Cloud-deployed CRUD Application",
    subtitle: "Java MVC + REST API + JS Client",
    description:
      "Built the same data-driven application using two architectural styles: an MVC web app with Java Servlets/JSPs, and a RESTful web service serving JSON, XML and plain text formats consumed by a JavaScript client. Cloud-deployed with managed MySQL.",
    tags: ["Java", "REST", "MVC", "JavaScript", "MySQL", "Cloud"],
    link: "https://github.com/ryanmd30j",
  },
  {
    title: "Java Stock Control System",
    subtitle: "Object-Oriented Design with GUI",
    description:
      "Built in Java with full CRUD across products, customers, and orders. Persistent storage via files, GUI, defensive programming, and unit-tested with JUnit. Documented with class diagrams and JavaDoc.",
    tags: ["Java", "OOP", "JUnit", "GUI", "File I/O"],
    link: "https://github.com/ryanmd30j",
  },
  {
    title: "Information Security Management Report",
    subtitle: "Critical National Infrastructure",
    description:
      "IEEE-format research report analysing the security threat landscape, risk management strategy, security culture, and technical controls for a chosen Critical National Infrastructure sector.",
    tags: ["Risk Management", "ISO 27001", "NIST", "Security Architecture"],
    link: "https://github.com/ryanmd30j",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Selected work.
        </h2>
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 bg-gradient-to-br from-gray-900/30 to-transparent"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white pr-8">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <TbArrowUpRight className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 mb-4">{project.subtitle}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => {
                  const Icon = tagIcons[tag];
                  return (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300 flex items-center gap-1.5"
                    >
                      {Icon && <Icon className="w-3 h-3" />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ryanmd30j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-full font-medium hover:bg-gray-900 hover:border-gray-400 transition"
          >
            <FaGithub className="w-5 h-5" />
            View all projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}