import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem-vindo à página HOME</h1>

            <Link to='/Sobre'>Sobre</Link>
            <Link to='/Contato'>Contato</Link>
        </div>
    );
}
export default Home;
