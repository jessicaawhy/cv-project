import React from 'react';

class RenderSkill extends React.Component {
  selectTag = (obj) => {
    const section = this.props.section;
    const key1 = this.props.itemKey;
    const data = obj['data'];
    const editing = obj['editing'];

    if (editing === true) {
      return <input 
        data-section={section} 
        data-key1={key1} 
        autoFocus 
        onBlur={this.props.handleEdit} 
        onKeyDown={this.props.handleEdit} 
        defaultValue={data}>   
      </input>
    } else {
      return <p 
        data-section={section} 
        data-key1={key1} 
        onClick={this.props.enableEdit}>
        {data}
      </p>
    }
  }

  render() {
    return (
      <li>
        {this.selectTag(this.props.itemObj)}
      </li>
    )
  }
}

export default RenderSkill;
