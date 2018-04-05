import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';


/* Youtube categories filter. This component is closely related to YearFilter
*/
const CategoryFilter = (props) => {

  // Update the store with selected value, and immediately fetch videos.
  // Instead of store category value, local categry value is used, mainly for speed
  function onChangeHandler(e) {
    e.preventDefault();
    props.setCategoryFilter(e.target.value);
    props.searchVideos(props.searchTerm, e.target.value, props.filters.year);
  }

  return (
    <FormGroup controlId="formControlsVideoCategory">
      <FormControl componentClass="select" placeholder="select" onChange={e => onChangeHandler(e)}>
        <option value={0}>All Categories</option>
      {
        props.videoCategories.map((category) => {
          return <option key={category.id} value={category.id}>{category.title}</option>;
        })
      }
      </FormControl>
    </FormGroup>
  );
};

CategoryFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    categoryId: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  videoCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
  searchVideos: PropTypes.func.isRequired,
};

export default CategoryFilter;
