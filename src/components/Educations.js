import React from 'react';
import Education from './Education'

const Educations = (props) => (
  <div className="section">

    <div className="header">
      <h2>EDUCATION</h2>
      <span className="add-button" onClick={props.addEd}>+</span>
    </div>

    <ul>
      {Object.keys(props.educations)
        .map(key => 
          <Education 
            key={key} 
            edKey={key} 
            edItem={props.educations[key]} 
            deleteEd={props.deleteEd} 
          />
      )}
    </ul>

  </div>
)

export default Educations;
