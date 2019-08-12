import React, { Component } from 'react';
import './App.css';
import './Button.css';
import './Screen.css';
import Button from './Button';
import Screen from './Screen';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
      result: 0,
      operator: '+'
    }
    this.clearState=this.clearState.bind(this);
    

  }

  clearState(){
    let result=this.state.result;
    result=0
    let current=this.state.current;
    current=[]
    this.setState({result})
    this.setState({current})
  }
  switchOp = (operator) => {
    switch (operator) {
      case '÷':
        return '/'
      case 'x':
        return '*'
    }
  }
  Dop = (num1, operator, num2) => {
    let result = this.state.result
    operator = operator.replace(/[x÷]/, this.switchOp)
    if (!isNaN(num2)) {
      result = eval(num1 + operator + num2)
    }
    this.setState({ result })
  }
  handleClick = (button) => {
    let current = [...this.state.current]
    const result = this.state.result
    let operator = this.state.operator
    const num = parseFloat(current.join(''))
    switch (true) {
      case /[%+x\-÷=]/.test(button):
        this.Dop(result, operator, num);
       if(button!="="){
        operator = button
        current = operator
       }
       else if(button=="=")
       {
         current=[]
        
       }
       
        break
      case /[0-9\.]/.test(button):
        if (/[%+x\-÷]/.test(current)) {
          current = []
        }
        current.push(button)
        break           

      case /AC/.test(button):
        this.clearState();
        break
      case /DEL/.test(button):
        current.pop();
        break
    }

    this.setState({ current, operator })
  }
  render() {
    const buttons = ['AC', 'DEL', '%', '÷', '9', '8', '7', 'x', '6', '5', '4', '-', '3', '2', '1', '+', '0', '.', '=']
    return (
      <div>
        <h1>C A L C U L A T O R</h1>
        <div className="calculator" >
          <span className="screen">
            <Screen current={this.state.current} result={this.state.result} className="screen" />
          </span>
          <div className="btn-container">
            {buttons.map((item, i) => <Button handleClick={this.handleClick} key={i} name={item} />)}
          </div>
        </div>
      </div>

    );
  }
}



export default App;
