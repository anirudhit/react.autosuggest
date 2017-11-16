import React, { Component } from 'react';

class SubList extends Component {
  render() {
    return (
      <li className="mr-b-5 cursor-pointer">{this.props.subListData.name}</li>
    );
  }
}

export default SubList;
