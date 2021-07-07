import { Component } from 'react'
import TaskItem from './TaskItem'
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: '-1'
        }
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        // this.props.filter(
        //     name==='filterName'?value:this.state.filterName,
        //     name==='filterStatus'?value:this.state.filterStatus
        // )
        var para={
            name:name==='filterName'?value:this.state.filterName,
            status:name==='filterStatus'?value:this.state.filterStatus
        }
        this.setState({
            [name]: value
        })
        this.props.onFilter(para)


    }
    render() {
        var { tasks , filter} = this.props
        if(filter.name){
            tasks=tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1
            })
        }
        if (tasks === null) { tasks = [] }
        var elm = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task}
                deleteItem={this.props.deleteItem}
                ChangeInfo={this.props.ChangeInfo}
            />
        })
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" name='filterName' onChange={this.onChange} value={this.state.filterName} />
                            </td>
                            <td>
                                <select className="form-control" name='filterStatus' onChange={this.onChange} value={this.state.filterStatus}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>

                        {elm}


                    </tbody>
                </table>
            </div>
        );
    }
}
var mapStateToProps = (state)=>{
    return {
        tasks:state.tasks,
        filter:state.filter
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(actions.filterTable(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList)