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
                    <Link to="/empregador/dashboard">
                        <img src={Dashboard} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/empresas">
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
                            <Link to="/empregador/projetos:projeto_1">Projeto 1</Link>
                            <Link to="/empregador/projetos:projeto_2">Projeto 2</Link>
                            <Link to="/empregador/projetos:projeto_3">Projeto 3</Link>
                        </div>
                    </details>
                </li>
                <li>
                    <Link to="/empregador/chat">
                        <img src={Chat} />
                        <span>Chat</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/proventos">
                        <img src={Proventos} />
                        <span>Proventos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/empregador/indicacoes">
                        <img src={Indicacoes} />
                        <span>Indicações</span>
                    </Link>
                </li>
            </ul>

        </div>

    )
}

export default Empreendedor;