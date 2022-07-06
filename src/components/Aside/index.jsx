import "./style.scss"
import bloxsLogo from "../../assets/bloxsLogo.svg";

import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";

const Aside = () => {

    return (
        <aside className="mainContent__aside">

            <figure className="aside__image">
                <img src={bloxsLogo} alt="Logo da Bloxs" />
                <figcaption>Logo da Bloxs</figcaption>
            </figure>

            <nav className="aside__nav">
                <a href="#">Home</a>
                <Empreendedor />
                <Comunidade />
            </nav>

            <button className="aside__button">Submeter projeto</button>

        </aside>
    )
}

export default Aside;