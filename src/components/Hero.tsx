export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Subtle pink circular gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(85, 62, 175, 0.2), transparent 90%)",
        }}
      ></div>

      <img
        src="/pfp.jpeg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 relative z-10"
      />
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 relative z-10">
        Xavier Guzman
      </h1>
      <p className="mt-2 text-lg text-white max-w-lg relative z-10">
        Full Stack Developer
      </p>
    </section>
  );
}
