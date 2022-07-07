import Aside from "../../components/Aside/index"
import Header from "../../components/Header"

import { useAuth } from "../../providers/user"
import { useHistory } from "react-router-dom"

const Noticias = () => {

    const { user } = useAuth()
    const history = useHistory()

    if (!user) {
        history.push("/")
    }

    return (
        <div className="pageContent">
            <Aside />
            <div className="pageContent__main">

                <Header PageName={"Notícias"} />
                <main>
                    noticias
                </main>
            </div>
        </div>
    )
}

export default Noticias