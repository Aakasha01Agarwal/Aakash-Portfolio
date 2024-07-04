import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "Hardware Efficient Neural Network": {
        desc:
          "A novel neural network architecture with Convolutional (ConvD) and Recurrent (RU) Layer blocks based on iterative pruning and training to achieve high efficiency while maintaining accuracy.",
        techStack: "Python, PyTorch, Docker",
        open: "https://github.com/Aakasha01Agarwal/ITU-Lightning-Fast-Modulation-Classification-with-Hardware-Efficient-Neural-Networks-Submission",
        details: [
          "Designed and implemented CNN-based AMC techniques for complex-valued temporal radio signal domains.",
          "Implemented iterative pruning techniques to optimize neural network efficiency.",
          "Acheived 21.55 times less complex models than baseline by employing quantized CNN, low precision mathematics, and quantization-aware CNN training to address large model sizes and floating-point weights/activations",
          "Developed QMCNet and RUNe with 92.01% and 95.36% less multiply-accumulate bit operations, 61.39% and 29.97%less activation bits, and 87.58% and 98.22% less weight bits, respectively, than the 8-bit quantized baseline."

        ]
      },
      "Eye Tumour Classification Application using Deep Neural Networks": {
        desc:
          "An android mobile application for eye disease detection.",
        techStack: "Python, Tensorflow-lite, Android",
        open: "/assets/eyetumour.pdf",
        details:["In the Computer Vision Phase I Implemented EfficientNet v2 architecture on the New York Eye Cancer Center database for image classification to achieve accuracy over 97%.",
"Several data augmentation techniques (shearing, zooming, flipping, scaling, rotation, etc) were used for robust learning.",
"For the mobile application development phase I started by quantizing the model to 8 bits of precision to achieve 3x lower latency, for deployment on edge device .",
" Tensorflow-lite is used to convert the model into edge device suitable and is then integrated in an android application."
,"Accuracy achieved on the mobile application is 96% which is due to loss in the computational complexity",         
        ]
      },
      "End-to-End Uber Ride Fare Price Prediction System with CI/CD Pipeline": {
        desc:
          "Developed and deployed an end-to-end machine learning pipeline for predicting Uber fares, including data ingestion, transformation, model training and prediction.",
        techStack: "Python, scikit-learn, Amazon AWS, Github actions",
        details: ["Developed and deployed an end-to-end machine learning pipeline for predicting Uber fares, including data ingestion, transformation, model training and prediction",
          "Implemented and evaluated multiple regression algorithms to find the best-performing model and used hyper-parameters tuning techniques like grid search and cross-validation to improve model performance and generalization",
          "Implemented a Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions for automating thebuild, testing, and deployment processes on Amazon Elastic Container Registry (ECR) and used Amazon Elastic Compute Cloud (EC2) instance, for hosting of the ML model."
        ]
      },

      "e-VorTar:  Efficient Visual Odometry for Real Time Application in ROS2 ": {
        desc:
          "A novel method for implementing the Stochastic Gradient Descent Algorithm in a decentralized fashion on various worker nodes. For efficient communication between the workers, compression techniques such as quantization are used.",
        techStack: "C++14, ROS2-foxy, KITTI Odometry Dataset,",
        details: ["Implemented E-VORTAR, an efficient Visual Odometry system using C++14 and ROS2 Foxy, aimed at real-time application in autonomous systems which is an end-to-end system for visual odometry, integrating data streaming from the KITTI Odometry Dataset into ROS2 topics.",
          "Evaluated and compared different detectors (e.g., AKAZE, BRISK, Shi-Tomasi) and descriptors for feature estimation and matching. Selected the Shi-Tomasi algorithm for it's computational efficiency, achieving keypoint matching in approximately 30 milliseconds per frame. ",
          "Utilized the Ceres solver for nonlinear least squares optimization to predict transformations between consecutive poses, achieving robust motion estimation achiveing an average translational RMSE of 2.5% and rotational error of 0.012 degrees per meter across sequences 00 (4540 frames) and 02 (4660 frames) of the KITTI Dataset."

        ]},

      "Decentralized Stochastic Optimization with Gossip and Compressed Communication": {
        desc:
          "A novel method for implementing the Stochastic Gradient Descent Algorithm in a decentralized fashion on various worker nodes. For efficient communication between the workers, compression techniques such as quantization are used.",
        techStack: "Python, Federated Learning, Object Oriented Programming, Github actions",
        details: ["Implemented Gossip Algorithms for Average Consensus, ensuring convergence under communication constraints for large-scale machine learning models, enhancing scalability and data privacy.",
          "Developed Communication-Efficient Methods for Decentralized SGD, reducing bandwidth usage by compressing data exchanges",
          "Analyzed and optimized algorithms using spectral analysis and convergence proofs."
        ]
      },

      
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 25 }} />
                    </div>
                    <ExternalLinks openLink={projects[key]["open"]} />
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <ul className="card-details">
                    {projects[key]["details"].map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
