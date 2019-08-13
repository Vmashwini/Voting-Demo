import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./App";
import ModuleOne from "./VotingMain"

class Routes extends React.Component {
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/moduleOne" component={ModuleOne} />
                </Router>
            </div>
        )
    }
}

export default Routes