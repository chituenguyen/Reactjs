
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',
      bio :'',
      gender:'Men',
      language:'vi',
      status:false
    }
  }
  Change=(event)=>{
    var target = event.target
    var name = target.name
    var value=target.type==='checkbox' ? target.checked : target.value
    this.setState({
      [name] : value
    })
    console.log(this.state)

  }
  Reset=()=>{
    this.setState({
      username : '',
      password : '',
      bio :'',
      gender:'Men',
      language:'vi',
      status:false
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' onChange={this.Change} value={this.state.username}></input><br></br>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' onChange={this.Change} value={this.state.password}></input>
          <label htmlFor='bio'>Bio</label>
          <textarea name='bio' onChange={this.Change} value={this.state.bio}></textarea>
          <label htmlFor='gender'>Gender</label>
          <select name='gender' value={this.state.gender} onChange={this.Change}>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
          </select>
          <label htmlFor='language'>Eng</label>
          <input type='radio' name='language' value='en' onChange={this.Change} checked={this.state.language==='en'}></input>
          <label htmlFor='language'>Vie</label>
          <input type='radio' name='language' value='vi' onChange={this.Change} checked={this.state.language==='vi'}></input>
          <label htmlFor='status'>Status</label>
          <input type='checkbox' name='status' value={true} onChange={this.Change} checked={this.state.status===true}></input>
          <button type='submit'>Submit</button><br />
          <button type='reset' onClick={this.Reset}>Reset</button>
        </form>

      </div>
    );
  }
}


export default App;

