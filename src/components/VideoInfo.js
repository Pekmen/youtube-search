import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';


const VideoInfo = (props) => {
  const { video, saveVideo } = props;
  return (
    <Col sm={3}>
      <div className="video-info-wrapper">
        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
          <Image src={video.thumbnail.url} responsive />
        </a>
        <div className="video-info">
          <h5 className="video-title"><b>{`${video.title.substring(0, 50)}...`}</b></h5>
          <span className="video-author">{video.channel}</span>
          <p>
            <span className="video-views">{video.views} {video.views.substr(-1) === '1' ? 'view' : 'views' }</span>
            <span className="video-likes">{video.likes} {video.likes.substr(-1) === '1' ? 'like' : 'likes' }</span>
          </p>
          <p>{video.categoryId}-{video.year}</p>
          {
            (saveVideo)
            ? <button onClick={() => saveVideo(video)}>Save</button>
            : null
          }
        </div>
      </div>
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
