import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const VideoInfo = (props) => {
  const { video, saveVideo } = props;
  return (
    <Col sm={3}>
    <p>{video.id}-{video.categoryId}-{video.year}</p>
    {
      (saveVideo)
      ? <button onClick={() => saveVideo(video)}>Save</button>
      : null
    }
    </Col>
  );
};

VideoInfo.propTypes = {
  saveVideo: PropTypes.func.isRequired,
  video: PropTypes.shape({
    categoryId: PropTypes.string,
    channel: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.string,
    thumbnail: PropTypes.object,
    title: PropTypes.string,
    views: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

export default VideoInfo;
