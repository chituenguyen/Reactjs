import { Component } from 'react'
import Search from './Search'
import Sort from './Sort'
class Control extends Component {
    render() {
        return (
            <div>
                <div className="row mt-15">
                    <Search onSearch={this.props.onSearch}/>
                    <Sort />
                </div>
            </div>
        );
    }
}

export default Control
