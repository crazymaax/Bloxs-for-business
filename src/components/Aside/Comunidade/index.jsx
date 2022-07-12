import Forum from "../../../assets/icons/forum.svg"
import Academy from "../../../assets/icons/academy.svg"
import Eventos from "../../../assets/icons/eventos.svg"
import Noticias from "../../../assets/icons/noticias.svg"
import Servicos from "../../../assets/icons/servicos.svg"

import { FaAngleRight } from "react-icons/fa"

import { Link } from "react-router-dom";

const Comunidade = () => {

    return (
        <div className="nav_group">
            <span>COMUNIDADE</span>

            <ul>
                <li className="group__list" id="forum">
                    <Link to="/comunidade/forum" >
                        <img src={Forum} />
                        <span>Fórum</span>
                    </Link>
                </li>
                <li className="group__list" id="academy">
                    <Link to="/comunidade/academy" >
                        <img src={Academy} />
                        <span>Academy</span>
                    </Link>
                </li>
                <li className="group__list">
                    <details className="list__details">
                        <summary className="details__summary">
                            <img src={Eventos} />
                            <div className="summary__text">
                                <span>Eventos</span>
                                <FaAngleRight color={"#4B4D6E"} />
                            </div>
                        </summary>
                        <div className="details__links">
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
                <li className="group__list" id="noticias">
                    <Link to="/comunidade/noticias" >
                        <img src={Noticias} />
                        <span>Notícias</span>
                    </Link>
                </li>
                <li className="group__list" id="servicos">
                    <Link to="/comunidade/servicos" >
                        <img src={Servicos} />
                        <span>Serviços</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Comunidade;