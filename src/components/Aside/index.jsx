import "./style.scss"

import bloxsLogo from "../../assets/logo.svg";
import menuArrows from "../../assets/icons/arrow-left.svg"
import Home from "../../assets/icons/home.svg"

import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Aside = () => {

    const history = useHistory()

    const location = window.location.pathname

    useEffect(() => {
        const giveActiveClassName = () => {
            const positionOfPathName = location.lastIndexOf("/")
            const name = location.slice(positionOfPathName + 1, location.length) // retorna o nome do caminho da página => +1 para retirar a "/" e location.length para ir até o final. 

            const activeAnchor = document.getElementById(name)

            const listParent = activeAnchor.parentElement

            if (listParent.matches("div")) { // Se o pai for uma div, remova todas as activePage
                for (let i = 0; i < listParent.children.length; i++) {
                    listParent.children[i].classList.remove("activePage")
                }
            }

            if (listParent.parentElement.matches("details")) { //  Verifica se o pai é <details> e aplica a classe em <summary>

                listParent.parentElement.children[0].classList.add("activePage")
            }

            activeAnchor.classList.add("activePage")
        }

        giveActiveClassName()
    }, [location])

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