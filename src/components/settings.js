import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowAltCircleDown,  faArrowCircleUp,} from "@fortawesome/free-solid-svg-icons";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { breakLength, sessionLength, plusOneBreak, lessOneBreak, plusOneMinutos, lessOneMinutos} = this.props;
    return (
      <div className="control">
        <div className="breakControl">
          <span className='arrow' onClick={lessOneBreak} >
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleDown}  />
          </span>
          <span className='spanInfo'>Breake Length: {breakLength}</span>
          <span className='arrow'  onClick={plusOneBreak}>
            {" "}
            <FontAwesomeIcon icon={faArrowCircleUp}/>
          </span>
        </div>

        <div className="sessionControl">
          <span className='arrow' onClick={lessOneMinutos}>
            {" "}
            <FontAwesomeIcon icon={faArrowAltCircleDown}  />
          </span>
          <span className='spanInfo'>Session Length: {sessionLength}</span>
          <span className='arrow'onClick={plusOneMinutos}>
            {" "}
            <FontAwesomeIcon icon={faArrowCircleUp}  />
          </span>
        </div>

      </div>
    );
  }
}

export default Settings;
