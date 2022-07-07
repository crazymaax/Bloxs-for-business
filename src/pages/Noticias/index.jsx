import Aside from "../../components/Aside/index"
import Header from "../../components/Header"

const Noticias = () => {

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