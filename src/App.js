import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
//Para que no sea un nombre tan largo, podemos renombrarlo con ... as ...)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />

      </Routes>
    </Router>
  );
}

export default App;
