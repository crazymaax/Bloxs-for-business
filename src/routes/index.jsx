import { Route, Switch } from "react-router-dom";

import Noticias from "../pages/Noticias"

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/noticias" component={Noticias} />
        </Switch>
    )
}

export default Routes;