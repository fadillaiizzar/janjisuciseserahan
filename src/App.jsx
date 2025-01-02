import "@fontsource/poppins";
import Navbar from "./Layouts/Navbar/Navbar";
import Hero from "./Layouts/Hero/Hero";
import About from "./Layouts/About/About";

export default function App() {
  return (
    <div className="bg-ccream font-poppins py-10">
      <Navbar />
      <Hero />
      <div className="px-10">
        <About />
      </div>
    </div>
  )
}