import "./style.scss"

import { useNews } from "../../providers/noticias"

const Noticia = ({ noticia }) => {

    const { FormatDate } = useNews()

    const { modified, title, link, yoast_head_json: { og_image } } = noticia

    const photoUrl = og_image[0].url
    const itemTitle = title.rendered
    const dateFormatted = FormatDate(modified)

    return (
        <a className="list__newContainer" href={link} target="_blank">
            <img src={photoUrl} alt={itemTitle} />
            <div className="newContainer__text">
                <strong>{itemTitle}</strong>
                <span>{dateFormatted}</span>
            </div>
        </a>

    )
}

export default Noticia