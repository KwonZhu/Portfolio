export const About = () => {
  const fronendSkills = ["React", "JavaScript", "TypeScript", "TailwindCss"];
  const backendSkills = ["NodeJS", "MongoDB", "GraphQL", "C#", ".Net"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        {/* Main Container */}
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 ">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions
          </p>
          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {fronendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> G.D. in Computer Science </strong> - University of
                Adelaide
              </li>
              <li>
                Relevant CourseworkL: Data Structure, Computer Networks &
                Applications, ...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Software Engineer at Meetly Omini (Dec 2024 - Mar 2025)
                </h4>
                <p>Developed and maintained applications.</p>
              </div>
              <div>
                <h4 className="font-semibold">Intern at MoocCourse </h4>
                <p>
                  Assisted in building front-end components and integrating REST
                  APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
