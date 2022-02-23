import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import About from "../about/about";
import Main from '../main/main'
import Portfolio from "../portfolio/portfolio";
import Error from '../error/error'
import Bookings from "../bookings/bookings";
  
const RouterSwitch = () =>{
    return(
        <Switch>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/gallery">
                <Portfolio />
            </Route>
            <Route exact path="/bookings">
                <Bookings />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/">
                <Error />
            </Route>
        </Switch>
    )
}
export default RouterSwitch
