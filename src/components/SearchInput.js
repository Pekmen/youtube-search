import React from 'react';
import ReactAutocomplete from 'react-autocomplete';


class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler(value) {
    this.setState({ value });
    this.props.fetchAutosuggest(value);
  }

  onSelectHandler(value) {
    this.setState({ value });
    this.props.search(value);
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
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
            >
              {item.label}
            </div>
          )}
          value={this.state.value}
          onChange={e => this.onChangeHandler(e.target.value)}
          onSelect={value => this.onSelectHandler(value)}
        />
        <button onClick={() => this.props.search(this.state.value) }>SEARCH</button>
      </div>
    );
  }
}

export default SearchInput;
