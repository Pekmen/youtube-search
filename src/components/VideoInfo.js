import React from 'react';
import { Col } from 'react-bootstrap';

const VideoInfo = (props) => {
  const { video, saveVideo } = props;
  return (
    <Col sm={3}>
    <p>{video.id}-{video.categoryId}</p>
    {
      (saveVideo)
      ? <button onClick={() => saveVideo(video)}>Save</button>
      : null
    }
    </Col>
  );
};

export default VideoInfo;
