import Forum from "../../../assets/icons/forum.svg"
import Academy from "../../../assets/icons/academy.svg"
import Eventos from "../../../assets/icons/eventos.svg"
import Noticias from "../../../assets/icons/noticias.svg"
import Servicos from "../../../assets/icons/servicos.svg"

import { Link } from "react-router-dom";

const Comunidade = () => {

    return (
        <div className="nav_group">
            <span>COMUNIDADE</span>

            <ul>
                <li>
                    <a href="#">
                        <img src={Forum} />
                        <span>Fórum</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Academy} />
                        <span>Academy</span>
                    </a>
                </li>
                <li>
                    <details>
                        <summary>
                            <img src={Eventos} />
                            <span>Eventos</span>
                        </summary>
                        <div>
                            <Link to="/comunidade/eventos:evento_1">Evento 1</Link>
                            <Link to="/comunidade/eventos:evento_2">Evento 2</Link>
                            <Link to="/comunidade/eventos:evento_3">Evento 3</Link>
                        </div>
                    </details>
                </li>
                <li>
                    <Link to="/comunidade/noticias">
                        <img src={Noticias} />
                        <span>Notícias</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <img src={Servicos} />
                        <span>Serviços</span>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Comunidade;