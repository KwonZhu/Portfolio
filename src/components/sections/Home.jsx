export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative">
      <div className="text-center z-10 px-4 ">
        {/* can't set the text to be gradient without setting the bg as gradient. The clip makes the background only appear where the text is, then makes the text-color transparent*/}
        {/* text-gradient: bg-gradient-to-r -> bg-clip-text -> text-transparent */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Kwon
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
          I am a full-stack develop who loves crafting clean, scalable web
          application. My goal is to build solutions that offer both exceptional
          performance and a delightful user experience.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            View Projects
          </a>
          <a
            href="#contact"
            // 500/50 means 50% opacity, 500/10 means 10% opacity
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
