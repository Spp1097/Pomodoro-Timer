import React from "react";
import "./App.css";
import Titulo from "./components/title";
import Settings from "./components/settings";
import MainTimmer from './components/timer'
import PlayPauseReset from './components/playPauseReset'
import { faPause } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      break: 5,
      session:25,
      minutos: 25,
      segundos: '00',
      change:true,
      current: 'Session'
     
    };
  }
componentDidUpdate(prevProps,prevState){
 
}

  plusOneBreak = ()=>{
    if(this.state.break >= 1){

      this.setState({
        break: this.state.break + 1
      })
     
    }
  }
  lessOneBreak = ()=>{
    if(this.state.break > 1){

      this.setState({
        break: this.state.break - 1
      })
    }
    
  }
  plusOneMinutos = ()=>{
    if(this.state.minutos >= 1){
      this.setState({
        minutos: this.state.minutos + 1,
        session: this.state.session  +1 
      })

    }
   
  }
  lessOneMinutos = ()=>{
    if(this.state.minutos > 1){

      this.setState({
        minutos: this.state.minutos - 1,
        session: this.state.session -1 
      })
    }
    
  }

  reset = () =>{
    this.setState({
      minutos:25,
      segundos:'00',
      auxSegundos:'00'
    })
  }
  play =()=>{
    this.setState({
      segundos:59,
      minutos: this.state.minutos -1});

    setInterval(()=>{
      if(this.state.segundos>0){
         this.setState({
           segundos : this.state.segundos -1 
         })
      }
      else{
        this.setState({
          segundos: 59,
          minutos : this.state.minutos -1 
        })
      }
      if(this.state.minutos===0 && this.state.segundos===0){
        if(this.state.change===true){
          this.setState({
            current: 'Break',
            minutos: this.state.break-1,
            segundos : 59,
            change: false
          })
        }else{
          this.setState({
            current: 'Session',
            minutos: this.state.session-1,
            segundos : 59,
            change:true
          })
        }
      }
      
      
      
    },100)

   
  }

  render() {
   
    return (
      <div className="App">
        <Titulo />
        <Settings breakLength={this.state.break} 
        sessionLength={this.state.session} 
        plusOneBreak = {this.plusOneBreak.bind(this)}
        lessOneBreak = {this.lessOneBreak.bind(this)} 
        plusOneMinutos = {this.plusOneMinutos.bind(this)}
        lessOneMinutos = {this.lessOneMinutos.bind(this)}
        />
        <MainTimmer minutes = {this.state.minutos} segundos={this.state.segundos}
         current = {this.state.current}/>
        <PlayPauseReset reset = {this.reset} play = {this.play}/>
      </div>
    );
  }
}

export default App;
