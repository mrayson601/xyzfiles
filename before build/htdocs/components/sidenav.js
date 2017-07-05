import React, {Component} from 'react';
import {Col, Row, Nav, NavItem} from 'react-bootstrap';
import Main from './main.js';

class SideNav extends Component {

    constructor(props) {
        super(props);

        this.aboutClick = this.aboutClick.bind(this);
        this.productClick = this.productClick.bind(this);
        this.topClick = this.topClick.bind(this);
        this.errClick = this.errClick.bind(this);

        this.state = {
            link: "top"
        };
    }

    aboutClick() {
        this.setState({link: 'about'});
    }

    productClick() {
        this.setState({link: 'product'});
    }

    topClick() {
        this.setState({link: 'top'});
    }

    errClick() {
        this.setState({link: 'err'});
    }

    render() {
        return (

            <Row>
                <Col xs={3} sm={3} md={3} lg={3} className="sideNav">
                    <div className="title">XYZ Inc.</div>
                    <Nav className="nav" bsStyle="pills" stacked activeKey={0}>
                        <NavItem eventKey={1} onClick={this.topClick}>トップ</NavItem>
                        <NavItem eventKey={2} onClick={this.aboutClick}>会社概要</NavItem>
                        <NavItem eventKey={3} onClick={this.productClick}>商品一覧</NavItem>
                        <NavItem eventKey={4} onClick={this.errClick}>アクセス</NavItem>
                        <a className="crossedOut" eventKey={5} onClick={this.errClick}>採用情報
                        </a>
                        <NavItem eventKey={6} onClick={this.errClick}>お問合わせ</NavItem>
                    </Nav>
                    <div>
                        <img className="dna" src={require("../assets/dna.png")}/>
                    </div>
                </Col>
                <Col xs={9} sm={9} md={9} lg={9} className="main">
                    <Main content={this.state.link}/>
                </Col>
            </Row>
        );
    }
}

export default SideNav;
