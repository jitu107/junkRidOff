import React, { Component, Fragment } from 'react'
import './ContactUs.css'
import { Form } from 'react-bootstrap'
import { Typography } from '@material-ui/core'

export class contactUs extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submitForm = (params) => {
        console.log("object")
    }

    render() {
        return (
            <Fragment>
                <div className="wrap-contact100 contactus">
                    <div className="contact100-form-title">
                        <span className="contact100-form-title-1">
                            <Typography variant="h4" color="primary" align="center">Contact Us</Typography>
                        </span>
                        <span className="contact100-form-title-2">
                            <Typography variant="h6" color="primary" align="center">Feel free to drop us a line below!</Typography>
                        </span>
                    </div>
                    <form className="contact100-form validate_form ">
                        <div className="formName formInput">
                            <div><Typography variant="body1" >Name :</Typography></div>
                            <div><input className="input100" type="text" id="name" name="name" placeholder="Enter full name" required /></div>
                        </div>
                        <div className="formPhone formInput">
                            <div><Typography variant="body1" >Phone :</Typography></div>
                            <div><input className="input100" type="text" name="phone" id="phone" placeholder="Enter phone number" required /></div>
                        </div>
                        <div className="formAddress formInput">
                            <div><Typography variant="body1" >Address :</Typography></div>
                            <div><input className="input100" type="text" id="address" name="address" placeholder="Enter valid address" /></div>
                        </div>
                        <div className="formMessage formInput">
                            <div><Typography variant="body1" >Message :</Typography></div>
                            <div><textarea className="input100" id="message" name="message" placeholder="Your Comment..."></textarea></div>
                        </div>
                        <div className="container-contact100-form-btn">
                            <button className="btn btn-primary" onClick={this.submitForm}>
                                <span>
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </Fragment >
        )
    }
}

export default contactUs
