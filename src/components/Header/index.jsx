import { useState, useEffect } from "react"
import "./style.scss"

import Bell from "../../assets/icons/bell.svg"

import { FaUserAlt } from "react-icons/fa"
import { ImExit } from "react-icons/im"
import { BsFillGearFill } from "react-icons/bs"

import { useAuth } from "../../providers/user"

const Header = ({ PageName }) => {

    const { user, setUser } = useAuth()
    const { avatar, name } = user

    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".user__modalConfiguration")) {
                setIsOpenModal(false)
            } else {
                setIsOpenModal(true)
            }
        })

    }, [isOpenModal])

    return (
        <header className="main__header">
            <h1>{PageName}</h1>
            <div className="header__user">
                <button className="user__notification">
                    <img src={Bell} alt="Ícone de notificações" />
                </button>
                <div className="user__modalConfiguration" >
                    <FaUserAlt size={20} color={"#414368"} />

                    {isOpenModal && (
                        <div className="user__modal">
                            <button>
                                <BsFillGearFill color={"#414368"} />
                                Configurações
                            </button>
                            <button onClick={() => setUser()}>
                                <ImExit color={"#414368"} />
                                Sair
                            </button>
                        </div>
                    )}

                </div>

                <span>{name}</span>
                <div className="user__image" >
                    <img src={avatar} alt={name} />
                </div>

            </div>
        </header>
    )
}

export default Header;