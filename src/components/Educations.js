import React from 'react';
import Education from './Education'

class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.educations;
  }

  render() {
    return (
      <div className="education">

        <div className="header">
          <h2>EDUCATION</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.state).map(
            key => <Education key={key} educationItem={this.state[key]} />
          )}
        </ul>

      </div>
    )
  }
}

export default Educations;
