import React from 'react';
import ToggleTagInput from './ToggleTagInput'

const Education = (props) => {
  const edKey = props.edKey;
  const { school, degree, start, end, location } = props.edItem;

  return (
    <div className="ed-item">
      <div className="first">
        <div className="dates">
          <ToggleTagInput item={start} />
          <span>-</span>
          <ToggleTagInput item={end} />
        </div>
        <ToggleTagInput item={degree} />
      </div>

      <div className="second">
        <ToggleTagInput item={school} />
        <ToggleTagInput item={location} />
      </div>

      <div className="third">
        <span onClick={() => props.deleteEd('educations', edKey)}>x</span>
      </div>
    </div>
  )
}

export default Education;
