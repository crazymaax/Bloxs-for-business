import bloxsLogo from "../../assets/bloxsLogo.svg";
import Comunidade from "./Comunidade";
import Empreendedor from "./Empreendedor";

const Aside = () => {

    return (
        <aside>
            <img src={bloxsLogo} alt="Logo da Bloxs" />

            <nav>
                <a href="#">Home</a>
                <Empreendedor />
                <Comunidade />
            </nav>

            <button>Submeter projeto</button>

        </aside>
    )
}

export default Aside;