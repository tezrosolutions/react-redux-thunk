import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home/Home';
import Authorized from './components/Authorized/Authorized';


class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/hubspot-ext' component={Home} />
                    <Route path='/hubspot-ext/authorized' component={Authorized} />
                </Switch>
            </Router>

        );
    }
}


export default Main;
