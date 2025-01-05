import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';
import {v4 as uuid} from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditContact from './EditContact';
import { ContactsCrudContextProvider } from '../context/ContactsCrudContext';
import api from "../api/contacts"

function App() {

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
          {/** Route for Add Contact component*/}
          <Route 
            path="/add" 
            element={<AddContact />}
          />
          
          {/** Route for Contact List component*/}
          <Route 
            path="/" 
            exact 
            element={<ContactList />}
          />

           {/** Route for Edit Contact component*/}
           <Route 
            path="/edit/:id"
            element = {<EditContact />}
          />

          {/** Route for Contact Detail component*/}
          <Route 
            path="/contact/:id" 
            exact 
            element={ContactDetail} 
          />

          {/** Route for Delete page*/}
          <Route 
            path="/delete/:id"
            exact
            element={<DeleteContact />}
          />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
