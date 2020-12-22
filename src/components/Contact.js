import React from 'react';

class Contact extends React.Component {
  render() {
    let header = Object.keys(this.props.details)[0];
    let item = Object.values(this.props.details)[0];
    return (
      <div className="contact-item">
        <h2>{header}</h2>
        <p>{item}</p>
      </div>
    )
  }
}

export default Contact;
