import React, { Component } from 'react';

class Farenheit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="farenheit-wrapper">
        <span className='label'>Farenheit</span>
        <input className="farenheit-input" 
          value={this.props.temperature}
          onChange={event => this.onInputChange(event.target.value, this.props.scale)}
        />
      </div>
    );
  }

  onInputChange(farenheit, scale) {
    this.props.onChange(farenheit, scale);
    // this.setState(farenheit);
  }
}

export default Farenheit;