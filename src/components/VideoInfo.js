import React from 'react';
import { Col } from 'react-bootstrap';

const VideoInfo = (props) => {
  return (
    <Col sm={3}>
    <p >{props.video.id}</p>
    <button onClick={() => props.saveVideo(props.video.id)}>Save</button>
    </Col>
  );
};

export default VideoInfo;
