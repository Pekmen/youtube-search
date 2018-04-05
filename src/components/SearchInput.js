import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';
import { Button } from 'react-bootstrap';


class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler(value) {
    this.setState({ value });
    this.props.setSearchTerm(value);
    this.props.fetchAutosuggest(value);
  }

  onSelectHandler(value) {
    const { categoryId, year } = this.props.filters;
    this.setState({ value });
    this.props.setSearchTerm(value);
    this.props.searchVideos(value, categoryId, year);
  }

  render() {
    const { categoryId, year } = this.props.filters;
    return (
      <div>
        <ReactAutocomplete
          items={this.props.autoSuggestItems}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent', zIndex: 999 }}
            >
              {item.label}
            </div>
          )}
          value={this.state.value}
          onChange={e => this.onChangeHandler(e.target.value)}
          onSelect={value => this.onSelectHandler(value)}
        />
        <Button onClick={() => this.props.searchVideos(this.state.value, categoryId, year)}>SEARCH</Button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  filters: PropTypes.shape({
    categoryId: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  fetchAutosuggest: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
};


export default SearchInput;
