import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject'
import Contato from './components/pages/Contato'
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';



function App() {
  return (
    <Router>
        <NavBar />
    <Container customClass="min_height">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contato' element={<Contato />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
      </Routes>
    </Container>
      <Footer />
    </Router>
  );
}

export default App;
