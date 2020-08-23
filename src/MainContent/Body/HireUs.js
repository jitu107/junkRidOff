import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const HireUs = () => {
    return (
        <Fragment>
            <div className="text-center">
                <Typography variant="h4" display="block" color="primary"> Why Hire Us ...</Typography>
                <div className="mx-1 mt-1">
                    <Typography align="justify" display="block" >
                        As we have the concrete mission and objective to serve you the best and to develop eco-friendly solutions and services at your door step. <br />
                        However, we have also been focussing on the following points for you and your family needs:-<br />
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem >
                            <ListItemIcon>
                                <SmartphoneOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText >Easy to reach us: whatsapp, sms, phone call and website</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentTurnedInOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText> Call for free estimation based on your needs </ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <AirportShuttleOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText >Door step smooth and hygienic services</ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <CallOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText >Listening you first and always.</ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <AccountBalanceWalletOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText >Offering the customisable servises</ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <FavoriteOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText > Ensuring the premium, eco-friendly and hygienic qualities in your reasonable expense.</ListItemText>
                        </ListItem>
                    </List>
                </div>
            </div>
        </Fragment>
    )
}

export default HireUs
