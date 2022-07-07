import "./style.scss"

import { FaHandPointer, FaChartLine, FaShieldAlt, FaHandHoldingUsd } from "react-icons/fa"

import { Link } from "react-router-dom"

const Login = () => {

    return (
        <div className="loginContainer">
            <div className="loginContainer__info">
                <Link to="/" className="info__header">
                    <img src="https://bloxs.com.br/static/images/logo/logo-white.svg" alt="" />
                </Link>

                <h1>
                    Dê o primeiro passo. <span>Diversifique</span> como os grandes
                </h1>

                <div className="info_boxesContainer">
                    <div className="boxesContainer__smallBox">
                        <FaHandPointer />
                        <p>
                            Mais de <span>70 projetos da economia real</span>, criteriosamente selecionados para investimento
                        </p>
                    </div>
                    <div className="boxesContainer__smallBox">
                        <FaChartLine />
                        <p>
                            Projetos com alta rentabilidade, taxa zero e <span>baixa correlação</span> com a bolsa de valores
                        </p>
                    </div>
                    <div className="boxesContainer__smallBox">
                        <FaShieldAlt />
                        <p>
                            Segurança de um mercado <span>regulado pela ICVM 588 de 2017</span>
                        </p>
                    </div>
                    <div className="boxesContainer__smallBox">
                        <FaHandHoldingUsd />
                        <p>
                            Mais de <span>100 milhões captados</span> e 100% dos relatórios em dia
                        </p>
                    </div>
                </div>
            </div>

            <form className="loginContainer__form">
                <h2>Login</h2>

                <span>Informe seus dados de acesso</span>

                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>

                <button>ENTRAR</button>
                <button>Acessar com conta Google</button>

                <span> Ainda não possui conta? <Link to="/register">Cadastre-se agora!</Link> </span>
            </form>
        </div>
    )
}

export default Login;