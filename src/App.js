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

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Headers />
        <ToastContainer />

        {/* <img
        className="fixed top-0 -z-10 h-screen w-full object-cover opacity-60"
        src="https://lh6.googleusercontent.com/proxy/p0j_F_ba1hPTtS3p0V42nK6hsBye7O9jl78qZyxJBQ7Tr6VKpz9aHHHr6UndLeOGIt2Doe_pNNANSxa6W26MT23UEPAz2JVfOqRMwMYOLvKz=w3840-h2160-p-k-no-nd-mv"
        alt=""
      /> */}
        <Home />
        {/* <div id="foot-1" className="h-screen w-full bg-red-200"></div> */}
        {/* <div id="foot-2" className="h-screen w-full bg-red-500"></div> */}
        {/* <div id="foot-3" className="h-screen w-full bg-blue-200"></div> */}
        <Skills />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
