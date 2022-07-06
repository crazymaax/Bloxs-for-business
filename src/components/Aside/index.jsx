import bloxsLogo from "../../assets/bloxsLogo.svg";

const Aside = () => {

    return (
        <aside>
            <img src={bloxsLogo} alt="Logo da Bloxs" />

            <nav>
                <a href="#">Home</a>

                <div>

                    <span>ÁREA DO EMPREGADOR</span>

                    <ul>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Empresas</a>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Projetos
                                </summary>
                                <a href="#">Projeto 1</a>
                                <a href="#">Projeto 2</a>
                                <a href="#">Projeto 3</a>
                            </details>
                        </li>
                        <li>
                            <a href="#">Chat</a>
                        </li>
                        <li>
                            <a href="#">Proventos</a>
                        </li>
                        <li>
                            <a href="#">Indicações</a>
                        </li>
                    </ul>

                </div>

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
                                <a href="#">Evento 1</a>
                                <a href="#">Evento 2</a>
                                <a href="#">Evento 3</a>
                            </details>
                        </li>
                        <li>
                            <a href="#">Notícias</a>
                        </li>
                        <li>
                            <a href="#">Serviços</a>
                        </li>
                    </ul>

                </div>
            </nav>

        </aside>
    )
}

export default Aside;