import React from 'react';
import Contact from './Contact'

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.contacts;
  }

  render() {
    return (
      <div className="contacts">

        <div className="header">
          <h2>CONTACTS</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.state).map(
            key => <Contact key={key} contactItem={this.state[key]} />
          )}
        </ul>

      </div>
    )
  }
}

export default Contacts;
