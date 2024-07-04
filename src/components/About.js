import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a second year <b>masters student</b> at
        <a href="https://www.upenn.edu/" target="_blank"> University of Pennsylvania</a>, majoring in Electrical Engineering. I like to research at the intersection of 
        Artificial Intelligence and Wireless Communication. Currently, I am fascinated by hardware efficient algorithms for machine learning. 
      You can find my <a href="/Aakash-Portfolio/assets/cv.pdf" target="_blank"><b>CV</b></a> here.</p>
    );
    const two = (
      <p>
        Outside of work, you will find me either playing guitar, playing valorant or in the gym. 
      </p>
    );

    const tech_stack = [
      "Python",
      "Tensorflow",
      "Pytorch",
      "Pandas",
      "MATLAB",
      "C++",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies that I am comfortable with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Aakash Agarwal"  src= "/Aakash-Portfolio/assets/me2.jpg" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
