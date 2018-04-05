import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const CategoryFilter = (props) => {

  function onChangeHandler(e) {
    e.preventDefault();
    props.setCategoryFilter(e.target.value);
    props.searchVideos(props.searchTerm, e.target.value, props.filters.year);
  }

  return (
    <FormGroup controlId="formControlsVideoCategory">
      <ControlLabel>Select Category</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={e => onChangeHandler(e)}>
        <option value={0}>All Categories-0</option>
      {
        props.videoCategories.map((category) => {
          return <option key={category.id} value={category.id}>{category.title}-{category.id}</option>
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
}

export default CategoryFilter;
