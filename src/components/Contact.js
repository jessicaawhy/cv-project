import React from 'react';

class Contact extends React.Component {
  render() {
    let title = Object.keys(this.props.details)[0];
    let item = Object.values(this.props.details)[0];
    return (
      <li className="item">
        <h2>{title.toUpperCase()}</h2>
        <p>{item}</p>
      </li>
    )
  }
}

export default Contact;
