import "@fontsource/poppins";
import Navbar from "./Layouts/Navbar/Navbar";
import Hero from "./Layouts/Hero/Hero";
import About from "./Layouts/About/About";
import Succes from "./Layouts/Succes/Succes";
import Best from "./Layouts/Best/Best";
import Header from "./pages/Header";
import Main from "./pages/Main";

export default function App() {
  return (
    <div className="bg-ccream font-poppins py-10">
      <Header />
      <Main />
    </div>
  )
}