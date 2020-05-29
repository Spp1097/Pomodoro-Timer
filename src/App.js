import React from "react";
import "./App.css";
import Titulo from "./components/title";
import Settings from "./components/settings";
import MainTimmer from './components/timer'
import PlayPauseReset from './components/playPauseReset'
import beep from './sounds/beep-01a.mp3';

 
var startTimer;
let running = false;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      break: 5,
      session:25,
      minutos: 25,
      segundos: 0,
      change:true,
      current: 'Session'
     
    };
  }
componentDidUpdate(prevProps,prevState){
 
}

  plusOneBreak = ()=>{

    if(running===false){

      if(this.state.break >= 1 && this.state.break <60){
  
        this.setState({
          break: this.state.break + 1
        })
       
      }
    }
  }
  lessOneBreak = ()=>{
    if(running===false){

      if(this.state.break > 1){
  
        this.setState({
          break: this.state.break - 1
        })
      }
      
    }
  }
  plusOneMinutos = ()=>{
    if(running===false){

      if(this.state.minutos >= 1 && this.state.minutos <60){
        this.setState({
          minutos: this.state.minutos + 1,
          session: this.state.session  +1 
        })
  
      }
     
    }
  }
  lessOneMinutos = ()=>{
    if(running===false){

      if(this.state.minutos > 1){
  
        this.setState({
          minutos: this.state.minutos - 1,
          session: this.state.session -1 
        })
      }
      
    }
  }

  reset = () =>{
    clearInterval(startTimer)
    this.setState({
      minutos:this.state.session,
      current: 'Session',
      segundos: 0
      
    })
    running=false;

    if(!document.querySelector('#play').classList.contains("on")){
      document.querySelector('#play').classList.add("on");
      document.querySelector('#play').style.cursor = 'pointer';
      
    }
  }
  play =()=>{
  
   if(document.querySelector('#play').classList.contains("on")===true){

     if(this.state.session===this.state.minutos){
 
       this.setState({
         segundos:59,
         minutos: this.state.minutos -1});
     }
 
    startTimer =  setInterval(()=>{
      
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
           document.getElementById('beep').play();
           
           
         
       }
       
       
       
       
     },1000)

   }
    running=true;
    document.querySelector('#play').classList.remove("on");
    document.querySelector('#play').style.cursor = 'default';
   

   
  }

  pauseTimer = () =>{
    clearInterval(startTimer);
    document.querySelector('#play').classList.add("on");
    document.querySelector('#play').style.cursor = 'pointer';
   

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
        <PlayPauseReset reset = {this.reset} play = {this.play} pause = {this.pauseTimer}/>
        <audio  id ='beep' src={beep}></audio>
      </div>
    );
  }
}

export default App;
