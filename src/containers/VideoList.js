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
    const videoInfoList = this.props.videosInfo.map(video => <VideoInfo key={video.id} video={video} saveVideo={this.props.saveVideo} />);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveVideo,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
