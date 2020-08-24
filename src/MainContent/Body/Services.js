import React, { Component, Fragment } from 'react'
import Housekeeping from '../../asset/houseKeeping.jpeg'
import GarbagePickup from '../../asset/garbagePickup.jpeg'
import carCleaning from '../../asset/carCleaning.jpeg'
import sanitization from '../../asset/sanitization.jpeg'
import './Services.css';





import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import MessageIcon from '@material-ui/icons/Message';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

export class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const imgStyle = {
            height: "175px",
            alignItems: "center"
        }
        return (
            <Fragment>
                <Typography variant="h4" display="block" color="primary"> Our Major Services</Typography>
                <div className="d-flex flex-column bd-highlight mb-3 mt-3 ">
                    <div className="m-2">
                        <Card >
                            <CardActionArea  className="text-center">
                                <img style={imgStyle} src={Housekeeping}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Housekeeping Services
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="div" className="paragraphContent">
                                        We do provide the housekeeping service in the following areas given below
                                            <ol>
                                            <li>Carpet cleaning</li>
                                            <li>Toilet cleaning</li>
                                            <li>Indoor cleaning services</li>
                                            <li>Outdoor cleaning services</li>
                                            <li>Floor polishing</li>
                                            <li>Water Tank cleaning</li>
                                        </ol>
                                        We cover alomost all areas for your premises except some specific areas which can be explained after getting the detailed overview of that premises.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="m-0 p-0">
                                <Button size="small" color="primary" className="m-0 p-0">
                                    <WhatsappShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className=" m-1"> <WhatsappIcon size={26} round={true} /></WhatsappShareButton>
                                    <FacebookShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} > <FacebookIcon size={26} round={true} /></FacebookShareButton>
                                    <TwitterShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className="mx-1"> <TwitterIcon size={26} round={true} /></TwitterShareButton>

                                </Button>
                                <Button size="small" color="primary">
                                    <Typography variant="caption" >Appointment By:-</Typography> <a href="tel:9073737378"> <CallIcon fontSize="default" color="primary" className="mx-1" /></a>  <a href="sms:9073737378?body=Hi, I need service regarding HouseKeeping " className="ml-2"><MessageIcon fontSize="default" color="primary" /> </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="m-2">
                        <Card >
                            <CardActionArea className="text-center">
                                <img style={imgStyle} src={GarbagePickup}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Garbage pickup Services
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="paragraphContent">
                                        This service has launched at very first time in Kolkata which is very important for our societies to be hygienic and fresh.<br />
                                        It's a door step servises for our Kolkata based customer to collect their garbage haul it away from your premises at the right places.
                                        Customers can book this service via call, sms, whatsapp and through contact us page.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="m-0 p-0">
                                <Button size="small" color="primary" className="m-0 p-0">
                                    <WhatsappShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className=" m-1"> <WhatsappIcon size={26} round={true} /></WhatsappShareButton>
                                    <FacebookShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} > <FacebookIcon size={26} round={true} /></FacebookShareButton>
                                    <TwitterShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className="mx-1"> <TwitterIcon size={26} round={true} /></TwitterShareButton>

                                </Button>
                                <Button size="small" color="primary">
                                    <Typography variant="caption">Appointment By:-</Typography> <a href="tel:9073737378"> <CallIcon fontSize="default" color="primary" className="mx-1" /></a>  <a href="sms:9073737378?body=Hi, I need service regarding Garbage pickup " className="ml-2"><MessageIcon fontSize="default" color="primary" /> </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="m-2">
                        <Card >
                            <CardActionArea className="text-center">
                                <img style={imgStyle} src={GarbagePickup}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Door step Junk removal Services
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="paragraphContent">
                                        This service has even a new innovative solutions for our people who has the limitted space in their premises.
                                        However they can't be disposed off their junk items at the right places just because of time availability and lots of other factors too in there around.<br />
                                        Hence we as a company stand and seeking out to serve you and clean out your junk from your doorstep by giving us a call, sms, whatsapp and through contact us page
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="m-0 p-0">
                                <Button size="small" color="primary" className="m-0 p-0">
                                    <WhatsappShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className=" m-1"> <WhatsappIcon size={26} round={true} /></WhatsappShareButton>
                                    <FacebookShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} > <FacebookIcon size={26} round={true} /></FacebookShareButton>
                                    <TwitterShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className="mx-1"> <TwitterIcon size={26} round={true} /></TwitterShareButton>

                                </Button>
                                <Button size="small" color="primary">
                                    <Typography variant="caption">Appointment By:-</Typography> <a href="tel:9073737378"> <CallIcon fontSize="default" color="primary" className="mx-1" /></a>  <a href="sms:9073737378?body=Hi, I need service regarding Door step Junk removal " className="ml-2"><MessageIcon fontSize="default" color="primary" /> </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="m-2">
                        <Card >
                            <CardActionArea className="text-center">
                                <img style={imgStyle} src={carCleaning}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Car-Bike washing Services
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="paragraphContent">
                                        These services has given more comfortable for our Kolkata based people and can take a high quality of cleaning services at their doorstep in affordable rates based on our customisable plans as per need.<br />
                                        This service is available for any class of people those who have their vehicles.<br />
                                        We do provide the complete cleaning services for car and bike for exterior - interior cleaning services too as per our customer's need.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="m-0 p-0">
                                <Button size="small" color="primary" className="m-0 p-0">
                                    <WhatsappShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className=" m-1"> <WhatsappIcon size={26} round={true} /></WhatsappShareButton>
                                    <FacebookShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} > <FacebookIcon size={26} round={true} /></FacebookShareButton>
                                    <TwitterShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className="mx-1"> <TwitterIcon size={26} round={true} /></TwitterShareButton>

                                </Button>
                                <Button size="small" color="primary">
                                    <Typography variant="caption">Appointment By:-</Typography> <a href="tel:9073737378"> <CallIcon fontSize="default" color="primary" className="mx-1" /></a>  <a href="sms:9073737378?body=Hi, I need service regarding Car-Bike washing " className="ml-2"><MessageIcon fontSize="default" color="primary" /> </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="m-2">
                        <Card >
                            <CardActionArea className="text-center">
                                <img style={imgStyle} src={sanitization}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Sanitization servises
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="paragraphContent">
                                        This service has even a new innovative solutions for our people who has the limitted space in their premises.
                                        Hence we as a company stand and seeking out to serve you and clean out your junk from your doorstep by giving us a call, sms, whatsapp and through contact us page
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="m-0 p-0">
                                <Button size="small" color="primary" className="m-0 p-0">
                                    <WhatsappShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className=" m-1"> <WhatsappIcon size={26} round={true} /></WhatsappShareButton>
                                    <FacebookShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} > <FacebookIcon size={26} round={true} /></FacebookShareButton>
                                    <TwitterShareButton url={`https://master.d2vitjr6z78s4g.amplifyapp.com/`} className="mx-1"> <TwitterIcon size={26} round={true} /></TwitterShareButton>

                                </Button>
                                <Button size="small" color="primary">
                                    <Typography variant="caption">Appointment By:-</Typography> <a href="tel:9073737378"> <CallIcon fontSize="default" color="primary" className="mx-1" /></a>  <a href="sms:9073737378?body=Hi, I need service regarding Sanitization " className="ml-2"><MessageIcon fontSize="default" color="primary" /> </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Services
