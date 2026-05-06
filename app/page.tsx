import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        © 2026 Ryan D&apos;Souza. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}