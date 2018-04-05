import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';


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
      <div className="search-input-wrapper">
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
          menuStyle={
            {
              borderRadius: '3px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2px 0',
              fontSize: '90%',
              position: 'fixed',
              overflow: 'auto',
              maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
            }
          }
        />
        <i className="fas fa-lg fa-search search-icon" />
      </div>
    );
  }
}

SearchInput.propTypes = {
  filters: PropTypes.shape({
    categoryId: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  autoSuggestItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  fetchAutosuggest: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
};


export default SearchInput;
