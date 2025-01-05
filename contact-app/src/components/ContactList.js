import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
    const {contacts, retrieveContacts, searchTerm, searchResults, searchHandler} = useContactsCrud();

    const renderContactList = (searchTerm.length < 1 ? contacts: searchResults).map((contact) => {
        console.log("in render Contact List");
        return (
            <ContactCard 
                contact={contact} 
                key={contact.id}/> ); 
        }
    );

    const onUserSearch = (e) => {
        searchHandler(e.target.value);
    };

    useEffect(() => {
        retrieveContacts();
    }, [])

    return (
        <div className="main">
            <div className="header" style={{ marginTop: "5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Contact List</h2>
                <Link to="/add">
                    <button className="ui basic button">
                        <i className="plus square icon"></i>
                        Add Contact
                    </button>
                </Link>
            </div>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" placeholder="Search contacts" className="prompt" value={searchTerm} onChange={(e) => onUserSearch(e)}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">                        
                {renderContactList.length > 0 
                    ? renderContactList
                    : "No contacts available" }           
            </div>
        </div>
    );
};

export default ContactList