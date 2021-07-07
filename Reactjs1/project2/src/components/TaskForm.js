import { Component } from 'react'
import {connect} from 'react-redux'
import * as action from './../actions/index'
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            status: 'false'
        }
    }
    componentWillMount=()=>{
        console.log(this.props.edit)
        if(this.props.edit){
            this.setState(
                {
                    id:this.props.edit.id,
                    name:this.props.edit.name,
                    status:this.props.edit.status
                }
            )
        }
    }
    componentWillReceiveProps=(data)=>{
        if(this.props.edit){
            this.setState(
                {
                    id:data.edit.id,
                    name:data.edit.name,
                    status:data.edit.status
                }
            )
        }
        else{
            this.setState(
                {
                    id:'',
                    name:'',
                    status:'false'
                }
            )
        }
        
    }
    Change = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    closeDisplay = () => {
        this.props.oncloseForm()
    }
    HandleSub=(event)=>{
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.Clear()
      }
    Clear=()=>{
        this.setState({
            name:'',
            status:false
        })
    }
    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.id==='' ? 'them cong viec' :'chinh sua cong viec'}</h3>
                        <button onClick={this.props.onToogle}>x</button>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.HandleSub}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name='name' onChange={this.Change} value={this.state.name} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name='status' onChange={this.Change} value={this.state.status}>
                                <option value='true'>Kích Hoạt</option>
                                <option value='false'>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                        <button type="reset" className="btn btn-danger" onClick={this.Clear}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        edit:state.edit
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        onAddTask : (task)=>{
            dispatch(action.addTask(task))
        },
        onToogle:()=>{
            dispatch(action.toogleForm())
        },
        closeForm:()=>{
            dispatch(action.closeForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm)