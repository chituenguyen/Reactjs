import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Component } from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      color:'red',
      px:12
    }
  }
  Up = ()=>{
    this.setState({
      px:this.state.px + 1
    })
  }
  Down = ()=>{
    this.setState({
      px:this.state.px - 1
    })
  }
  changeRed = ()=>{
    this.setState({
      color:'red'
    })
  }
  changeBlue = ()=>{
    this.setState({
      color:'blue'
    })
  }
  changePink = ()=>{
    this.setState({
      color:'pink'
    })
  }
  changeYellow = ()=>{
    this.setState({
      color:'yellow'
    })
  }
  render() {
    return (
    <div>
      <div className='button'>
        <button className='red' onClick={()=>this.changeRed()}></button>
        <button className='blue'onClick={()=>this.changeBlue()}></button>
        <button className='pink'onClick={()=>this.changePink()}></button>
        <button className='yellow'onClick={()=>this.changeYellow()}></button>
      </div>
      <h3>color:{this.state.color}</h3>
      <div className='up-down'> 
        <button onClick={()=>this.Up()}>Up</button>
        <button onClick={()=>this.Down()}>Down</button>
      </div>
      <h3>px:{this.state.px}</h3>
    </div>
  )};
}

export default App;
