import React from 'react';

class Contact extends React.Component {
  render() {
    let title = Object.keys(this.props.details)[0];
    let item = Object.values(this.props.details)[0];
    return (
      <li className="item">
        <div className="item-header">
          <h2>{title}</h2>
          <p>{item}</p>
        </div>
        <div className="btn-container">
            <button>edit</button>
            <button>delete</button>
        </div>
      </li>
    )
  }
}

export default Contact;
