import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		// Set the Style 1
      backgroundColor1: {
        backgroundColor: '#edb31c'
      },
      color1: {
        color: '#fff'
      },
	  // Set the style 2
      backgroundColor2: {
        backgroundColor: '#1b6881'
      },
      color2: {
        color: '#edb31c'
      },
	  // Set the main Style
      mainColor: {
        backgroundColor: '#edb31c',
        color: '#fff'
      },
	  // Set the clicked state for the button
      clicked: false
    };
  }

  // Check if the state clicked is true or false
  handleClickBtn = (e) => {
    e.preventDefault();
    // If it's true apply the first Style
    if (this.state.clicked) {
      this.setState({
        mainColor: {
          backgroundColor: this.state.backgroundColor1.backgroundColor,
          color: this.state.color1.color
        }
      });
      // If not apply the second style
    } else {
      this.setState({
        mainColor: {
          backgroundColor: this.state.backgroundColor2.backgroundColor,
          color: this.state.color2.color
        }
      });
    }
    // Change the clicked state to be the opposite of precedent state
    this.setState({
      clicked: !this.state.clicked
    });
  }

  // ======= Change all the states styles

  // Style 1
  changeBackgroundColor1 = (e) => {
    this.setState({
      backgroundColor1: {
        backgroundColor: e.target.value
      }
    });
  }

  changeColor1 = (e) => {
    this.setState({
      color1: {
        color: e.target.value
      }
    })
  }

  // Style 2
  changeBackgroundColor2 = (e) => {
    this.setState({
      backgroundColor2: {
        backgroundColor: e.target.value
      }
    });
  }

  changeColor2 = (e) => {
    this.setState({
      color2: {
        color: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.mainColor}>
          <button onClick={this.handleClickBtn}>
            <img src={logo} className="App-logo" alt="logo"/>
          </button>
		  <div><i className='fa fa-arrow-up'></i></div>
          <h1>This logo is also a button...click it now !</h1>
        </div>
        <h2 style={{color :this.state.mainColor.backgroundColor}} className="App-intro">
          React state training
	  </h2>
        <section>
          <div className="colorController">
            <h3>Style 1</h3>
            <div className="colorEntry">
              <label htmlFor="">Set Background Color 1 :</label>
              <input
				  type="text"
				  style={this.state.backgroundColor1}
				  value={this.state.backgroundColor1.backgroundColor}
				  onChange={this.changeBackgroundColor1}
			  />
            </div>
            <div className="colorEntry">
              <label htmlFor="">Set Text Color 1 :</label>
              <input
				  type="text"
				  style={{ backgroundColor: this.state.color1.color }}
				  value={this.state.color1.color}
				  onChange={this.changeColor1}
			  />
            </div>
          </div>
          <div className="colorController">
            <h3>Style 2</h3>
            <div className="colorEntry">
              <label htmlFor="">Set Background Color 2 :</label>
              <input
				  type="text"
				  style={this.state.backgroundColor2}
				  value={this.state.backgroundColor2.backgroundColor}
				  onChange={this.changeBackgroundColor2}
			  />
            </div>
            <div className="colorEntry">
              <label htmlFor="">Set text Color 2 :</label>
              <input
				  type="text"
				  style={{ backgroundColor: this.state.color2.color }}
				  value={this.state.color2.color}
				  onChange={this.changeColor2}
			  />
            </div>
          </div>
        </section>

        <footer style={this.state.mainColor}>
          <p>Powered with Create React App</p>
        </footer>
      </div>
    );
  }
}

export default App;
