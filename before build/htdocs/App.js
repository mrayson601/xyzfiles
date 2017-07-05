import React, {Component} from 'react';

import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

import SideNav from './components/sidenav.js';
import Main from './components/main.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid fluid>
                    <SideNav/>
                </Grid>
            </div>
        );
    }
}

export default App;
