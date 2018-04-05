import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearValue: 2018,
    }
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
      <ControlLabel>Select Category</ControlLabel>
      <input
        type="range"
        min={2005}
        max={2018}
        step={1}
        value={this.state.yearValue}
        onChange={e => this.onChangeHandler(e)}
      />
      <span>{this.state.yearValue}</span>
      </FormGroup>
    );
  }
}

export default CategoryFilter;
