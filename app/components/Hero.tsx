export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
        MSc Computer Science · Manchester Metropolitan University
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
        Building toward DevOps and security engineering.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        Distinction-track MSc student researching automated security fuzzing in CI/CD pipelines.
        First Class BSc, Cisco-certified, currently looking for graduate roles.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 text-white rounded-full font-medium hover:bg-gray-900 transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}