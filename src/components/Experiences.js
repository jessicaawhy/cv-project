import React from 'react';
import Experience from './Experience'

class Experiences extends React.Component {
  render() {
    return (
      <div className="section">

        <div className="header">
          <h2>EXPERIENCE</h2>
          <span className="add-button" onClick={this.props.addExp}>+</span>
        </div>

        <ul>
          {Object.keys(this.props.experiences)
            .map(key => 
              <Experience 
                key={key} 
                expKey={key} 
                expItem={this.props.experiences[key]} 
                deleteExp={this.props.deleteExp} 
              />
          )}
        </ul>

      </div>
    )
  }
}

export default Experiences;
