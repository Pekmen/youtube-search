import React from 'react';
import ReactAutocomplete from 'react-autocomplete';


class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ value });
    this.props.fetchAutosuggest(value);
  }

  render() {
    return (
      <ReactAutocomplete
        items={this.props.items}
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
        onChange={e => this.onChangeHandler(e)}
        onSelect={value => this.setState({ value })}
      />
    );
  }
}

export default SearchInput;
