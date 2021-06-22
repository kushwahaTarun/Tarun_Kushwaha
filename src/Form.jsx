import React from "react";
import TextField from '@material-ui/core/TextField';

const Form = () => {
    return(
        <>
            <div className = "center_div">
                <h2>Create Account</h2>
                <div className = "txtField">
                <TextField id="standard-basic" label="Your Name" /><br/><br/>
                <TextField id="standard-basic" label="Your Father Name" /><br/><br/>
                <TextField id="standard-basic" label="Your Mother Name" /><br/><br/>
                <TextField id="standard-basic" label="Your E-mail" /><br/><br/>
                <TextField id="standard-basic" type = "password" label="Password" /><br/><br/>
                <TextField id="standard-basic" type = "password" label="Repeat Your Password" /><br/><br/>
                <TextField id="standard-basic" type = "number" label="Contact" /><br/><br/>
                </div>
            </div>
        </>
    )
}

export default Form;
