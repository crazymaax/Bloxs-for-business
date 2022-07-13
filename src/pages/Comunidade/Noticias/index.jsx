import Aside from "../../../components/Aside/index";
import Header from "../../../components/Header";
import Categoria from "../../../components/Categoria";

import { useAuth } from "../../../providers/user";
import { useHistory } from "react-router-dom";

const Noticias = () => {

    const { user } = useAuth();
    const history = useHistory();

    if (!user) {
        history.push("/");
    }

    return (
        <div className="pageContent">
            <Aside />
            <div className="pageContent__main">
                <div>
                    <Header PageName={"Notícias"} />
                    <main>
                        <Categoria />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Noticias;