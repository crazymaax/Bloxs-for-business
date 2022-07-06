import "./style.scss"
import bloxsLogo from "../../assets/bloxsLogo.svg";

import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";
import { useHistory } from "react-router-dom";

const Aside = () => {

    const history = useHistory()

    return (
        <aside className="mainContent__aside">

            <figure className="aside__image">
                <img src={bloxsLogo} alt="Logo da Bloxs" onClick={() => history.push("/")}/>
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