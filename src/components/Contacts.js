import React from 'react';
import Contact from './Contact'

const Contacts = (props) => (
  <div className="section">

    <div className="header">
      <h2>CONTACTS</h2>
      <span className="add-button" onClick={props.addContact}>+</span>
    </div>

    <ul>
      {Object.keys(props.contacts)
        .map(key => 
          <Contact 
            key={key} 
            contactKey={key} 
            contactItem={props.contacts[key]} 
            deleteContact={props.deleteContact} 
          />
      )}
    </ul>

  </div>
)

export default Contacts;
