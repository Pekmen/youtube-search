import React from 'react';
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
    const { showingSaved, saveVideo, savedVideos, videosInfo, filters } = this.props;
    const videosSource = showingSaved ? savedVideos : videosInfo;
    const saveVideoAction = showingSaved ? null : saveVideo;
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
      <div>
        {videoInfoList}
      </div>
    );
  }
}

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
