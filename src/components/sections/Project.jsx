export const Project = () => {
  // Project Data with Tech Stack
  const projectsData = [
    {
      title: "Meetly Omini",
      description:
        "This is a multifunctional platform designed for event management and interactive engagement. It offers features such as multi-language support, real-time interaction, Q&A polling, and raffle management.",
      techStack: [
        "React",
        "TypeScript",
        "TailwindCss",
        "Shadcn",
        "Context API",
        ".NET 8.0",
        "ASP.NET Core",
        "AutoMapper",
        "PostgreSQL",
        "RESTful API",
        "AWS S3",
      ],
      link: "https://uat.meetlyomni.com/",
    },
    {
      title: "Mooc Course",
      description:
        "This is an online course learning management system that includes an admin panel for backend management and a user interface for learners. The admin panel allows management of users, courses, and teacher information. The frontend enables users to browse courses, view course and instructor details, and track their personal learning progress.",
      techStack: [
        "React",
        "JavaScript",
        "MUI",
        "Ant Design",
        "Redux",
        ".NET 8.0",
        "EF Core",
        "Autofac",
        "JWT",
        "RBAC",
        "MySQL(SQLite)",
      ],
      link: "https://github.com/orgs/MoocDevTeam/repositories",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen flex justify-center items-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
              {/* View Project Button */}
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
