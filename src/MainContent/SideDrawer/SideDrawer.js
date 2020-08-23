import React, { Fragment } from 'react'
import './SideDrawer.css'
import logoImage from '../../asset/headerLogo.png';

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import contactUs from '../ContactUs/contactUs';

const SideDrawer = (props) => {
    let drawerClasses = ['side_drawer'];
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }
    return (
        <Fragment>
            <nav className={drawerClasses}>
                <div className="d-flex w-100 drawerHeader">
                    <div >
                        <img className="imgStyle" src={logoImage} alt="Logo"></img>
                    </div>

                    <div className="closeicon" onClick={props.closeDrawer}>
                        <ArrowBackIcon color="primary" fontSize="large" />
                    </div>
                </div>
                <div className='home_nav_list'>
                    <List component="nav" aria-label="main mailbox folders">
                        <Link  className="textColorWhite" to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText  > Home</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/services">
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentTurnedInOutlinedIcon color="primary" />
                            </ListItemIcon >
                            <ListItemText >Service </ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/contactUs">
                        <ListItem button>
                            <ListItemIcon>
                                <CallOutlinedIcon color="primary" />
                            </ListItemIcon >
                            <ListItemText>Contact Us</ListItemText>
                        </ListItem>
                        </Link>
                        <Link className="textColorWhite" to="/hireUs">
                        <ListItem button>
                            <ListItemIcon>
                                <WorkIcon color="primary" />
                            </ListItemIcon>
                             <ListItemText  >Hire Us</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/about">
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText>About Us</ListItemText>
                        </ListItem>
                        </Link>
                    </List>
                </div>

            </nav>
        </Fragment>
    )
}

export default SideDrawer
