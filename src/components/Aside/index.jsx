import "./style.scss"

import bloxsLogo from "../../assets/logo.svg";
import menuArrows from "../../assets/icons/arrow-left.svg"
import Home from "../../assets/icons/home.svg"

import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";

import { useHistory } from "react-router-dom";

const Aside = () => {

    const history = useHistory()

    return (
        <aside className="mainContent__aside">
            <div className="aside__header">

                <figure className="header__image">
                    <img
                        src={bloxsLogo}
                        alt="Logo da Bloxs"
                        onClick={() => history.push("/")}
                    />
                    <figcaption>Logo da Bloxs</figcaption>
                </figure>

                <img
                    src={menuArrows}
                    onClick={() => console.log("recolheu o menu")}
                    className="header__arrowImage"
                />
            </div>

            <nav className="aside__nav">
                <a href="#">
                    <img src={Home} />
                    <span>Home</span>
                </a>
                <Empreendedor />
                <Comunidade />
            </nav>

            <button className="aside__button">Submeter projeto</button>

        </aside>
    )
}

export default Aside;