import React from 'react';
import { Col } from 'react-bootstrap';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const videoList = this.props.videos.map(video => {
      return (
        <Col sm={3} >
          <p key={video.id}>{video.id}</p>
        </Col>
      )
    });
    return (
      <div>
        {videoList}
      </div>
    );
  }
}

export default VideoList;
