import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Noticias from "../pages/Comunidade/Noticias"
import Eventos from "../pages/Comunidade/Eventos";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comunidade/noticias" component={Noticias} />
            <Route exact path="/comunidade/eventos:slug" component={Eventos} />
        </Switch>
    )
}

export default Routes;