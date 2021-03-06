import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from "../views/HomeView";
import OtherView from "../views/OtherView";
import ContactView from "../views/ContactView";
import BlogView from "../views/BlogView";
import LoginView from "../views/LoginView";
import LoggedInView from "../views/LoggedInView";

export default function Routing(props){
    return(
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.otherView} element={<OtherView/>}/>
                <Route path={RoutingPath.blogView} element={<BlogView/>}/>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
                <Route path={RoutingPath.loginView} element={<LoginView/>}/>
                <Route path={RoutingPath.loggedInView} element={<LoggedInView/>}/>
            </Routes>
        </BrowserRouter>
    )
}