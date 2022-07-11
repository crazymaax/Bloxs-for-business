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
                <div className="pageContent__main" style={{margin: "0px 0px 0px 230px"}}>

                    <Header PageName={"Eventos"} />
                    <main>
                        <EmConstrucao slug={slug}/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Eventos;