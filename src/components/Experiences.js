import React from 'react';
import Experience from './Experience'

const Experiences = (props) => (
  <div className="section">

    <div className="header">
      <h2>EXPERIENCE</h2>
      <span className="add-button" onClick={props.addExp}>+</span>
    </div>

    <ul>
      {Object.keys(props.experiences)
        .map(key => 
          <Experience 
            key={key} 
            expKey={key} 
            expItem={props.experiences[key]} 
            deleteExp={props.deleteExp} 
          />
      )}
    </ul>

  </div>
)

export default Experiences;
