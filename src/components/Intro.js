import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, I am "}
            <span className="intro-name">{"Aakash"}</span>
            
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Researcher x Engineer</div>
          <div className="intro-desc">
             I am a graduate student at UPenn. I like researching and learning new things. Also, I have a mechanical keyboard so you know I am serious about my programming. 
          </div>
          <a
            href="mailto:aakash24@seas.upenn.edu"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
