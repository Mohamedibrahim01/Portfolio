export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/Mohamedibrahim01/portfolio",
    },
    {
      title: "Todo App",
      description: "A simple and clean todo list with local storage support.",
      link: "https://github.com/Mohamedibrahim01/todo-app",
    },
    {
      title: "Weather App",
      description: "Weather forecast app using OpenWeather API.",
      link: "https://github.com/Mohamedibrahim01/weather-app",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100 text-blue-800 px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
