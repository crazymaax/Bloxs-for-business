import { useEffect } from "react";
import "./style.scss";

import BloxsLogo from "../../assets/loginLogo.svg";

import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../providers/user";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "../../schemas/signup";


const Register = () => {

    const { user, handleSignup } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const onRegister = (data) => {
        handleSignup(data);
    };

    return (
        <div className="registerContainer">

            <form className="registerContainer__form" onSubmit={handleSubmit(onRegister)}>
                <h2>Cadastre-se</h2>

                <span>Informe seus dados</span>

                <input
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                />
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
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    {...register("passwordConfirmation")}
                />

                {errors.name && (
                    <span className="form__error">{errors.name.message}</span>
                )}
                {errors.email && (
                    <span className="form__error">{errors.email.message}</span>
                )}
                {errors.password && (
                    <span className="form__error">{errors.password.message}</span>
                )}
                {errors.passwordConfirmation && (
                    <span className="form__error">{errors.passwordConfirmation.message}</span>
                )}
                <button type="submit">CADASTRAR</button>

                <span>
                    Já possui uma conta?
                    <Link to="/"> Faça seu login aqui!</Link>
                </span>
            </form>

            <div className="registerContainer__info">
                <div>

                    <img src={BloxsLogo} alt="Logo da Bloxs" title="Logo da Bloxs" />

                    <h1>
                        Suas finanças no rumo certo com <span>Bloxs Investimentos.</span>
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Register;