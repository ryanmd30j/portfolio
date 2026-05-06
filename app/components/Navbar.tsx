export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-lg text-white">
          Ryan D&apos;Souza
        </a>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}