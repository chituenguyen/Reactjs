import { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class TaskItem extends Component {
    onChangeStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id)
    }
    deleteItem=()=>{
        this.props.deleteItemRedux(this.props.task.id)
    }
    ChangeInfo=()=>{
        this.props.openForm()
        this.props.edit(this.props.task)
    }
    render() {
        var {task,index} =  this.props;
        return (
                <tr>
                    <td>{index+1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span className="label label-success" onClick={this.onChangeStatus}>
                            {task.status===true ? 'kich hoat' :'an'}
                                                        </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning" onClick={this.ChangeInfo}>
                            <span className="fa fa-pencil mr-5"></span>Sửa
                                                </button>
                                                &nbsp;
                                                <button type="button" className="btn btn-danger"
                                                onClick={this.deleteItem}>
                            <span className="fa fa-trash mr-5"></span>Xóa
                                                </button>
                    </td>
                </tr>

        );
    }
}

const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onUpdateStatus:(id)=>{
            dispatch(actions.updateStatus(id))
        },
        deleteItemRedux:(id)=>{
            dispatch(actions.deleteItem(id))
        },
        openForm:()=>{
            dispatch(actions.openForm())
        },
        edit:(task)=>{
            dispatch(actions.edit(task))
        }
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);