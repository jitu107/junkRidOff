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
                        <Link  className="textColorWhite" to="/" onClick={props.closeDrawer}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon className="textColorWhite" />
                            </ListItemIcon>
                            <ListItemText  > Home</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/services" onClick={props.closeDrawer}>
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentTurnedInOutlinedIcon className="textColorWhite" />
                            </ListItemIcon >
                            <ListItemText >Service </ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/contactUs" onClick={props.closeDrawer}>
                        <ListItem button>
                            <ListItemIcon>
                                <CallOutlinedIcon className="textColorWhite" />
                            </ListItemIcon >
                            <ListItemText>Contact Us</ListItemText>
                        </ListItem>
                        </Link>
                        <Link className="textColorWhite" to="/hireUs" onClick={props.closeDrawer}>
                        <ListItem button>
                            <ListItemIcon>
                                <WorkIcon className="textColorWhite" />
                            </ListItemIcon>
                             <ListItemText  >Hire Us</ListItemText>
                        </ListItem>
                        </Link>
                        <Link  className="textColorWhite" to="/about" onClick={props.closeDrawer}>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon className="textColorWhite" />
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
