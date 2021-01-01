import React from 'react';
import ToggleTagInput from './ToggleTagInput';
import TogglePhotoInput from './TogglePhotoInput'

const Introduction = (props) => (
  <div id="introduction">
    <TogglePhotoInput item={props.intro.portrait} />
    <div id="person-text">
      <ToggleTagInput className="name" item={props.intro.name} />
      <ToggleTagInput className="title" item={props.intro.title} />
      <ToggleTagInput className="desc" item={props.intro.desc} type="desc" />
    </div>
  </div>
)

export default Introduction;
