import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useLocation, useNavigate } from "react-router-dom";


const DeleteContact = (props) => {
    // let history = useHistory();
    //const {id, name, email} = props.location.state.contact;

    const location = useLocation();
    const {id, name, email} = location.state.contact;
    const {removeContactHandler} = useContactsCrud();
    const navigate = useNavigate();

    const deleteContactHandler = (id) => {
        removeContactHandler(id);
        navigate("/");
    }

    // const deleteContactHandler = (id) => {
    //         props.deleteContact(id);
    //         history.push("/");
    // };

    return(
        <div className="main">
            <h2>Delete contact</h2>
            <div>
                <h3>Are you sure you want to delete this contact?</h3>
            </div>
            <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
            </div>
            <div className="center-div">
                <button className="negative ui button" fdprocessedid="0sg7bi" onClick={() => deleteContactHandler(id)}>Delete</button>
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default DeleteContact;