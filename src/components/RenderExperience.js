import React from 'react';

class RenderExperience extends React.Component {
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
    const { 
      company, 
      title, 
      start, 
      end, 
      location, 
      desc 
    } = this.props.itemObj;

    return (
      <li className="item">

        <div className="first">
          <div className="dates">
          {this.selectTag({start})}
          <div> - </div>
          {this.selectTag({end})}
          </div>
          {this.selectTag({title})}
        </div>

        <div className="second">
          {this.selectTag({company})}
          {this.selectTag({location})}
          {this.selectTag({desc})}
        </div>

      </li>
    )
  }
}

export default RenderExperience;
