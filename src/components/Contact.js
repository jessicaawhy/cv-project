import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.contactItem;
  }

  render() {
    const title = Object.keys(this.state)[0];
    const value = Object.values(this.state)[0];

    return (
      <div>
        <ToggleTagInput item={title} />
        <ToggleTagInput item={value} />
      </div>
    )
  }
}

export default Contacts;