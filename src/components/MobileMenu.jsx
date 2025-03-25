export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    // Mobile menu container
    <div
      // default & conditional style
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : // It disables all mouse interactions with the hidden menu
            // If use hidden instead of 'h-0 opacity-0 pointer-events-none', there will be no transition animation
            // because hidden completely removes the element from rendering. The menu just "pops in" instead of fading in smoothly
            "h-0 opacity-0 pointer-events-none"
      }`}>
      {/* Close button: X */}
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu">
        &times;
      </button>

      {/* Menu links with animations */}
      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}>
        Home
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}>
        About
      </a>
      <a
        href="#project"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}>
        Projects
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </div>
  );
};
