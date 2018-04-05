import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';


const VideoInfo = (props) => {
  const { video, saveVideo } = props;
  const thumbnail = video.thumbnails.standard ? video.thumbnails.standard : video.thumbnails.default;
  return (
    <Col xs={12} sm={4} lg={3}>
      <div className="video-info-wrapper">
        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
          <Image src={thumbnail.url} responsive />
        </a>
        <div className="video-info">
          <h5 className="video-title"><b>{`${video.title.substring(0, 50)}...`}</b></h5>
          <div className="info-1">
            <span className="video-author">{video.channel}</span>
            {
              (saveVideo)
              ? <button className="save-button" onClick={() => saveVideo(video)}>Save</button>
              : null
            }
          </div>
          <div className="info-2">
          {(video.views)
            ? <span className="video-views">{video.views} {video.views.substring(-1) === '1' ? 'view' : 'views' }</span>
            : null
          }
          {(video.likes)
            ? <span className="video-likes">{video.likes} {video.likes.substring(-1) === '1' ? 'like' : 'likes' }</span>
            : null
          }
          </div>
        </div>
      </div>
    </Col>
  );
};

VideoInfo.propTypes = {
  saveVideo: PropTypes.func,
  video: PropTypes.shape({
    categoryId: PropTypes.string,
    channel: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.string,
    thumbnails: PropTypes.object,
    title: PropTypes.string,
    views: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

VideoInfo.defaultProps = {
  saveVideo: null,
};

export default VideoInfo;
