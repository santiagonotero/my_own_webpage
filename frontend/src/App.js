import {React} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Home from "./home.js";
import Portfolio from "./portfolio.js";
import Cv from "./cv.js";
import Contact from "./contact.js";
import Admin from "./admin.js";
import './styles.css';

function App() {
  return (
    <div className="App bg-[#FAEBD7] min-h-screen flex flex-col" >    {/* bg-[#FAEBD7] */}
      <BrowserRouter>
        <header>
            <NavBar />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Desarrollo de sitios web" />
            <meta name="author" content="Santiago Otero" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Santiago Otero - Desarrollo web Full-Stack" />
            <meta property="og:description" content="Desarrollo de sitios web completos basados en la tecnología Node.JS" />
            <meta property="og:url" content="https://santiagootero.online" />
        </header>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/cv" element={<Cv />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
        </Routes>
                

        <footer className='bg-[#DCD9D5] content-end'>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
