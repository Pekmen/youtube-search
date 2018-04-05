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
    console.log('aaa');
    e.preventDefault();
    this.setState({ yearValue: e.target.value });
    if (this.props.searchTerm.length === 0) return;
    this.props.fetchVideosList(this.props.searchTerm, this.props.filters.categoryId, e.target.value)
      .then(result => this.props.fetchVideosInfo(result.payload.items));
  }

  render() {
    return(
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
