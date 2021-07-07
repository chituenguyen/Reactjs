import { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            keyWord:''
        }
    }
    onSearch=(event)=>{
        var target=event.target
        var name=target.name
        var value=target.value
        this.setState({
            [name]:value
        })
    }
    Click=()=>{
        this.props.onSearch(this.state.keyWord)
    }
    render() {
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa..." name='keyWord' value={this.state.keyWord} onChange={this.onSearch}/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.Click}>
                                <span className="fa fa-search mr-5"></span>Tìm
                                    </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search
