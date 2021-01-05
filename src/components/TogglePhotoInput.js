import React, { useState } from 'react';

const TogglePhotoInput = props => {
  const [ value, setValue ] = useState(props.item);
  const [ editing, setEditing ] = useState(false);

  const toggleStatus = () => {
    setEditing(!editing);
  }

  const handleEdit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      if (e.target.value === '') {
        alert('Please prove a value!');
      } else {
        setValue(e.target.value);
        toggleStatus();
      }
    } else if (e.key === 'Escape') {
      toggleStatus();
    }
  }

  return (
    editing
    ? <React.Fragment>
        <img 
          id="portrait" 
          src={value} 
          alt="profile-pic" 
        />
        <div id="portrait-url">
          URL:
          <input
            id="portrait-url"
            onBlur={handleEdit} 
            onKeyDown={handleEdit} 
            autoFocus 
            defaultValue={value} >
          </input>
        </div>
      </React.Fragment>
    : <img 
        id="portrait" 
        src={value} 
        alt="profile-pic" 
        onClick={toggleStatus}
      />
  )
}

export default TogglePhotoInput;
