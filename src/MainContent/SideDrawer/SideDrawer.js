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
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                            <Link to="/"> <ListItemText className="textColorWhite" > Home</ListItemText></Link>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentTurnedInOutlinedIcon color="primary" />
                            </ListItemIcon >
                            <Link to="/services"> <ListItemText className="textColorWhite">Service </ListItemText></Link>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CallOutlinedIcon color="primary" />
                            </ListItemIcon >
                            <Link to="/"><ListItemText className="textColorWhite">Contact Us</ListItemText></Link>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <WorkIcon color="primary" />
                            </ListItemIcon>
                            <Link className="textColorWhite" to="/hireUs"> <ListItemText  >Hire Us</ListItemText></Link>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon color="primary" />
                            </ListItemIcon>
                            <Link to="/about"><ListItemText className="textColorWhite">About Us</ListItemText></Link>
                        </ListItem>
                    </List>
                </div>

            </nav>
        </Fragment>
    )
}

export default SideDrawer
