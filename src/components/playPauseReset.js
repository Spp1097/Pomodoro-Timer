import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause,faSyncAlt} from "@fortawesome/free-solid-svg-icons";






class PlayPauseReset extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {reset,play,pause} = this.props;
        return ( 
            <div className='playPauseReset'>
                <span className="playButton">
                <FontAwesomeIcon id='play' icon={faPlay} className='controls on' onClick={play}  />

                </span>
                <FontAwesomeIcon icon={faPause} className='controls' onClick={pause}/>
                <FontAwesomeIcon icon={faSyncAlt} className='controls' onClick={reset}/>
            </div>

         );
    }
}
 
export default PlayPauseReset;