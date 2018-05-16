import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Menu from './components/Menu'
import Main from './components/Main'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage: 'Page 1',
        }
    }

    render(){
        return (
            <div>
                <Menu onPageSelect={currentPage => this.setState({currentPage})}/>
                <Main currentPage={this.state.currentPage}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
