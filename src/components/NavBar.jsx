import { useEffect } from "react";
export const NavBar = ({ menuOpen, setMenuOpen }) => {
  // Prevents page scrolling when mobile menu is open. If not, restores scrolling by resetting overflow to ""(default behavior)
  // document.body represents the main <body>, style.overflow controls how content inside the <body> behaves when it exceeds the screen size
  // This is useful when opening modals or mobile menus
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      {/* Navigation container */}
      <div className="max-w-5xl mx-auto px-4">
        {/* logo */}
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Kwon<span className="text-blue-500">Zhu</span>
          </a>

          {/* mobile menu button: hamburger */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
