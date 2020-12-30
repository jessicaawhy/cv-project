import React from 'react';
import ToggleTagInput from './ToggleTagInput'

const Introduction = (props) => (
  <div id="introduction">
    <img 
      id="portrait" 
      src={props.intro.portrait} 
      alt="profile-pic" 
    />
    <div id="person-text">
      <ToggleTagInput className="name" item={props.intro.name} />
      <ToggleTagInput className="title" item={props.intro.title} />
      <ToggleTagInput className="desc" item={props.intro.desc} type="desc" />
    </div>
  </div>
)

export default Introduction;
