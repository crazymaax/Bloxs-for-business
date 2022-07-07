import Dashboard from "../../../assets/icons/dashboard.svg"
import Empresas from "../../../assets/icons/empresas.svg"
import Projetos from "../../../assets/icons/projetos.svg"
import Chat from "../../../assets/icons/chat.svg"
import Proventos from "../../../assets/icons/proventos.svg"
import Indicacoes from "../../../assets/icons/indicacoes.svg"

const Empreendedor = () => {

    return (
        <div className="nav_group">
            <span>ÁREA DO EMPREGADOR</span>

            <ul>
                <li>
                    <a href="#">
                        <img src={Dashboard} />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Empresas} />
                        <span>Empresas</span>
                    </a>
                </li>
                <li>
                    <details>
                        <summary>
                            <img src={Projetos} />
                            <span>Projetos</span>
                        </summary>
                        <div>
                            <a href="#">Projeto 1</a>
                            <a href="#">Projeto 2</a>
                            <a href="#">Projeto 3</a>
                        </div>
                    </details>
                </li>
                <li>
                    <a href="#">
                        <img src={Chat} />
                        <span>Chat</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Proventos} />
                        <span>Proventos</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Indicacoes} />
                        <span>Indicações</span>
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default Empreendedor;