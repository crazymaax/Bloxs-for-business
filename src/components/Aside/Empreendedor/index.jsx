import Dashboard from "../../../assets/icons/dashboard.svg"
import Empresas from "../../../assets/icons/empresas.svg"
import Projetos from "../../../assets/icons/projetos.svg"
import Chat from "../../../assets/icons/chat.svg"
import Proventos from "../../../assets/icons/proventos.svg"
import Indicacoes from "../../../assets/icons/indicacoes.svg"

import { FaAngleRight } from "react-icons/fa"

import { Link } from "react-router-dom"

const Empreendedor = () => {

    return (
        <div className="nav_group">
            <span>ÁREA DO EMPREGADOR</span>

            <ul>
                <li className="group__list" id="dashboard">
                    <Link to="/empregador/dashboard" >
                        <img src={Dashboard} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="group__list" id="empresas">
                    <Link to="/empregador/empresas" >
                        <img src={Empresas} />
                        <span>Empresas</span>
                    </Link>
                </li>
                <li className="group__list">
                    <details className="list__details">
                        <summary className="details__summary">
                            <img src={Projetos} />
                            <div className="summary__text">
                                <span>Projetos</span>
                                <FaAngleRight color={"#4B4D6E"}/>
                            </div>
                        </summary>
                        <div className="details__links">
                            <Link
                                to="/empregador/projetos:projeto_1"
                                id="projetos:projeto_1"
                            >
                                <span>
                                    Projeto 1
                                </span>
                            </Link>
                            <Link
                                to="/empregador/projetos:projeto_2"
                                id="projetos:projeto_2"
                            >
                                <span>
                                    Projeto 2
                                </span>
                            </Link>
                            <Link
                                to="/empregador/projetos:projeto_3"
                                id="projetos:projeto_3"
                            >
                                <span>
                                    Projeto 3
                                </span>
                            </Link>
                        </div>
                    </details>
                </li>
                <li className="group__list" id="chat">
                    <Link to="/empregador/chat" >
                        <img src={Chat} />
                        <span>Chat</span>
                    </Link>
                </li>
                <li className="group__list" id="proventos">
                    <Link to="/empregador/proventos" >
                        <img src={Proventos} />
                        <span>Proventos</span>
                    </Link>
                </li>
                <li className="group__list" id="indicacoes">
                    <Link to="/empregador/indicacoes" >
                        <img src={Indicacoes} />
                        <span>Indicações</span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Empreendedor;