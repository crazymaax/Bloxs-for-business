import "./style.scss"

import Aside from "../../components/Aside"
import Header from "../../components/Header"

import { useAuth } from "../../providers/user"
import { Link, useHistory } from "react-router-dom"

const Home = () => {

    const { user } = useAuth()
    const history = useHistory()

    const { name } = user;

    if (!user) {
        history.push("/")
    }

    return (
        <div className="pageContent">
            <Aside />
            <div className="pageContent__main" style={{ margin: "0px 0px 0px 230px" }}>

                <Header PageName={"Home"} />
                <main>
                    <div className="main__home">
                        <div className="home__card">
                            <div>
                                <h2>Seja bem-vindo!</h2>
                                <span>{name}</span>
                            </div>
                            <p>Tenha o controle financeiro através desta plataforma.</p>

                            <Link to="/empregador/dashboard" className="card__button">Ir para Dashboard</Link>
                        </div>

                        <div className="home__card">
                            <h2>Notícias</h2>
                            <p>Fique por dentro de todas as novidades do mercado.</p>

                            <div>
                                2 NOTICIAS
                            </div>

                            <Link to="/comunidade/noticias" className="card__button">Acessar</Link>
                        </div>
                        <div className="home__card">
                            <h2>Eventos</h2>
                            <p>Não perca nenhum evento programado.</p>

                            <Link to="/comunidade/eventos" className="card__button">Acompanhar</Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home;