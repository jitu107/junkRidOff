import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography'

export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="text-center  mx-1">
                    <Typography align="center" display="block" variant="h4" color="primary"> About Us</Typography>
                    <div className="mt-1">
                        <Typography align="justify" display="block" >
                            <b>Junk Rid off</b> solution and services was newly established based in the joy of city Kolkata,
                             West Bengal in 2020 during the pendamic situation by four friends.<br/>
                        
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The idea was inherited from the global influences that how to keep our societies clean, hygienic and greenery.
                            However, the biggest reason to build this firm was to clean out the massive level of junks and solid waste materials on daily basis from the various  sources, 
                            generated by us, depending upon to maintain our individual life style and the market requirements, be it anywhere or at any premises.
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People should know about the present scenario of our nation that according to Forbes research and Ministry of Environment and Climate Change,
                            India produces 62 million tons of solid waste per year. However, 75%-80% waste is collected by Govt and local agencies and 0nly 22%-28% of that waste is barely processed and treated.
                            Hence, we noticed after doing some research then decided to get into this new innovative business model for reforming our nation by giving them zero or optimum waste cleaning, junk removal and other relevant solution and services maintaining with hygienic, eco-friendly environmental practices for our better greenery future charging with a nominal and affordable charges. This offordabke charges keep promoting us to run these services by the help our junk Rid off warriers to protect you and nature completely.
                            <br/>
                        </Typography>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About