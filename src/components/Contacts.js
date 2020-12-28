import React from 'react';
import Contact from './Contact'

class Contacts extends React.Component {
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
          {Object.keys(this.props.contacts).map(
            key => <Contact key={key} contactItem={this.props.contacts[key]} />
          )}
        </ul>

      </div>
    )
  }
}

export default Contacts;
