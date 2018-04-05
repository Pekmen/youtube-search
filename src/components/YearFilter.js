import React from 'react';
import { FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { CURRENT_YEAR } from '../constants';


/* Year range filter. This component is closely related to CategoryFilter.
* Default value is current year.
*/
class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearValue: CURRENT_YEAR,
    };
  }

  // Begin video fetching process after every change. Called with local
  // state for yearValue for better performance
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
          max={CURRENT_YEAR}
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
