import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Empregador/Dashboard";
import Empresas from "../pages/Empregador/Empresas";
import Projetos from "../pages/Empregador/Projetos";
import Chat from "../pages/Empregador/Chat";
import Proventos from "../pages/Empregador/Proventos";
import Academy from "../pages/Comunidade/Academy";
import Eventos from "../pages/Comunidade/Eventos";
import Noticias from "../pages/Comunidade/Noticias"
import Servicos from "../pages/Comunidade/Servicos";
import Forum from "../pages/Comunidade/Forum";
import Indicacoes from "../pages/Empregador/Inidicacoes";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Login} />

            <Route exact path="/empregador/dashboard" component={Dashboard} />
            <Route exact path="/empregador/empresas" component={Empresas} />
            <Route exact path="/empregador/projetos:slug" component={Projetos} />
            <Route exact path="/empregador/chat" component={Chat} />
            <Route exact path="/empregador/proventos" component={Proventos} />
            <Route exact path="/empregador/indicacoes" component={Indicacoes} />

            <Route exact path="/comunidade/forum" component={Forum} />
            <Route exact path="/comunidade/academy" component={Academy} />
            <Route exact path="/comunidade/eventos:slug" component={Eventos} />
            <Route exact path="/comunidade/noticias" component={Noticias} />
            <Route exact path="/comunidade/servicos" component={Servicos} />
        </Switch>
    )
}

export default Routes;