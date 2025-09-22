export default function Skills() {
  const skills = ["React", "Javascript", "Node.js", "Python", "Redux", "SQLAlchemy", "Express.js", "Docker"];

  return (
    <section
  className="py-16 text-center"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 15%, transparent 85%, rgba(0,0,0,0.7)),
      radial-gradient(circle at center, rgba(57, 32, 158, 0.2), transparent 100%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  <h2 className="text-3xl font-semibold mb-8">Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto p-8 rounded-2xl">
    {skills.map((skill) => (
      <span
        key={skill}
        className="px-6 py-4 text-white rounded-2xl text-base sm:text-lg font-medium hover:bg-gray-500/50 transition bg-gray-700/20"
      >
        {skill}
      </span>
    ))}
  </div>
</section>

  );
}
