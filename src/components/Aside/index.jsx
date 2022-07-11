import "./style.scss"

import bloxsLogo from "../../assets/logo.svg";
import menuArrows from "../../assets/icons/arrow-left.svg"
import Home from "../../assets/icons/home.svg"

import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Aside = () => {

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

    const changeAsideWidth = (e) => {
        const aside = e.parentElement.parentElement
        aside.classList.toggle("closed")
        
        const mainContent = document.querySelector(".pageContent__main")
        mainContent.classList.toggle("asideClosed")
    }

    return (
        <aside className="mainContent__aside">
            <div className="aside__header">

                <figure className="header__image">
                    <img
                        src={bloxsLogo}
                        alt="Logo da Bloxs"
                    />
                    <figcaption>Logo da Bloxs</figcaption>
                </figure>

                <img
                    src={menuArrows}
                    onClick={(e) => changeAsideWidth(e.target)}
                    className="header__arrowImage"
                />
            </div>

            <nav className="aside__nav">
                <li className="group__list">
                    <Link to="/home">
                        <img src={Home} id="home" />
                        <span>Home</span>
                    </Link>
                </li>
                <Empreendedor />
                <Comunidade />
            </nav>

            <button className="aside__button">Submeter projeto</button>

        </aside>
    )
}

export default Aside;