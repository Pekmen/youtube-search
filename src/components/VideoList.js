import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoInfo from '../components/VideoInfo';
import { saveVideo } from '../actions';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { showingSaved, savedVideos, videosInfo } = this.props;
    const videosSource = showingSaved ? savedVideos : videosInfo;
    const saveVideoAction = showingSaved ? null : this.props.saveVideo;
    const videoInfoList = videosSource.map((video) => {
      return (
        <VideoInfo
          key={video.id}
          video={video}
          saveVideo={saveVideoAction}
        />
      );
    });

    return (
      <div className="video-list">
        {videoInfoList}
      </div>
    );
  }
}


VideoList.propTypes = {
  showingSaved: PropTypes.bool,
  saveVideo: PropTypes.func.isRequired,
  savedVideos: PropTypes.arrayOf(PropTypes.object).isRequired,
  videosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

VideoList.defaultProps = {
  showingSaved: false,
};

const mapStateToProps = (state) => {
  return {
    savedVideos: state.savedVideos,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveVideo,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
