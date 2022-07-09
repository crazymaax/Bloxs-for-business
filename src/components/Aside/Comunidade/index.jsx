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
                    <Link to="/comunidade/forum" id="forum">
                        <img src={Forum} />
                        <span>Fórum</span>
                    </Link>
                </li>
                <li>
                    <Link to="/comunidade/academy" id="academy">
                        <img src={Academy} />
                        <span>Academy</span>
                    </Link>
                </li>
                <li>
                    <details>
                        <summary>
                            <img src={Eventos} />
                            <span>Eventos</span>
                        </summary>
                        <div>
                            <Link
                                to="/comunidade/eventos:evento_1"
                                id="eventos:evento_1"
                            >
                                <span>
                                    Evento 1
                                </span>
                            </Link>
                            <Link
                                to="/comunidade/eventos:evento_2"
                                id="eventos:evento_2"
                            >
                                <span>
                                    Evento 2
                                </span>
                            </Link>
                            <Link
                                to="/comunidade/eventos:evento_3"
                                id="eventos:evento_3"
                            >
                                <span>
                                    Evento 3
                                </span>
                            </Link>
                        </div>
                    </details>
                </li>
                <li>
                    <Link to="/comunidade/noticias" id="noticias">
                        <img src={Noticias} />
                        <span>Notícias</span>
                    </Link>
                </li>
                <li>
                    <Link to="/comunidade/servicos" id="servicos">
                        <img src={Servicos} />
                        <span>Serviços</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Comunidade;