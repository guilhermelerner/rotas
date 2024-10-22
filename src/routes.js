import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/produto';
import Erro from './pages/Erro';

import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/produto' element={<Produto />} />
                <Route path="*" element={<Erro />} />{/* Página de erro */}
            </Routes>
            <Footer /> {/* Rodapé estará presente em todas as páginas */}
        </BrowserRouter>
    );
}

export default RoutesApp;