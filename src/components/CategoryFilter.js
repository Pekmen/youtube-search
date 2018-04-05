import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const CategoryFilter = (props) => {

  function onChangeHandler(e) {
    e.preventDefault();
    props.setCategoryFilter(e.target.value);
    if (props.searchTerm.length === 0) return;
    props.fetchVideosList(props.searchTerm, e.target.value, props.filters.year)
      .then(result => props.fetchVideosInfo(result.payload.items));
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

export default CategoryFilter;
