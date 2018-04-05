import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
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


/* Container for search-relevant components.
* This component will fetch all relevant data for successful search query
*/
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchVideos = this.searchVideos.bind(this);
  }

  componentDidMount() {
    // initial fetch of youtube categories. this is stored inside localstorage
    this.props.fetchVideoCategories();
  }

  // main search function, the end result is an object with complete video info
  searchVideos(term, category, year) {
    if (term.length === 0) return;
    this.props.fetchVideosList(term, category, year)
      .then(result => this.props.fetchVideosInfo(result.payload.items));
  }

  render() {
    return (
      <div className="searchbar-wrapper">
          <Row>
            <Col xs={12} sm={6}>
              <SearchInput
                autoSuggestItems={this.props.searchAutosuggest}
                fetchAutosuggest={this.props.fetchSearchAutosuggest}
                videosInfo={this.props.videosInfo.items}
                filters={this.props.filters}
                setSearchTerm={this.props.setSearchTerm}
                searchTerm={this.props.searchTerm}
                searchVideos={this.searchVideos}
              />
            </Col>
            <Col xs={8} sm={3}>
              <CategoryFilter
                videoCategories={this.props.videoCategories}
                setCategoryFilter={this.props.setCategoryFilter}
                searchTerm={this.props.searchTerm}
                filters={this.props.filters}
                searchVideos={this.searchVideos}
              />
            </Col>
            <Col xs={4} sm={3}>
              <YearFilter
                searchTerm={this.props.searchTerm}
                filters={this.props.filters}
                setYearFilter={this.props.setYearFilter}
                searchVideos={this.searchVideos}
              />
            </Col>
          </Row>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchAutosuggest: PropTypes.arrayOf(PropTypes.object).isRequired,
  videosInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  videoCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    categoryId: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
  fetchSearchAutosuggest: PropTypes.func.isRequired,
  fetchVideosList: PropTypes.func.isRequired,
  fetchVideosInfo: PropTypes.func.isRequired,
  fetchVideoCategories: PropTypes.func.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
  setYearFilter: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchAutosuggest: state.searchAutosuggest,
    videosInfo: state.videosInfo,
    videoCategories: state.videoCategories,
    filters: state.filters,
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
    setYearFilter,
    setSearchTerm,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
