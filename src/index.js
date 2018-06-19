import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Component import.
import Celcius from './components/celsius';

class Calculate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='calculator-wrapper'>
        <Celcius />
      </div>
    );
  }
}

ReactDOM.render(<Calculate />, document.querySelector('.calc-container'));