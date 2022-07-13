import { useEffect } from "react";
import "./style.scss";

import BloxsLogo from "../../assets/loginLogo.svg";

import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../providers/user";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login";

const Login = () => {

    const { user, handleGoogleLogin, handleLogin } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onRegister = (data) => {
        handleLogin(data);
    };

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

            <form className="loginContainer__form" onSubmit={handleSubmit(onRegister)}>
                <h2>Login</h2>

                <span>Informe seus dados de acesso</span>

                <input
                    type="text"
                    placeholder="E-mail"
                    {...register("email")}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    {...register("password")}
                />

                {errors.email && (
                    <span className="form__error">{errors.email.message}</span>
                )}
                {errors.password && (
                    <span className="form__error">{errors.password.message}</span>
                )}


                <button type="submit" >ENTRAR</button>
                <button type="button" onClick={handleGoogleLogin}>Acessar com conta Google</button>

                <span> Ainda não possui conta? <Link to="/register">Cadastre-se agora!</Link> </span>
            </form>
        </div>
    )
}

export default Login;