import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ColorList from './ColorList.js';
import {ChromePicker} from 'react-color';
import TitleForm from './Form/TitleForm.js';
import SecondInput from './Form/SecondInput.js';
import FirstInput from './Form/FirstInput.js';
import Button from './Form/Button.js';
import Footer from './footer/Footer.js';

class App extends Component {
  state = {
      // Set the main Style
    objStyle: {
      backgroundColor: '#edb31c'
    },
    colors : [
        { id: 1, name: 'violet', color: '#f5aafb'},
        { id: 2, name: 'marin blue', color: '#2b4d99'},
				{ id: 3, name: 'pale green', color: '#aafbde'},
				{ id: 4, name: 'vermillon', color: '#fe532e'},
				{ id: 5, name: 'sky blue', color: '#82c4fa'},
				{ id: 6, name: 'salmon', color: '#fb8b8b'}
    ],
    newColorName: '',
    newColorColor: ''
  };


  changeColor = (color) => {
    this.setState({
      objStyle: {
        backgroundColor: color
      },
    });
  }

  changeNewColor = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeColorPicker = (color, event ) => {
    this.setState({newColorColor: color.hex});
  }

  addNewcolor = (e) => {
    e.preventDefault();
    const newColorMade = {
      id: this.state.colors.length + 1,
      name: this.state.newColorName,
      color: this.state.newColorColor
    };
    this.setState({
      colors : [...this.state.colors, newColorMade],
      newColorName: '',
      newColorColor: ''
    });
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
          <ColorList colors={this.state.colors} changeColor={this.changeColor} />



          {/* FORM TO ADD BUTTONS */}
          <form
            onSubmit={this.addNewcolor}
            style={{ borderColor: this.state.objStyle.backgroundColor }}>
            <TitleForm label={'frere change la couleur'} />
            <FirstInput
              newColorColor={this.state.newColorColor}
              changeNewColor={this.changeNewColor}
              newColorName={this.state.newColorName}
             />
             <SecondInput
               backgroundColor={this.state.objStyle.backgroundColor}
               changeNewColor={this.changeNewColor}
               newColorColor={this.state.newColorColor}
             />

            <ChromePicker
          onChangeComplete={this.changeColorPicker}
          />
            <Button
          backgroundColor={this.state.objStyle.backgroundColor }
          text={'Add new button'}
        />
          </form>

        </section>
        <Footer
        objStyle={this.state.objStyle}
        FooterText={'powered with create react app'}
      />
      </div>
    );
  }
}

export default App;
