export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Xavier Guzman</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/XavierAG" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/xavier-guzman/" target="_blank">LinkedIn</a>
        <a href="https://www.resume.lol/share/ko030zi">Resume</a>
      </div>
    </footer>
  );
}
