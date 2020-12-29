import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Contact extends React.Component {
  render() {
    const contactKey = this.props.contactKey;
    const title = Object.keys(this.props.contactItem)[0];
    const value = Object.values(this.props.contactItem)[0];

    return (
      <div>
        <ToggleTagInput item={title} />
        <ToggleTagInput item={value} />
        <span onClick={() => this.props.deleteContact('contacts', contactKey)}>x</span>
      </div>
    )
  }
}

export default Contact;
