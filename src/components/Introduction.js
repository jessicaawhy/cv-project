import React from 'react';

class Introduction extends React.Component {
  enableEdit = (e) => {
    let parent = e.target.dataset.parent;
    let item = e.target.dataset.item;

    let obj = {...this.props.details};
    obj[item]['editing'] = true;

    this.props.saveState(parent, obj);
  }

  handleEdit = (e) => {
    let parent = e.target.dataset.parent;
    let item = e.target.dataset.item;
    let obj = {...this.props.details};

    if (e.key === 'Enter' || e.type === 'blur') {
      let newValue = e.target.value;
      obj[item]['data'] = newValue;

      this.props.saveState(parent, obj);
      this.disableEdit();
    } else if (e.key === 'Escape') {
      this.disableEdit();
    }
  }

  disableEdit = () => {
    let obj = {...this.props.details};
    for (let key in obj) {
      obj[key]['editing'] = false;
    }
    this.props.saveState('introduction', obj);
  }

  render() {
    let { name, title, desc } = this.props.details;
    return (
      <div id="introduction">
        <img id="portrait" src="https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFuJTIwY2VudGVyZWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="profile-pic" />
        <div id="bio">
          <div>
            {name.editing 
              ? <input data-parent={'introduction'} data-item={'name'} autoFocus onBlur={this.handleEdit} onKeyDown={this.handleEdit} defaultValue={name.data}></input>
              : <h1 data-parent={'introduction'} data-item={'name'} onClick={this.enableEdit}>{name.data}</h1>
            }
          </div>

          <div>
            {title.editing
              ? <input data-parent={'introduction'} data-item={'title'} autoFocus onBlur={this.handleEdit} onKeyDown={this.handleEdit} defaultValue={title.data}></input>
              : <p className="person-title" data-parent={'introduction'} data-item={'title'} onClick={this.enableEdit}>{title.data}</p>
            }
          </div>

          <div>
            {desc.editing
              ? <textarea data-parent={'introduction'} data-item={'desc'} autoFocus onBlur={this.handleEdit} onKeyDown={this.handleEdit} defaultValue={desc.data}></textarea>
              : <p className="person-desc" data-parent={'introduction'} data-item={'desc'} onClick={this.enableEdit}>{desc.data}</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;
