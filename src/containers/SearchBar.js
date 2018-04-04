import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import { fetchSearchAutosuggest, fetchVideosList, fetchVideosInfo } from '../actions';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <SearchInput
        autoSuggestItems={this.props.searchAutosuggest}
        fetchAutosuggest={this.props.fetchSearchAutosuggest}
        fetchVideosList={this.props.fetchVideosList}
        videosInfo={this.props.videosInfo.items}
        fetchVideosInfo={this.props.fetchVideosInfo}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchAutosuggest: state.searchAutosuggest,
    videosInfo: state.videosInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchAutosuggest,
    fetchVideosList,
    fetchVideosInfo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
