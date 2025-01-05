import React from "react";
import generic_user from "../images/generic-user-icon.jpg"
import { Link } from "react-router-dom";

const ContactCard = (props) => {

    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={generic_user} alt="user profile img" />
            <div className="content">
            <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </Link>
            </div>
            <div>
                <Link 
                    to={`/delete/${id}`}
                    state={{contact: props.contact}}>
                    <i 
                        className="trash alternate outline icon"
                        style={ {color:"red", marginTop:"7px", marginLeft: "10px"} }
                        // onClick={()=>props.clickHandler(id)} 
                        >
                    </i>
                </Link>
                <Link 
                    to={`/edit/${id}`}
                    state={{contact: props.contact}}>                    
                    <i 
                        className="edit alternate outline icon"
                        style={ {color:"blue", marginTop:"7px"} }
                        // onClick={()=>props.clickHandler(id)} 
                        >
                    </i>
                </Link>
            </div>
        </div>
        );
}

export default ContactCard;