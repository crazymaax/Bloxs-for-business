import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Noticias from "../pages/Noticias"

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comunidade/noticias" component={Noticias} />
        </Switch>
    )
}

export default Routes;