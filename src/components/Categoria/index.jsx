import { useEffect } from "react"
import { useNews } from "../../providers/noticias"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import "./style.scss"

const Categoria = () => {

    const { energyNews, agroNews, listNews, FormatDate } = useNews()

    useEffect(() => {
        const energy = listNews("Energia", 1)
        const agro = listNews("Agronegócio", 1)
        console.log(energyNews)
        console.log(agroNews)
    }, [])

    return (
        <div className="main__category">
            <h2>Energia</h2>

            <div className="category__list">
                <div className="list_arrowLeft">
                    <FaAngleLeft size={30} />
                </div>
                {energyNews.map((item) => {
                    const { modified, title, id, yoast_head_json: { og_image } } = item

                    const photoUrl = og_image[0].url
                    const itemTitle = title.rendered
                    const dateFormatted = FormatDate(modified)

                    return (
                        <div className="list__container" key={id}>
                            <img src={photoUrl} alt={itemTitle} />
                            <strong>{itemTitle}</strong>
                            <span>{dateFormatted}</span>
                        </div>
                    )

                })}
                <div className="list_arrowRight">
                    <FaAngleRight size={30} />
                </div>
            </div>

            <h2>Agronegócio</h2>

            <div className="category__list">
                <div className="list_arrowLeft">
                    <FaAngleLeft size={30} />
                </div>
                {agroNews.map((item) => {
                    const { modified, title, id, yoast_head_json: { og_image } } = item


                    const photoUrl = og_image[0].url
                    const itemTitle = title.rendered
                    const dateFormatted = FormatDate(modified)

                    return (

                        <div className="list__container" key={id}>
                            <img src={photoUrl} alt={itemTitle} />
                            <strong>{itemTitle}</strong>
                            <span>{dateFormatted}</span>
                        </div>
                    )


                })}
                <div className="list_arrowRight">
                    <FaAngleRight size={30} />
                </div>
            </div>

        </div>

    )
}

export default Categoria