import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Importamos las nuevas páginas de proyectos
import ProjectStockIt from './pages/projects/ProjectStockIt';
import ProjectLanding from './pages/projects/ProjectLanding';
import ProjectNewsReader from './pages/projects/ProjectNewsReader';

function App() {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <Routes>
        {/* Todo el contenido de la landing (home, about, projects, contact) va en / */}
        <Route
          path='/'
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Rutas de proyectos individuales */}
        <Route path='/projects/stockit' element={<ProjectStockIt />} />
        <Route
          path='/projects/landingpageresponsive'
          element={<ProjectLanding />}
        />
        <Route
          path='/projects/ProjectNewsReader'
          element={<ProjectNewsReader />}
        />

        {/* Rutas de páginas individuales */}
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
