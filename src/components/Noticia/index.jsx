import "./style.scss"

import { useNews } from "../../providers/noticias"

const Noticia = ({ noticia }) => {

    const { FormatDate } = useNews()

    const { modified, title, yoast_head_json: { og_image } } = noticia

    const photoUrl = og_image[0].url
    const itemTitle = title.rendered
    const dateFormatted = FormatDate(modified)

    return (
        <div className="list__container">
            <img src={photoUrl} alt={itemTitle} />
            <strong>{itemTitle}</strong>
            <span>{dateFormatted}</span>
        </div>

    )
}

export default Noticia