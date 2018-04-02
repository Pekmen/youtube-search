import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import { fetchSearchAutosuggest } from '../actions';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <SearchInput
        items={this.props.searchAutsuggest}
        fetchAutosuggest={this.props.fetchSearchAutosuggest}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchAutsuggest: state.searchAutsuggest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSearchAutosuggest,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
