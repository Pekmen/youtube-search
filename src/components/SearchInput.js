import React from 'react';
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
    this.setState({ value });
    this.props.setSearchTerm(value);
    this.props.fetchVideosList(value, this.props.filters.categoryId)
      .then(result => this.props.fetchVideosInfo(result.payload.items));
  }

  render() {
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
        <Button onClick={() => this.props.fetchVideosList(this.state.value)}>SEARCH</Button>
      </div>
    );
  }
}

export default SearchInput;
