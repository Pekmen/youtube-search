import React from 'react';
import VideoInfo from './VideoInfo';


class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const videoList = this.props.videosInfo.map(video => <VideoInfo key={video.id} video={video} />);
    return (
      <div>
        {videoList}
      </div>
    );
  }
}

export default VideoList;
