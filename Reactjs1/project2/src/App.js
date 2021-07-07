import './App.css';
import { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import demo from './reducers'
import { connect } from 'react-redux'
import * as actions from './actions/index'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false,
            edit: null,
            filter: {
                name: '',
                status: "-1"
            },
            keyWord: ''
        }
    }
    ChangeInfo = (id) => {
        this.onopenForm()
        var index = this.findIndex(id)
        var { tasks } = this.state
        if (index !== -1) {
            var editting = tasks[index]
            this.setState({
                edit: editting
            })
        }
    }

    onopenForm = () => {
        this.setState({
            isDisplay: true
        })
    }
    changeDisplay = () => {
        if (this.state.edit) {
            this.setState({
                isDisplay: true,
                edit: null
            })
        }
        else {
            this.setState({
                isDisplay: !this.state.isDisplay
            })
        }
    }
    oncloseForm = () => {
        this.setState({
            isDisplay: !this.state.isDisplay,
            edit: null
        })
    }


    togle = () => {
        this.props.onToogle()
        this.props.clear()
    }
    onSearch = (keyWord) => {
        this.setState({
            keyWord: keyWord
        })
    }
    render() {
        var { filter, keyWord } = this.state;
        var { isDisplay } = this.props
        var elmDisplay = isDisplay
        if (elmDisplay === true) {
            elmDisplay = <TaskForm oncloseForm={this.oncloseForm} />
        }
        else {
            elmDisplay = ''
        }
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            {elmDisplay}
                        </div>
                        <div className={isDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            <button type="button" className="btn btn-primary" onClick={this.togle}>
                                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>

                            <Control onSearch={this.onSearch} />
                            <div className="row mt-15">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <TaskList onChangeStatus={this.onChangeStatus} deleteItem={this.deleteItem}
                                        ChangeInfo={this.ChangeInfo}
                                        filter={this.filter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplay: state.isDisplay,
        edit: state.edit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToogle: () => {
            dispatch(actions.openForm())
        },
        clear: () => {
            dispatch(actions.edit({
                id: '',
                name: '',
                status: false
            }))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);



