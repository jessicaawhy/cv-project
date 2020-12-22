import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="normal-view">
          <p>{this.props.details.address1}</p>
          <p>{this.props.details.address2}</p>
          <p>{this.props.details.phone}</p>
          <p>{this.props.details.email}</p>
          <p>{this.props.details.website}</p>
          <p>{this.props.details.linkedIn}</p>
        </div>
      </div>
    )
  }
}

export default Contact;
