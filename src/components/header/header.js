import React, { Component } from 'react';
import './header.css';
import List from '../list/list.js';
import Data from '../../data.json';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list: Data
      }
      this.checkSearch = this.checkSearch.bind(this);
  }
  checkSearch(evt){
    var searchStr = evt.target.value?evt.target.value:"";

    if(searchStr.length === 0){
      this.setState({list:Data});
    }else if(searchStr.length > 0){
      this.state.list.filter((list,index) => {
        if(list.name.toLocaleLowerCase().indexOf(searchStr) === -1){
          this.state.list.splice(index,1);
        }
      });
    }
  }
  render() {
    return (
      <div className="clearfix">
        <nav className="navbar navbar-default ab-header">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand ab-navbar-brand" href="">Dashboard</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="">Home</a></li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" 
                    role="button" aria-haspopup="true" aria-expanded="false">Go to projects</a>
                  <ul className="dropdown-menu">
                    <li className="clearfix">
                      <form className="navbar-form navbar-left">
                        <div className="form-group pos-rel">
                          <i className="fa fa-search search-pos" aria-hidden="true"></i>
                          <input type="text" className="form-control reset-input-pd" 
                            placeholder="Search" onChange = {this.checkSearch} />
                        </div>
                      </form>
                    </li>
                    {this.state.list.map((dynamicList, i) => <List 
                      key = {i} listData = {dynamicList}/>)}
                  </ul>
                </li>
                <li><a href="">Products</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
    );
  }
}

export default Header;
