import React from 'react';
import Contact from './Contact'

class Contacts extends React.Component {
  render() {
    return (
      <div className="section">

        <div className="header">
          <h2>CONTACTS</h2>
          <span className="add-button" onClick={this.props.addContact}>+</span>
        </div>

        <ul>
          {Object.keys(this.props.contacts)
            .map(key => 
              <Contact 
                key={key} 
                contactKey={key} 
                contactItem={this.props.contacts[key]} 
                deleteContact={this.props.deleteContact} 
              />
          )}
        </ul>

      </div>
    )
  }
}

export default Contacts;
