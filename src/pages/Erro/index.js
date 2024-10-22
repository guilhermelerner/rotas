import { Link } from 'react-router-dom';

function Erro() {
    return (
        <div>
            <h1>Ops! Página não encontrada.</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
}

export default Erro;