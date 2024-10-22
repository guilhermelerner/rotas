import { Link } from 'react-router-dom';

function Produto() {
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                <li><Link to="/produto/1">Produto 1</Link></li>
                <li><Link to="/produto/2">Produto 2</Link></li>
                <li><Link to="/produto/3">Produto 3</Link></li>
            </ul>
        </div>
    );
}

export default Produto;