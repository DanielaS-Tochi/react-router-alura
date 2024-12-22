import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
//Para que no sea un nombre tan largo, podemos renombrarlo con ... as ...)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  // La ruta comodpin siempre va al final ("*")
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
