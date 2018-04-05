import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchSearchAutosuggest,
  fetchVideosList,
  fetchVideosInfo,
  fetchVideoCategories,
  setCategoryFilter,
  setYearFilter,
  setSearchTerm,
} from '../actions';

import CategoryFilter from './CategoryFilter';
import SearchInput from './SearchInput';
import YearFilter from './YearFilter';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchVideoCategories();
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
          filters={this.props.filters}
          setSearchTerm={this.props.setSearchTerm}
          searchTerm={this.props.searchTerm}
        />
        <CategoryFilter
          videoCategories={this.props.videoCategories}
          fetchVideosList={this.props.fetchVideosList}
          setCategoryFilter={this.props.setCategoryFilter}
          videosList={this.props.videosList}
          fetchVideosInfo={this.props.fetchVideosInfo}
          searchTerm={this.props.searchTerm}
          filters={this.props.filters}
        />
        <YearFilter
          searchTerm={this.props.searchTerm}
          filters={this.props.filters}
          fetchVideosInfo={this.props.fetchVideosInfo}
          fetchVideosList={this.props.fetchVideosList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchAutosuggest: state.searchAutosuggest,
    videosInfo: state.videosInfo,
    videoCategories: state.videoCategories,
    filters: state.filters,
    videosList: state.videosList,
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchAutosuggest,
    fetchVideosList,
    fetchVideosInfo,
    fetchVideoCategories,
    setCategoryFilter,
    setSearchTerm,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
