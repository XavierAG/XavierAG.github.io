import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-5xl font-bold text-purple-400">Hello, Portfolio!</h1>
//       <p className="mt-4 text-lg text-gray-400">
//         Tailwind is working 🎉
//       </p>
//     </main>
//   );
// }
