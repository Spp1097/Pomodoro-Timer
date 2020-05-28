import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause,faSyncAlt} from "@fortawesome/free-solid-svg-icons";






class PlayPauseReset extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {reset,play} = this.props;
        return ( 
            <div>
                <FontAwesomeIcon icon={faPlay} className='controls' onClick={play} />
                <FontAwesomeIcon icon={faPause} className='controls'/>
                <FontAwesomeIcon icon={faSyncAlt} className='controls' onClick={reset}/>
            </div>

         );
    }
}
 
export default PlayPauseReset;