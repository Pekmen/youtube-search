import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import { fetchSearchAutosuggest, fetchSearchVideosList, fetchVideoStatistics } from '../actions';


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
        search={this.props.fetchSearchVideosList}
        videoStatistics={this.props.videoStatistics}
        fetchVideoStatistics={this.props.fetchVideoStatistics}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchAutosuggest: state.searchAutosuggest,
    videoStatistics: state.videoStatistics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchAutosuggest,
    fetchSearchVideosList,
    fetchVideoStatistics,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
