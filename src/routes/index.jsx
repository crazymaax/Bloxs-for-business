import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Academy from "../pages/Comunidade/Academy";
import Eventos from "../pages/Comunidade/Eventos";
import Noticias from "../pages/Comunidade/Noticias"
import Servicos from "../pages/Comunidade/Servicos";
import Forum from "../pages/Comunidade/Forum";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comunidade/forum" component={Forum} />
            <Route exact path="/comunidade/academy" component={Academy} />
            <Route exact path="/comunidade/eventos:slug" component={Eventos} />
            <Route exact path="/comunidade/noticias" component={Noticias} />
            <Route exact path="/comunidade/servicos" component={Servicos} />
        </Switch>
    )
}

export default Routes;