import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Eventos from "../pages/Comunidade/Eventos";
import Noticias from "../pages/Comunidade/Noticias"
import Servicos from "../pages/Comunidade/Servicos";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comunidade/eventos:slug" component={Eventos} />
            <Route exact path="/comunidade/noticias" component={Noticias} />
            <Route exact path="/comunidade/servicos" component={Servicos} />
        </Switch>
    )
}

export default Routes;