import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set the main Style
      objStyle: { backgroundColor: '#edb31c' },
      newColorName: '',
      newColorColor: ''
    };
  }
  colors = [
    { id: 1, name: 'violet', color: '#f5aafb' },
	{ id: 2, name: 'marin blue', color: '#2b4d99'},
	{ id: 3, name: 'pale green', color: '#aafbde'},
	{ id: 4, name: 'vermillon', color: '#fe532e'},
	{ id: 5, name: 'sky blue', color: '#82c4fa' },
	{ id: 6, name: 'salmon', color: '#fb8b8b'}
  ]

  changeColor = (color) => {
    this.setState({
      objStyle: {
        backgroundColor: color
      }
    });
  }

  changeNewColor = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewcolor = (e) => {
    e.preventDefault();
    const newColorMade = {
      id: this.colors.length + 1,
      name: this.state.newColorName,
      color: this.state.newColorColor
    }
    this.colors = [
      ...this.colors,
      newColorMade
    ];
    this.setState({newColorName: '', newColorColor: ''});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <i className='fa fa-arrow-up'></i>
          </div>
          <h1>This logo is not a button anymore..</h1>
        </div>
        <section>

          <h2 style={{
            color: this.state.objStyle.backgroundColor
          }} className="App-intro">
            Change the style by clicking the buttons there !
          </h2>
          <div>
            <i className="fa fa-arrow-down" style={{
              color: this.state.objStyle.backgroundColor
            }}></i>
          </div>

          {/* BUTTONS LIST */}
          <ul>
            {this.colors.map(item => <li key={item.id}>
              <button style={{
                backgroundColor: item.color
              }} onClick={() => this.changeColor(item.color)}>{item.name}</button>
            </li>)}
          </ul>

          {/* FORM TO ADD BUTTONS */}
          <form style={{ borderColor: this.state.objStyle.backgroundColor}}>
            <p style={{color: this.state.objStyle.backgroundColor}}>
				Add a new color :
			</p>
            <p>
              <label htmlFor="newColorName">Name :</label>
              <input
				  type="text"
				  name="newColorName"
				  style={{color: this.state.objStyle.backgroundColor}}
				  onChange={this.changeNewColor}
				  value={this.state.newColorName}/>
            </p>
            <p>
              <label htmlFor="newColorColor">Color (HEX) :</label>
              <input
				  type="text"
				  name="newColorColor"
				  style={{color: this.state.objStyle.backgroundColor}}
				  onChange={this.changeNewColor}
				  value={this.state.newColorColor}/>
            </p>
            <button
				style={{ color: this.state.objStyle.backgroundColor }}
				onClick={this.addNewcolor}
				>Add new color !</button>
          </form>
        </section>

        <footer style={this.state.objStyle}>
          <p>Powered with Create React App</p>
        </footer>
      </div>
    );
  }
}

export default App;
