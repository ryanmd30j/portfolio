export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Contact</p>
        <h2 className="text-4xl font-bold text-white mb-6">
          Let&apos;s talk.
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Open to graduate and junior roles in Software Engineering, DevOps, Site Reliability,
          and Security Engineering.
        </p>
        <div className="flex gap-6 justify-center text-gray-300">
          <a
            href="https://www.linkedin.com/in/ryan-d-souza-59206a254/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ryanmd30j"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}