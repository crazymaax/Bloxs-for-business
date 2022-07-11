import { useParams } from "react-router-dom";
import Aside from "../../../components/Aside";
import EmConstrucao from "../../../components/EmConstrucao";
import Header from "../../../components/Header";

const Eventos = () => {

    const { slug } = useParams()

    return (
        <>
            <div className="pageContent">
                <Aside />
                <div className="pageContent__main">
                    <div>
                        <Header PageName={"Serviços"} />
                        <main>
                            <EmConstrucao slug={slug} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eventos;