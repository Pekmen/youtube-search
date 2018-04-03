import React from 'react';
import { Row, Col, Nav, NavItem, Tabs, Tab } from 'react-bootstrap';
import SearchBar from '../containers/SearchBar';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Tab.Container defaultActiveKey="search">
          <Row className="clearfix">
            <Col sm={1}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="search">Search Videos</NavItem>
                <NavItem eventKey="saved">My Videos</NavItem>
              </Nav>
            </Col>
            <Col sm={11}>
              <Tab.Content animation>
                <Tab.Pane eventKey="search">
                  <p>Youtube search app</p>
                  <SearchBar />
                </Tab.Pane>
                <Tab.Pane eventKey="saved">My Videos Content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    );
  }
}

export default Index;
