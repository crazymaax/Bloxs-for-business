import { useEffect } from "react";
import "./style.scss";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Noticia from "../Noticia";

import { useNews } from "../../providers/noticias";

const Categoria = () => {

    const { news, listNews, handleNextPage } = useNews();

    useEffect(() => {

        listNews(1);

    }, [])

    return (
        <div className="main__category">
            {news && (
                <>
                    <h2>Energia</h2>

                    <div className="category__container">

                        <div className="category__list">
                            <div className="list_arrowLeft" onClick={() => handleNextPage(news.energy.currentPage - 1, "energy")}>
                                <FaAngleLeft size={30} color={"#9293A6"} />
                            </div>

                            {news.energy.news.map((item) => {
                                const { id } = item
                                return <Noticia noticia={item} key={id} />

                            })}


                            <div className="list_arrowRight" onClick={() => handleNextPage(news.energy.currentPage + 1, "energy")}>
                                <FaAngleRight size={30} color={"#9293A6"} />
                            </div>
                        </div>

                        <span className="list__pagination">{news.energy.currentPage} / {news.energy.maxPage}</span>

                    </div>

                    <h2>Agronegócio</h2>

                    <div className="category__container">

                        <div className="category__list">

                            <div className="list_arrowLeft" onClick={() => handleNextPage(news.agro.currentPage - 1, "agro")}>
                                <FaAngleLeft size={30} color={"#9293A6"} />
                            </div>

                            {news.agro.news.map((item) => {
                                const { id } = item
                                return <Noticia noticia={item} key={id} />

                            })}

                            <div className="list_arrowRight" onClick={() => handleNextPage(news.agro.currentPage + 1, "agro")}>
                                <FaAngleRight size={30} color={"#9293A6"} />
                            </div>

                        </div>

                        <span className="list__pagination">{news.agro.currentPage} / {news.agro.maxPage}</span>

                    </div>
                </>
            )}
        </div>
    )
}

export default Categoria;