import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import About from "../about/about";
import Main from '../main/main'
import Portfolio from "../portfolio/portfolio";
  
const RouterSwitch = () =>{
    return(
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/gallery">
                <Portfolio />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    )
}
export default RouterSwitch
