import Aside from "../../../components/Aside";
import EmConstrucao from "../../../components/EmConstrucao";
import Header from "../../../components/Header";

const Dashboard = () => {

    const slug = ":dashboard" // Enquanto não possuir slug, foi definido um temporariamente.

    return (
        <>
            <div className="pageContent">
                <Aside />
                <div className="pageContent__main" style={{margin: "0px 0px 0px 230px"}}>

                    <Header PageName={"Dashboard"} />
                    <main>
                        <EmConstrucao slug={slug}/>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard;