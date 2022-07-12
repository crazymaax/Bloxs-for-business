import { useEffect } from "react";
import "./style.scss"

import BloxsLogo from "../../assets/loginLogo.svg"

import { Link, useHistory } from "react-router-dom"

import { useAuth } from "../../providers/user";


const Login = () => {

    const { user, handleGoogleLogin } = useAuth()
    const history = useHistory()

    useEffect(() => {
        if (user) {
            history.push("/home")
        }
    }, [user])

    return (
        <div className="loginContainer">
            <div className="loginContainer__info">
                <div>

                    <img src={BloxsLogo} alt="Logo da Bloxs" title="Logo da Bloxs" />

                    <h1>
                        Tenha acesso a <span>investimentos alternativos de qualidade.</span> Totalmente online e com segurança.
                    </h1>

                </div>
            </div>

            <form className="loginContainer__form">
                <h2>Login</h2>

                <span>Informe seus dados de acesso</span>

                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />

                <button>ENTRAR</button>
                <button type="button" onClick={handleGoogleLogin}>Acessar com conta Google</button> {/* Retirado do form para o teste de login */}

                <span> Ainda não possui conta? <Link to="/register">Cadastre-se agora!</Link> </span>
            </form>
        </div>
    )
}

export default Login;