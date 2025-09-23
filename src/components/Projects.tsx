export default function Projects() {
  const projects = [
    {
      title: "Biscord",
      description: "Real-time communication and collaboration platform.",
      link: "https://github.com/XavierAG/Discord-Clone",
      image: "/projects/biscord.png",
    },
    {
      title: "Meetdown",
      description: "Web service for finding groups and events",
      link: "https://github.com/XavierAG/Meetdown-A-Meetup-Clone",
      image: "/projects/meetup.png",
    },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="m-4 relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Project Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
            />
            {/* Dimming Overlay */}

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-left">

              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-white mb-4">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                className="px-4 py-2 bg-gray-800/50 text-white rounded-2xl text-sm font-medium hover:bg-gray-400/50 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}