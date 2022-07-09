import { useEffect } from "react"
import { useNews } from "../../providers/noticias"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import "./style.scss"
import Noticia from "../Noticia"

const Categoria = () => {

    const { energyNews, agroNews, energyMaxPage, energyPage, agroMaxPage, agroPage, listNews, handleNextPage } = useNews()

    useEffect(() => {

        const fetchData = async () => {

            listNews("Energia", energyPage)

            listNews("Agronegócio", agroPage)

        }

        fetchData()
    }, [energyPage, agroPage])

    return (
        <div className="main__category">

            <h2>Energia</h2>

            <div className="category__container">
                <div className="category__list">
                    <div className="list_arrowLeft" id={energyPage} onClick={() => handleNextPage(energyPage, "Energia", false)}>
                        <FaAngleLeft size={30} color={"#9293A6"} />
                    </div>

                    {energyNews.map((item) => {
                        const { id } = item
                        return <Noticia noticia={item} key={id} />

                    })}

                    <div className="list_arrowRight" id={energyPage} onClick={() => handleNextPage(energyPage, "Energia", true)}>
                        <FaAngleRight size={30} color={"#9293A6"} />
                    </div>
                </div>
                <span className="list__pagination">{energyPage} / {energyMaxPage}</span>
            </div>

            <h2>Agronegócio</h2>

            <div className="category__container">
                <div className="category__list">
                    <div className="list_arrowLeft" id={agroPage} onClick={() => handleNextPage(agroPage, "Agronegócio", false)}>
                        <FaAngleLeft size={30} color={"#9293A6"} />
                    </div>

                    {agroNews.map((item) => {
                        const { id } = item
                        return <Noticia noticia={item} key={id} />

                    })}

                    <div className="list_arrowRight" id={agroPage} onClick={() => handleNextPage(agroPage, "Agronegócio", true)}>
                        <FaAngleRight size={30} color={"#9293A6"} />
                    </div>
                </div>
                <span className="list__pagination">{agroPage} / {agroMaxPage}</span>
            </div>
        </div>

    )
}

export default Categoria