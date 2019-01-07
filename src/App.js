import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Grids from './AdvancedGrid'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grids container item xs={24} justify={'center'}>
                        <img src={logo} className="App-logo" alt="Classfunc"/>
                    </Grids>
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    <Grids container item xs={24} justify={'center'}>
                        <a
                            className="App-link"
                            href="https://classfunc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            About the Classfunc
                        </a>
                    </Grids>
                </header>
            </div>
        );
    }
}

export default App;
