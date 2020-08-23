import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousal from './Carousal'
import About from './About'
import HireUs from './HireUs'
import Services from './Services'
import contactUs from '../ContactUs/contactUs';

export class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Carousal />
                <Switch>

                    <Route path="/" exact component={Services} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contactUs" exact component={contactUs}/>
                    <Route path="/about" exact component={About} />
                    <Route path="/hireUs" exact component={HireUs} />

                </Switch>
            </Fragment>
        )
    }
}

export default Body
