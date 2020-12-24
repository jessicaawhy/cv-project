import React from 'react';

class RenderContact extends React.Component {
  selectTag = (obj) => {
    const section = this.props.section;
    const key1 = this.props.itemKey;
    const key2 = Object.keys(obj)[0];
    const data = obj[key2]['data'];
    const editing = obj[key2]['editing'];

    if (editing === true) {
      return <input 
        data-section={section} 
        data-key1={key1} 
        data-key2={key2} 
        autoFocus 
        onBlur={this.props.handleEdit} 
        onKeyDown={this.props.handleEdit} 
        defaultValue={data}>   
      </input>
    } else {
      return <p 
        data-section={section} 
        data-key1={key1} 
        data-key2={key2} 
        onClick={this.props.enableEdit}>
        {data}
      </p>
    }
  }

  render() {
    const { title, value } = this.props.itemObj;
    
    return (
      <li>
        {this.selectTag({title})}
        {this.selectTag({value})}
      </li>
    )
  }
}

export default RenderContact;
