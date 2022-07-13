import Aside from "../../../components/Aside";
import EmConstrucao from "../../../components/EmConstrucao";
import Header from "../../../components/Header";

const Academy = () => {

    const slug = ":academy"; // Enquanto não possuir slug, foi definido um temporariamente.

    return (
        <>
            <div className="pageContent">
                <Aside />
                <div className="pageContent__main">
                    <div>
                        <Header PageName={"Academy"} />
                        <main>
                            <EmConstrucao slug={slug} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Academy;