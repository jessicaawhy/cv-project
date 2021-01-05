import React, { useState } from 'react';

const ToggleTagInput = props => {
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

  const EditTag = props.type === 'desc' ? 'textarea' : 'input';

  return (
    editing
    ? <EditTag
        id={props.id} 
        className={props.className} 
        onBlur={handleEdit} 
        onKeyDown={handleEdit} 
        autoFocus 
        defaultValue={value} >
      </EditTag>
    : <p
        id={props.id} 
        className={props.className} 
        onClick={toggleStatus} >
        {value}
      </p>  
  )
}

export default ToggleTagInput;
