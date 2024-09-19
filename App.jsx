import { useState } from "react";
import Header from "./header/header";
import Hero from "./hero/hero";
import Services from "./services/services";
import Projects from "./Projects/projects";
import About from "./about/about";
import Footer from "./footer/footer";


function App() {
  const [isOpen, setisOpen] = useState(false);

  const handleHamburg = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Header handleHamburg={handleHamburg} />
      <Hero handleHamburg={handleHamburg} isOpen={isOpen} />
      <Services />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
