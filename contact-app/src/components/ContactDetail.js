import React from "react";
import smile from "../images/smile.png"
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={smile} alt="user" />
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
            </div>
            <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue center">
                            Back to Contact List
                        </button>
                    </Link>
                </div>
        </div>
    );
}

export default ContactDetail;