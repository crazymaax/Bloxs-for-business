import { useEffect } from "react"
import "./style.scss"

import Aside from "../../components/Aside"
import Header from "../../components/Header"
import Noticia from "../../components/Noticia"

import { useAuth } from "../../providers/user"
import { useNews } from "../../providers/noticias"

import { Link, useHistory } from "react-router-dom"

const Home = () => {

    const { user } = useAuth()
    const history = useHistory()
    const { energyNews, agroNews, energyPage, agroPage, listNews } = useNews()

    if (!user) {
        history.push("/")
    }

    const { name } = user;

    useEffect(() => {

        const fetchData = async () => {

            listNews("Energia", energyPage)

            listNews("Agronegócio", agroPage)

        }

        fetchData()
    }, [energyPage, agroPage])

    return (
        <div className="pageContent">
            <Aside />
            <div className="pageContent__main">

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

                            <div className="card__homeNews">
                                {energyNews.slice(0, 1).map((item) => {
                                    const { id } = item
                                    return (
                                        <div className="homeNews__newsContainer">
                                            <span>Energia</span>
                                            <Noticia noticia={item} key={id} />
                                        </div>
                                    )

                                })}
                                {agroNews.slice(0, 1).map((item) => {
                                    const { id } = item
                                    return (
                                        <div className="homeNews__newsContainer">
                                            <span>Agronegócio</span>
                                            <Noticia noticia={item} key={id} />
                                        </div>
                                    )

                                })}
                            </div>

                            <Link to="/comunidade/noticias" className="card__button">Acessar</Link>
                        </div>
                        <div className="home__card">
                            <h2>Indicações</h2>
                            <p>Cadastre investidores para suas operações e ganhe por cada indicação.</p>

                            <Link to="/empregador/indicacoes" className="card__button">Cadastrar</Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home;