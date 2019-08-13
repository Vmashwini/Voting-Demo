import React, {Component} from "react"
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import skylogo from "./images/skylogo.png"
import {Button, Checkbox, Form, Icon, Input, message, Slider, Switch} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {Camera} from "./camera/Camera";

class Voting extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
        hover: false,
        image: false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    handleHover(){
        this.setState({hover:!this.state.hover});
    }
    onCapture() {
        this.setState({image: true})
        console.log(this.state.image)
    }
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#0073c5',
            width: '100%',
            color: 'white',
            fontFamily:'Lobster',
          },
          logo: {
            margin: '0 auto',
            alignItems: 'center',
          },
          container2: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
          logout: {
            color: '#0073c5',
            position: 'absolute',
            bottom: '10%',
            margin: 'auto',
            right: '2%',
            fontFamily: 'Times New Roman, Times, serif'
           },
           NavContainer: {
            opacity: 0,
            animation: '1s appear forwards',
            animationDelay:this.props.delay,
          },
          menuItem:{
            fontFamily:`'Open Sans', sans-serif`,
            fontSize: '1.2rem',
            padding: '1rem 0',
            margin: '0 5%',
            cursor: 'pointer',
            color: this.state.hover? 'red':'white',
            transition: 'color 0.2s ease-in-out',
            animation: '0.5s slideIn forwards',
            animationDelay:this.props.delay,
    
          },
          line: {
            width: '90%',
            height: '1px',
            background: 'white',
            margin: '0 auto',
            animation: '0.5s shrink forwards',
            animationDelay:this.props.delay,
            
          },
          camera: {
            height: '100vh',
            top: '60%',   
            left: '50%',
            WebkitTransform: 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)',
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          },
          CameraPrompt: {
            marginBottom: 10,
            textAlign: 'center',
            fontSize: '25px'
          }
        }
      const menu = ['Module One','Module Two','Module Three']
      const uploadImage = async file => {
          const Data = new FormData();
          Data.append('file', file)
      }
      const Items = menu.map((val, index)=> {
          return(
              <div
                key={index}
                delay={`${index * 0.1}s`}
                onClick={()=> {this.handleLinkClick();}}
              >
                <div style={styles.NavContainer}>
                    <div 
                        style={styles.menuItem}
                        onMouseEnter={()=>{this.handleHover();}}
                        onMouseLeave={()=>{this.handleHover();}}
                        >
                        {val}
                    </div>
                    <div style={styles.line}/>
                </div>
              </div>
          )
      })
      return(
        <div>
          <div style={styles.container}>
            <Link to="/"><Button color='primary' className='float-right' style={styles.logout}>Log Out</Button></Link>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div style={styles.logo}><img className="skylogo-nav" src={skylogo} alt="skylogo" width="50"/></div>
            </div>
            <Menu open={this.state.menuOpen} style={styles.container2}>
            {Items}
            </Menu>
            <div style={styles.camera}>
                <div style = {styles.CameraPrompt}>Image Capture</div>
                <Button onClick={()=> {this.onCapture();}}>Start capturing..</Button>
                <div>
                    {this.state.image === true ? <Camera sendFile={uploadImage}/> : null}
                </div>
            </div>
        </div>
      )
    }
  }
  
  export default Voting