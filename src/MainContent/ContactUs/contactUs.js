import React, { Component, Fragment } from 'react'
import './ContactUs.css'
import { Form } from 'react-bootstrap'
import { Typography, Input , TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class contactUs extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submitForm = (event) => {
        event.preventDefault();
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
                    <form className="contactusForm need-validation" noValidate>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                <TextField
                                id="outlined-multiline-static"
                                label="First Name"
                                placeholder="Enter first Name"
                                variant="outlined"
                                name="firstName"
                                id="firstName"
                                className="w-100"
                                />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                <TextField
                                id="outlined-multiline-static"
                                label="Last Name"
                                placeholder="Enter Last Name"
                                variant="outlined"
                                name="lastName"
                                id="lastName"
                                className="w-100"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                        <TextField
                                id="outlined-multiline-static"
                                label="Enter Phone Number"
                                placeholder="Enter your contact Number"
                                variant="outlined"
                                name="phone"
                                id="phone"
                                className="w-100"
                                type="number"
                                />
                                
                        </div>
                        <div className="form-group">
                            
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Address"
                                multiline
                                placeholder="Enter full Address"
                                variant="outlined"
                                name="address"
                                id="address"
                                className="w-100"
                                />
                            
                        </div>
                        <div className="form-group">
                         <TextField
                                id="outlined-multiline-static"
                                label="Enter Pin Code"
                                placeholder="Enter your Area Pin code"
                                variant="outlined"
                                name="pincode"
                                id="pincode"
                                className="w-100"
                                type="number"
                                />
                                
                        </div>
                        <div className="form-group">
                        <FormControl variant="outlined" className="w-100">
                            <InputLabel id="SelectGender">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Gender"
                                    name="gender" 
                                    id="gender"
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="form-group">
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Message"
                                multiline
                                placeholder="Leave your message"
                                variant="outlined"
                                name="message"
                                id="message"
                                className="w-100"
                                />
                                
                        </div>
                        <div className="w-100 text-center pt-2">
                        <button type="submit" className="btn btn-primary text-center " onClick={this.submitForm}>Submit</button>
                        </div>
                    </form>
                   
                </div>
            </Fragment >
        )
    }
}

export default contactUs
