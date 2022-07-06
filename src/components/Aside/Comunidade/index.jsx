import { Link } from "react-router-dom";

const Comunidade = () => {

    return (
        <div>
            <span>COMUNIDADE</span>
            
            <ul>
                <li>
                    <a href="#">Fórum</a>
                </li>
                <li>
                    <a href="#">Academy</a>
                </li>
                <li>
                    <details>
                        <summary>
                            Eventos
                        </summary>
                        <div>
                            <a href="#">Evento 1</a>
                            <a href="#">Evento 2</a>
                            <a href="#">Evento 3</a>
                        </div>
                    </details>
                </li>
                <li>
                    <Link to="/noticias">Notícias</Link>
                </li>
                <li>
                    <a href="#">Serviços</a>
                </li>
            </ul>

        </div>
    )
}

export default Comunidade;