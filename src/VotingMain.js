import React, {Component} from "react"
import Voting from "./Voting"

import Moment from "react-moment";
import "./Main.css"
  
  class VotingMain extends React.Component {
    render(){
      const styles = {
        main: {
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
          height: '100vh',
        },
      }
      
      return (
        <div style={styles.main}>
          <Voting />
        </div>
      )
    }
  }
  
export default VotingMain