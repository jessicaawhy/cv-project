import React from 'react';
import Education from './Education'

class Educations extends React.Component {
  render() {
    return (
      <div className="section">

        <div className="header">
          <h2>EDUCATION</h2>
          <span className="add-button" onClick={this.props.addEd}>+</span>
        </div>

        <ul>
          {Object.keys(this.props.educations)
            .map(key => 
              <Education 
                key={key} 
                edKey={key} 
                edItem={this.props.educations[key]} 
                deleteEd={this.props.deleteEd} 
              />
          )}
        </ul>

      </div>
    )
  }
}

export default Educations;
