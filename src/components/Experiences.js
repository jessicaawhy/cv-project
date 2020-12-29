import React from 'react';
import Experience from './Experience'

class Experiences extends React.Component {
  render() {
    return (
      <div className="experience">

        <div className="header">
          <h2>EXPERIENCE</h2>
          <div className="btn-container">
            <button onClick={this.props.addExp}>Add</button>
          </div>
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
