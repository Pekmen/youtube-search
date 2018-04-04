import React from 'react';
import { Col } from 'react-bootstrap';

const VideoInfo = (props) => {
  return (
    <Col sm={3}>
    <p >{props.video.id}</p>
    </Col>
  );
};

export default VideoInfo;
