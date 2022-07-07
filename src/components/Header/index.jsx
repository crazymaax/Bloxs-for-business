import "./style.scss"

import Bell from "../../assets/icons/bell.svg"
import { useAuth } from "../../providers/user"
import { useHistory } from "react-router-dom"

const Header = ({ PageName }) => {

    const { user } = useAuth()
    const { avatar, name } = user

    return (
        <header className="main__header">
            <h1>{PageName}</h1>
            <div className="header__user">
                <button className="user__notification">
                    <img src={Bell} alt="Ícone de notificações" />
                </button>

                <span>{name}</span>
                <div className="user__image">
                    <img src={avatar} alt={name} />
                </div>

            </div>
        </header>
    )
}

export default Header;