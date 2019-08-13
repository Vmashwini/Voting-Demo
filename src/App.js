import React from "react";
import PinInput from "react-pin-input";
import "./App.css";
import skylogo from "./images/skylogo.png"
import {Redirect} from 'react-router-dom';
class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      signin: false,
      //password: [1,2,3,4],
      //confirmed: false
    };
    
  }
  

  onChange = value => {
    this.setState({ value });
  };

  onClear = () => {
    this.setState({
      value: ""
    });
    this.pin.clear();
  };
  onSubmit = () => {
    
    if(this.state.value === '1234')
    {
      this.onSuccess();
      window.location.href = "/moduleOne"
    }
    else{
      this.onFailure();
    }
  }
  onSuccess = () => {
    alert('You have successfully logged in!')
  }
  onFailure = () => {
    alert("Access Denied! Please try again")
  }
  render() {
    const { value } = this.state;
    const styles = {
      main: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      },
      buttons: {
          borderRadius: '2px',
          display: 'inline-block',
          color: 'white',
          cursor: 'pointer',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
          padding: '8px 24px',
          opacity: 1
      },
      buttonStyle: {
        borderColor: '#3457dc',
        backgroundColor: '#3457dc'
      },
      PinPrompt: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: '25px'
      },
      
    }
    return (
      
      <div style={styles.main}>
        <img className="skylogo-nav" src={skylogo} alt="skylogo" width="50"/>
        <div style = {styles.PinPrompt}>Enter a passcode</div>
        <PinInput
          length={4}
          focus
          secret
          ref={p => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
          enablesReturnKeyAutomatically={false}
          style={styles.input}
          inputFocusStyle={{borderColor: 'red'}}
          inputStyle={{borderColor: 'blue'}}
        />
        <div style={styles.buttons}>
          <button onClick={this.onClear} style={styles.buttonStyle} className="btn">Clear</button>
          &nbsp;
          <button onClick={this.onSubmit} style={styles.buttonStyle} className="btn">Submit</button>
        </div>
      </div>
    );
  }
}
export default App;
