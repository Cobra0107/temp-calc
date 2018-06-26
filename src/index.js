import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Component import.
import Celcius from './components/celsius';
import Farenheit from './components/farenheit';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "",
      cScale: 'c',
      fScale: 'f',
      temperature: 0,
    };
  }

  handleFarenheit = (temperature, scale) => {
    this.setState({temperature, scale});
  }

  handleCelcius = (temperature, scale) => {
    this.setState({temperature, scale});
  }

  convert = (temperature, convertFunc) => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) {
      return '';
    }
    const change = convertFunc(temp);
    const roundup = (change * 1000) / 1000;
    console.log("final: " + roundup);   
    return roundup.toString();
  }

  toFarenheit = (celsius) => {
    console.log("celsius" + celsius);
    return (celsius * 9 / 5) + 32;
  }

  toCelsius = (farenheit) => {
    console.log("faren" + farenheit);
    return (farenheit - 32) * 5 / 9;
  }

  render() {
    const scale = this.state.scale;
    console.log(scale);
    const temperature = this.state.temperature;
    const celsius = scale === this.state.fScale ? this.convert(temperature, this.toCelsius) : temperature;
    const farenheit = scale === this.state.cScale ? this.convert(temperature, this.toFarenheit) : temperature;

    return(
      <div className='calculator-wrapper'>
        <div className='calculator'>
          <Celcius 
            // value = { this.state.temperature }
            temperature = { celsius }
            scale = { this.state.fScale }
            onChange={ this.handleCelcius } 
          />
          <Farenheit 
            // value = { this.state.temperature }
            temperature = { farenheit } 
            scale = { this.state.cScale }
            onChange = { this.handleFarenheit }
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculate />, document.querySelector('.calc-container'));