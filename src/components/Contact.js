import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Contact extends React.Component {
  render() {
    const title = Object.keys(this.props.contactItem)[0];
    const value = Object.values(this.props.contactItem)[0];

    return (
      <div>
        <ToggleTagInput item={title} />
        <ToggleTagInput item={value} />
        <span>x</span>
      </div>
    )
  }
}

export default Contact;
