import About from "./Components/About";
import Footer from "./Components/Footer";
import Git from "./Components/Git";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Git />
      <Footer />
    </>
  );
}

export default App;
