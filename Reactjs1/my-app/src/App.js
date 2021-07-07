import { Component } from 'react';
import Header from './component/Header'
import Product from './component/Product'
import React from 'react'
class App extends Component {
  constructor(props){
    super(props)
    this.inputname=React.createRef();
    this.state={
      user : [
        {
          name :'tue',
          mssv :1915795
        }
      ]
    }
  }
  change=()=>{
    this.setState({user : [
      {
        name:'nhu',
        mssv:1915112
      }
    ]})
  }
  click=()=>{
    console.log('hehe')
  }
  Add=()=>{
    console.log(this.inputname.current.value)
  }
  render() {
    return (
      <div>
        <Header />
        <p>{this.state.user[0].name} {this.state.user[0].mssv}</p>
        <button onClick={()=>this.change()}>Change</button>
        <h3>Add Product</h3>
        <input ref={this.inputname} type='text'></input>
        <button type='submit' onClick={()=>this.Add()}>Add</button>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Product />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Product />
        </div>
        <button onClick={()=>this.click()}>Click me</button>

      </div>
    );
  }
}


export default App;
