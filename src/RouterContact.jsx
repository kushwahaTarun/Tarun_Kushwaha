import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';

const RouterContact = () => {
    return (
        <>
            <div className="container w-75 mt-5 py-5"  >
                <div className="row contactService">
                    <h1 className="text-center text-capitalize display-5 mb-4 text-warning">Contact us for any Suggestions or queries</h1>

                    <div className="col-md-4 col-12 py-3 text-center" >
                        <button type="button" className="btn btn-lg btn-outline-success" data-toggle="tooltip" data-placement="bottom" title="Contact Us">
                            contact us +91 <PhoneTwoToneIcon /></button>
                    </div>
                    <div className="col-md-4 col-12  py-3 text-center" >
                        <button type="button" className="btn btn-lg btn-outline-primary" data-toggle="tooltip" data-placement="bottom" title="Contact Us at facebook">
                            contact us on <FacebookIcon /></button>
                    </div>
                    <div className="col-md-4 col-12  py-3 text-center" >
                        <button type="button" className="btn btn-lg btn-outline-danger" data-toggle="tooltip" data-placement="bottom" title="contact Us by e-mail">
                            E-mail Us <MailOutlineTwoToneIcon /></button>
                    </div>

                </div>
            </div>

            <footer className="container-fluid bg-dark copyright">
                <h6 className="text-capitalize text-center text-light py-1">© Copyright Agency and contributors 2021. site maintained by - Tarun kushwaha</h6>
            </footer>

        </>
    );
}

export default RouterContact;