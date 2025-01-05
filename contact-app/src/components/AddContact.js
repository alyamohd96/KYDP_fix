import React from "react";
import { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const { addContactHandler } = useContactsCrud();
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "" ) {
            alert("All the fields are mandatory!");
            return;
        }
        addContactHandler({name, email});
        setName("");
        setEmail("");
        navigate("/");
    };

    
    return (
        <div className="ui main">
            <h2>Add Contact</h2> 
            <form className="ui form" onSubmit={add}>
                <h2>Add Contact</h2> 
                <div className="field">
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value = {email} 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/**<button className="ui button blue">Add</button>*/}
                <button className="ui label icon button" style={ {marginTop: "2rem"} }>
                    <i className="address book icon" />
                        Add Contact
                </button>
            </form>
        </div>
    );

}

export default AddContact;