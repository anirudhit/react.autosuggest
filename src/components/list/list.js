import React, { Component } from 'react';
import SubList from '../sub-list/sub-list.js';

class List extends Component {
  render() {
    return (
      <li className="ab-a-elm reset-pd-t-imp">
        <div className="media">
          <div className="media-left">
            <img className="mr-t-5 img-32-36" src={this.props.listData.image.link}/>
          </div>
          <div className="media-body br-l-1 pd-l-5">
            <ul className="ab-ul-p">
              <li className="p-li-h mr-t-5 mr-b-5 cursor-pointer">{this.props.listData.name}</li>
              <li>
                <ul className="ab-ul-c pd-l-20">
                  {this.props.listData.groups.map((dynamicSubList, i) => <SubList 
                      key = {i} subListData = {dynamicSubList}/>)}
                  <li className="ab-ul-c-add mr-b-5 cursor-pointer">+Add Group New</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default List;
