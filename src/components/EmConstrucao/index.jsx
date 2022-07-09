import { useEffect, useState } from "react";
import "./style.scss"

import UnderConstruction from "../../assets/icons/under-construction.svg"

const EmConstrucao = ({ slug }) => {

    const [pageName, setPageName] = useState()

    useEffect(() => {
        const slugFormater = () => {
            const newSlug = slug.slice(1, slug.length).replaceAll("_", " ")
            const newSlugFormatted = newSlug.charAt(0).toUpperCase() + newSlug.slice(1);

            setPageName(newSlugFormatted)
        }

        slugFormater()

    }, [slug])

    return (
        <div className="main__underConstructionContainer">

            <h2>{pageName}</h2>

            <div className="underConstructionContainer__constructionDiv">
                <img src={UnderConstruction} alt="Em construção" className="constructionDiv__image" />
                <h3>Em construção</h3>
                <p>Estamos em constante crescimento e em breve está página ficará disponível, por favor volte novamente em breve. </p>
            </div>
        </div>
    )
}

export default EmConstrucao;