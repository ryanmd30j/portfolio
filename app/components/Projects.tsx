"use client";

import { motion } from "framer-motion";
import { FaJava, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTypescript, SiPytest, SiGithubactions } from "react-icons/si";
import { TbApi, TbShieldLock, TbArrowUpRight, TbActivity } from "react-icons/tb";

type IconType = React.ComponentType<{ className?: string }>;

const tagIcons: Record<string, IconType> = {
  Java: FaJava,
  Python: FaPython,
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
  pytest: SiPytest,
  "GitHub Actions": SiGithubactions,
  "CI/CD": SiGithubactions,
};

const featuredProject = {
  title: "repo-health-checker",
  subtitle: "Python DevOps CLI tool",
  description:
    "A command-line tool that scans any public GitHub repository and produces a health report covering documentation, testing, CI/CD, recent activity, and overall project hygiene. Built as a quality gate that can be dropped into a CI/CD pipeline.",
  highlights: [
    "39 unit tests, all passing in under 0.3 seconds",
    "GitHub Actions runs the full suite on every push across Python 3.11, 3.12, 3.13, and 3.14",
    "Type-hinted throughout, custom exceptions, dataclass-based models",
    "Clean separation: API client / pure check logic / output formatter / CLI",
    "Meaningful CLI exit codes for integration into other pipelines",
  ],
  tags: ["Python", "pytest", "GitHub Actions", "CI/CD", "REST"],
  github: "https://github.com/ryanmd30j/repo-health-checker",
  actions: "https://github.com/ryanmd30j/repo-health-checker/actions",
};

const academicProjects = [
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
          Featured work.
        </h2>

        {/* Featured Project — bigger, more visual weight */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group relative border border-gray-700 rounded-2xl p-8 md:p-10 mb-16 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-transparent hover:border-gray-500 transition-all duration-300"
        >
          {/* Live badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Live · CI Passing
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Featured</span>
          </div>

          <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-lg text-gray-400">{featuredProject.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <a
                href={featuredProject.actions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-700 text-gray-300 rounded-full hover:border-gray-500 hover:text-white transition"
                aria-label="View CI/CD workflow runs"
              >
                <TbActivity className="w-4 h-4" />
                CI
              </a>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                aria-label="View on GitHub"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            {featuredProject.description}
          </p>

          <ul className="space-y-2 mb-6">
            {featuredProject.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-gray-300">
                <span className="text-green-400 mt-1.5 flex-shrink-0">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 flex-wrap pt-2">
            {featuredProject.tags.map((tag) => {
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

        {/* Academic projects section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Academic work</h3>
          <p className="text-gray-400">Selected MSc Computer Science projects (Manchester Metropolitan University).</p>
        </div>

        <div className="grid gap-6">
          {academicProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 bg-gradient-to-br from-gray-900/20 to-transparent"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white pr-8">{project.title}</h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <TbArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => {
                  const Icon = tagIcons[tag];
                  return (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs border border-gray-700 rounded-full text-gray-300 flex items-center gap-1.5"
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