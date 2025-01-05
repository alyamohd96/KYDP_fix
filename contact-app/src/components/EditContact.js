import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () =>  {

    const location = useLocation();
    const {id, name, email} = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const {updateContactHandler} = useContactsCrud();
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (newName === "" || newEmail === "" ) {
            alert("All the fields are mandatory!");
            return;
        }
        updateContactHandler({id, name: newName, email:newEmail});
        setNewName("");
        setNewEmail("");
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2>Edit Contact</h2> 
            <form className="ui form" onSubmit={update}>
                <h2>Add Contact</h2> 
                <div className="field">
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {newName}
                        onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value = {newEmail} 
                        onChange={(e) => setNewEmail(e.target.value)} />
                </div>
                <button className="ui label icon button">
                    <i className="address book icon" />
                        Update Contact
                </button>
            </form>
        </div>
    );


}

export default EditContact;