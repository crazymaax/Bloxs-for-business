import Aside from "../../../components/Aside";
import EmConstrucao from "../../../components/EmConstrucao";
import Header from "../../../components/Header";

const Empresas = () => {

    const slug = ":empresas" // Enquanto não possuir slug, foi definido um temporariamente.

    return (
        <>
            <div className="pageContent">
                <Aside />
                <div className="pageContent__main">
                    <div>
                        <Header PageName={"Empresas"} />
                        <main>
                            <EmConstrucao slug={slug} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Empresas;