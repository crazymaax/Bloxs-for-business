import "./style.scss"

import { useNews } from "../../providers/noticias"

const Noticia = ({ noticia }) => {

    const { FormatDate } = useNews()

    const { modified, title, link, yoast_head_json: { og_image } } = noticia

    const photoUrl = og_image[0].url
    const itemTitle = title.rendered
    const dateFormatted = FormatDate(modified)

    const handleNewClick= () => {
        location.href = link
    }

    return (
        <a className="list__container" href={link} target="_blank">
            <img src={photoUrl} alt={itemTitle} />
            <strong>{itemTitle}</strong>
            <span>{dateFormatted}</span>
        </a>

    )
}

export default Noticia