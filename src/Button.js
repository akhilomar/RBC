import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
  sendToParent=()=>{
    this.props.handleClick(this.props.name)
  }
  render(){
    return(
    <button onClick={this.sendToParent} className="button">{this.props.name}</button>

    );
  }
}



export default Button;
