import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items in the center horizontally
  };
  return (
    <div style={containerStyle}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
