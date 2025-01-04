import "@fontsource/poppins";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import ScrollToHash from "./pages/ScrollToHash";

export default function App() {
  return (
    <div id="beranda" className="bg-ccream font-poppins pt-10">
      <Header />
      <Main />
      <Footer />
      <ScrollToHash />
    </div>
  )
}