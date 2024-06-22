import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Manku from "./containers/portfolio";
import NavBar from "./components/navBar";
import { BrowserRouter } from "react-router-dom";

function App() {

  useEffect(() => {
    document.title = "Mayank Bisht Portfolio"; // Set the desired title here
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>

          {/*navar*/}
          <NavBar />

          {/*main page content*/}
          <div className="App__main-page-content">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Mayank" element={<Manku />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
