import React, {Component} from 'react';

class Celsius extends Component {
  constructor(props) {
    super(props);

    this.state = { celsius: 'type' };
  }

  render() {
    return(
      <div className='celsius-wrapper'>
        <input className='cesius-input' 
          value={this.state.celsius}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(celsius) {
    this.setState({celsius});
  }
}

export default Celsius;