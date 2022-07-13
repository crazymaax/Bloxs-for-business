import Aside from "../../../components/Aside";
import EmConstrucao from "../../../components/EmConstrucao";
import Header from "../../../components/Header";

const Forum = () => {

    const slug = ":forum"; // Enquanto não possuir slug, foi definido um temporariamente.

    return (
        <>
            <div className="pageContent">
                <Aside />
                <div className="pageContent__main">
                    <div>
                        <Header PageName={"Fórum"} />
                        <main>
                            <EmConstrucao slug={slug} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forum;