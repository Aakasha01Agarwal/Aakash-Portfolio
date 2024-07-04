import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "University of Pennsylvania": {
      jobTitle: "Research Assistant @",
      duration: "March 2024 - PRESENT",
      desc: [
        " I am currently responsible for developing a wireless readout system for the testing of soil sensor. We are building a interrogation system for passive soil sensor using USRP B200 mini. A small \
        interrogating signal is transmitted which interacts with the resonator in the sensor and is then transmitted back. ", 
        "The goal of our research is to develop a stand-alone system that receives these signals and make intelligent decisions about the soil conditions using the data."
      ]
    },
    "Linkoping University": {
      jobTitle: "Research Intern @",
      duration: "Jan 2023 - Jun 2023",
      desc: [
        " Developed a novel broadcast method based on random activation of network nodes for solving decentralized stochastic\
          gradient descent algorithm.", 
        "Implemented the algorithm and compared different quantization techniques for compressed communication."
        ]
    },
    "York University": {
      jobTitle: "MITACS reserach intern @",
      duration: "May 2022 - Aug 2022",
      desc: [
        "Developed an efficient caching policy using Proximal Policy Optimization (PPO) in an IoT Network based scenario, which\
         helps meet the standard quality of service requirement while bypassing the limitations of the IoT network",
         "Increased the caching efficiency of the edge node by over 50% compared to currently used LRU and LFU methods"
        ]
    },

    "IIIT Raipur": {
      jobTitle: "Researcher @",
      duration: "May 2022 - Aug 2022",
      desc: [
        "Built a hardware efficient neural network model for modulation classification in communication systems",
        " Proposed novel Deep Learning architecture using multiple blocks of convolutional and RNN layers", 
        "Achieved over 99% compression in the model complexity by implementing iterative pruning and low quantization based\
        training methodology"
        ]
    },

    "IIIT Bangalore": {
      jobTitle: "Summer intern @",
      duration: "May 2022 - Aug 2022",
      desc: [
        "Implemented the Expectation-Maximization algorithm to estimate the wireless channel in a semi-blind manner in ambient backscatter systems  for Joint parameter estimation and symbol detection in OFDM-based IoT Network:"
        ]
    },


   
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
