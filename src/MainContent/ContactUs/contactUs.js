import React, { Component, Fragment } from 'react'
import './ContactUs.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { Form } from 'react-bootstrap'
import { Typography, Input, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class contactUs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            message: '',
            gender: '',
            pincode: '',
            wardNumber: '',
            showFirstNameError: false,
            showPhoneError: false,
            showErrorPincode : false,
            submitForm :false

        }
    }

    changePhoneNumber = (event) => {
        let value = event.target.value;
        this.setState({
            phone: value
        }, () => {
            if (value.length === 10 || value.length === 11) {
                this.setState({
                    showPhoneError: false
                })
            }
            else {
                this.setState({
                    showPhoneError: true
                })
            }
        })
    }
    changePinCode=(event)=>{
        let value = event.target.value;
        this.setState({
            pincode : value 
        },()=>{
            if(value.length === 6 ){
                this.setState({
                    showErrorPincode:false
                })
            }
                else{
                    this.setState({
                        showErrorPincode:true
                    })
                }
            
        })
        
    }
    changeInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        if (!this.state.firstName) {
            if (name === 'firstName') {
                this.setState({
                    showFirstNameError: false
                })
            }
        }
       

        this.setState({
            [event.target.name]: value
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            submitForm : true
        })
        if (this.state.firstName === '' || this.state.phone === '' || this.state.showPhoneError || this.state.pincode === '' || this.state.showErrorPincode) {
            if(this.state.firstName === ''){
                this.setState({
                    showFirstNameError: true
                })
            }
            if(this.state.phone === ''){
                this.setState({
                    showPhoneError: true
                })
            }
            if(this.state.pincode === ''){
                this.setState({
                    showErrorPincode: true
                })
            }
            
        }
        else {
            this.finalAlert("Thank You.! We will contact you soon.");

        }
    }
    showAlert = (msg) => {
        const options = {
            message: msg,
            buttons: [
                {
                    label: 'Ok',
                    onClick: () => { }
                }
            ]
        };
        confirmAlert(options);


    }

    finalAlert = (msg) => {
        const options = {
            message: msg,
            buttons: [
                {
                    label: 'Ok',
                    onClick: () => {
                        this.setState({
                            showPhoneError: false,
                            showFirstNameError: false
                        }, () => {
                            window.location.reload(false)
                        })

                    }
                }
            ]
        };
        confirmAlert(options);
    }

    render() {
            const { firstName, lastName, address, phone, gender, message, pincode, showFirstNameError, showPhoneError, wardNumber,showErrorPincode,submitForm } = this.state;
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
                                        value={firstName}
                                        onChange={this.changeInput}
                                        error={showFirstNameError}
                                    />
                                    {showFirstNameError && <FormHelperText error className="w-100 text-left">Enter First Name</FormHelperText>}
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
                                        value={lastName}
                                        onChange={this.changeInput}

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
                                value={phone}
                                onChange={this.changePhoneNumber}
                                error={showPhoneError}
                            />
                            {submitForm && showPhoneError && <FormHelperText error className="w-100 text-left">Enter Valid Phone Number</FormHelperText>}

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
                                value={address}
                                onChange={this.changeInput}
                            />

                        </div>
                        <div className="row">
                            <div className="col">
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
                                        value={pincode}
                                        onChange={this.changePinCode}
                                        error={showErrorPincode}
                                    />
                                    {submitForm && showErrorPincode && <FormHelperText error className="w-100 text-left">Enter Valid Pin Code</FormHelperText>}
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Ward Number"
                                        placeholder="Enter Ward Number"
                                        variant="outlined"
                                        name="wardNumber"
                                        id="wardNumber"
                                        className="w-100"
                                        value={wardNumber}
                                        onChange={this.changeInput}
                                        type="number"

                                    />
                                </div>
                            </div>
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
                                    value={gender}
                                    onChange={this.changeInput}
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
                                value={message}
                                onChange={this.changeInput}
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
