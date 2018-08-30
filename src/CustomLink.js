import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class CustomLink extends Component{

  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.pathname,
      data: this.setData(),
      iconClass: this.setIconClass(),
      text: this.setText(),
      className: this.props.className
    };
  }

  setData(){
    if(typeof(this.props.data)!=="undefined")
    {
      return this.props.data;
    }
    return null;
  }

  setIconClass(){
    if(typeof(this.props.iconClass)!=="undefined")
    {
      return this.props.iconClass;
    }
    return null;
  }

  setText(){
    if(typeof(this.props.text)!=="undefined")
    {
      return this.props.text;
    }
    return null;
  }

  render(){
    return (
      <NavLink to={{
          pathname:this.state.pathname,
          state: {
            data: this.state.data
          }
        }}
        className={this.state.className}
      >
        <i className={this.state.iconClass}></i>
        <span> {this.state.text}</span>
      </NavLink>
    );
  }
}

export default CustomLink;
