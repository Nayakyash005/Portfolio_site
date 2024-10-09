import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/contact";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure gtag function is available before using it
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-688TT3Y0L9", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Headers />
      <ToastContainer />
      <Home />
      <Skills />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
