import React from 'react';
import Education from './Education'

class Educations extends React.Component {
  render() {
    return (
      <div className="education">

        <div className="header">
          <h2>EDUCATION</h2>
          <div className="btn-container">
            <button onClick={this.props.addEd}>Add</button>
          </div>
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
