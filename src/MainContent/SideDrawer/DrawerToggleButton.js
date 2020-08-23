import React, { Fragment } from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => {
    return (
        <Fragment>
            <button className="toggle_button" onClick={props.click}>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
                <div className="toggle_button_line"></div>
            </button>
        </Fragment>
    )
}

export default DrawerToggleButton
