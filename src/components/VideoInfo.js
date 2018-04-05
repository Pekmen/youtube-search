import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

// returns human readable large numbers
const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


/* Compnent which will display all data for relevant video. Save button will be
* ommited if initialized in Show Saved Videos tab
*/
const VideoInfo = (props) => {
  const { video, saveVideo } = props;

  // older videos don't have larger thumbnails
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
            ? <span className="video-views">{numberWithCommas(video.views)} <i className="fas fa-eye" /></span>
            : null
          }
          {(video.likes)
            ? <span className="video-likes">{numberWithCommas(video.likes)} <i className="fas fa-thumbs-up" /></span>
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
