import React, {Component} from 'react';

class Celsius extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='celsius-wrapper'>
        <span className='label'>Celsius</span>
        <input className='cesius-input' 
          value={this.props.temperature}
          onChange={event => this.onInputChange(event.target.value, this.props.scale)}
        />
      </div>
    );
  }

  onInputChange(celsius, scale) {
    this.props.onChange(celsius, scale);
  }
}

export default Celsius;