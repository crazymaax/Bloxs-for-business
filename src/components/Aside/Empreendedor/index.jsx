import Dashboard from "../../../assets/icons/dashboard.svg"
import Empresas from "../../../assets/icons/empresas.svg"
import Projetos from "../../../assets/icons/projetos.svg"
import Chat from "../../../assets/icons/chat.svg"
import Proventos from "../../../assets/icons/proventos.svg"
import Indicacoes from "../../../assets/icons/indicacoes.svg"

import { Link } from "react-router-dom"

const Empreendedor = () => {

    return (
        <div className="nav_group">
            <span>ÁREA DO EMPREGADOR</span>

            <ul>
                <li>
                    <Link to="/empregador/dashboard" id="dashboard">
                        <img src={Dashboard} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/empresas" id="empresas">
                        <img src={Empresas} />
                        <span>Empresas</span>
                    </Link>
                </li>
                <li>
                    <details>
                        <summary>
                            <img src={Projetos} />
                            <span>Projetos</span>
                        </summary>
                        <div>
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
                <li>
                    <Link to="/empregador/chat" id="chat">
                        <img src={Chat} />
                        <span>Chat</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/proventos" id="proventos">
                        <img src={Proventos} />
                        <span>Proventos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/indicacoes" id="indicacoes">
                        <img src={Indicacoes} />
                        <span>Indicações</span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Empreendedor;