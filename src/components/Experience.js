import React from 'react';
import ToggleTagInput from './ToggleTagInput'

const Experience = (props) => {
  const expKey = props.expKey;
  const { company, title, start, end, location, desc } = props.expItem;

  return (
    <div className="exp-item">

      <div className="first">
        <div className="dates">
          <ToggleTagInput item={start} />
          <span>-</span>
          <ToggleTagInput item={end} />
        </div>
        <ToggleTagInput item={title} />
      </div>

      <div className="second">
        <ToggleTagInput item={company} />
        <ToggleTagInput item={location} />
        <ToggleTagInput item={desc} type="desc" />
      </div>

      <div className="third">
        <span onClick={() => props.deleteExp('experiences', expKey)}>x</span>
      </div>

    </div>
  )
}

export default Experience;
