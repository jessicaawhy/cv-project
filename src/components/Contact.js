import React from 'react';
import ToggleTagInput from './ToggleTagInput'

const Contact = (props) => {
  const contactKey = props.contactKey;
  const title = Object.keys(props.contactItem)[0];
  const value = Object.values(props.contactItem)[0];

  return (
    <div className="contact-item">
      <div className="first">
        <ToggleTagInput item={title} />
        <ToggleTagInput item={value} />
      </div>
      <div className="second">
        <span className="delete-button" onClick={() => props.deleteContact('contacts', contactKey)}>x</span>
      </div>
    </div>
  )
}

export default Contact;
