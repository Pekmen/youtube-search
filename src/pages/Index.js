import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Nav, NavItem, Tab } from 'react-bootstrap';
import SearchBar from '../containers/SearchBar';
import VideoList from '../components/VideoList';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('this.props.videoStatistics___', this.props.videoStatistics);
    return (
        <Tab.Container id="tabs-navigation" defaultActiveKey="search">
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
                <Grid>
                  <p>Youtube search app</p>
                  <SearchBar />
                  <Row className="clearfix">
                    <VideoList videos={this.props.videoStatistics}/>
                  </Row>
                </Grid>
                </Tab.Pane>
                <Tab.Pane eventKey="saved">
                  <Grid>
                    My Videos Content
                  </Grid>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoStatistics: state.videoStatistics,
  };
};

export default connect(mapStateToProps)(Index);
