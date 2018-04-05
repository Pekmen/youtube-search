import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearValue: 2018,
    };
  }
  onChangeHandler(e) {
    const { searchTerm } = this.props;
    const { categoryId } = this.props.filters;
    e.preventDefault();
    this.props.setYearFilter(e.target.value);
    this.setState({ yearValue: e.target.value });
    this.props.searchVideos(searchTerm, categoryId, e.target.value);
  }

  render() {
    return (
      <FormGroup controlId="formControlsYearPublished">
        <input
          type="range"
          min={2005}
          max={2018}
          step={1}
          value={this.state.yearValue}
          onChange={e => this.onChangeHandler(e)}
        />
        <span className="year-filter">{this.state.yearValue}</span>
      </FormGroup>
    );
  }
}

CategoryFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    categoryId: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  setYearFilter: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
};

export default CategoryFilter;
