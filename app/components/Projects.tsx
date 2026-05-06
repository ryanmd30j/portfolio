const projects = [
  {
    title: "Cloud-deployed CRUD Application",
    subtitle: "Java MVC + REST API + JS Client",
    description:
      "Built the same data-driven application using two architectural styles: an MVC web app with Java Servlets/JSPs, and a RESTful web service serving JSON, XML and plain text formats consumed by a JavaScript client. Cloud-deployed with managed MySQL.",
    tags: ["Java", "REST", "MVC", "JavaScript", "MySQL", "Cloud"],
  },
  {
    title: "Java Stock Control System",
    subtitle: "Object-Oriented Design with GUI",
    description:
      "Built in Java with full CRUD across products, customers, and orders. Persistent storage via files, GUI, defensive programming, and unit-tested with JUnit. Documented with class diagrams and JavaDoc.",
    tags: ["Java", "OOP", "JUnit", "GUI", "File I/O"],
  },
  {
    title: "Information Security Management Report",
    subtitle: "Critical National Infrastructure",
    description:
      "IEEE-format research report analysing the security threat landscape, risk management strategy, security culture, and technical controls for a chosen Critical National Infrastructure sector.",
    tags: ["Risk Management", "ISO 27001", "NIST", "Security Architecture"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Projects</p>
        <h2 className="text-4xl font-bold text-white mb-12">
          Selected work.
        </h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.subtitle}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}