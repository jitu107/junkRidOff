import React, { Fragment } from 'react';
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from  '../../asset/headerLogo.png'
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
    return (
        <Fragment>
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toogle_button">
                        <DrawerToggleButton click={props.drawerClickHanler}/>
                    </div>
                    <div className="toolbar_logo">
                        <img className="imgStyle" src={logo} alt="Logo"/>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/">Contact Us </Link></li>
                            <li><Link to="/hireUs">Why Hire Us</Link></li>
                            <li><Link to="/about">About Us </Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default Toolbar
