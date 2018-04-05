import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Nav, NavItem, Tab } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';

/* Index Component
* Holds tab pills for two main views - Search Videos and Saved Videos
* Will pass down videosInfo state
*/
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Tab.Container id="tabs-navigation" defaultActiveKey="search">
        <Grid>
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="search">Search Videos</NavItem>
                <NavItem eventKey="saved">My Videos</NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="search">
                  <Row className="clearfix">
                    <SearchBar />
                  </Row>
                  <Row className="clearfix">
                    <VideoList videosInfo={this.props.videosInfo} />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="saved">
                    <VideoList videosInfo={this.props.videosInfo} showingSaved />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Grid>
        </Tab.Container>
    );
  }
}

Index.propTypes = {
  videosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    videosInfo: state.videosInfo,
  };
};


export default connect(mapStateToProps)(Index);
