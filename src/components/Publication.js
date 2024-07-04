import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Publications.css';
import { useState } from 'react';
// G:\portfolio\Gazi-main\public\assets\faudig.png
// import myimag from '../public/assets/faudig.png';
const publications = [
    {
      id: 1,
      title: 'Low-Precision Deep Learning based Automatic Modulation Recognition System',
      authors: 'S. Kumar, A. Agarwal, N. Varshney, R. Mahapatra,',
      description: 'Convolution Neural Network (CNN) - based deep learning models have recently been employed in Automated \
Modulation Classification (AMC) systems, with excellent results. However, hardware deployment of these CNN‑based AMC \
models is very difficult due to their large size, floating point weights and activations, and real‑time processing requirements \
in hardware such as Field Programmable Gate Arrays (FPGAs). In this study, we designed CNN‑based AMC techniques for \
complex‑valued temporal radio signal domains and made them less complex with a small memory footprint for FPGA imple‑ \
mentation. This work mainly focuses on quantized CNN, low precision mathematics, and quantization‑aware CNN training to \
overcome the problem of larger model sizes, floating‑point weights, and activations. Low precision weights, activations, and \
quantized CNN, on the other hand, have a considerable impact on the accuracy of the model. Thus, we propose an iterative \
pruning‑based training mechanism to maintain the overall accuracy above a certain threshold while decreasing the model \
size for hardware implementation. The proposed schemes are 21.55 times less complex and achieve at least 1.6% higher \
accuracy than the baseline. Moreover, results show that our convolution layer‑based Quantized Modulation Classification \
Network (QMCNet) with pruning has 92.01% less multiply‑accumulate bit operations (bit_operations), 61.39% less activa‑ \
tion bits, and 87.58% less weight bits than the 8 bit quantized baseline model whereas the quantized and pruned Residual‑Unit \
based model (RUNet) has 95.36% less bit_operations, 29.97% less activation bits and 98.22% less weight bits than the 8 bit \
quantized baseline models.',
      conference: 'ITU J-FET special issue on AI in Wireless Communication, 2022',
      paper: "/Aakash-Portfolio/assets/amc.pdf",
      paperlink: 'https://www.itu.int/pub/S-JNL-VOL3.ISSUE2-2022-A18',
      image: '/Aakash-Portfolio/assets/amc.png' // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Edge Caching Based on Deep Reinforcement Learning',
      authors: 'F. Nikia, P. Wang, A. Agarwal, Z. Wang',
      description: 'The use of mobile apps has caused a lot of data to be \
transmitted repeatedly, which has put a strain on the networks. \ One solution to this problem is caching, which stores data closer \  to the user to reduce data transfer and delay. Typically, when \ designing a caching policy, only a limited set of file features,\ such as freshness and popularity, are taken into account in the\
majority of prior studies. Nevertheless, it is crucial to incorporate factors like importance and size since highly valuable files may hold more significance compared to freely accessible ones. In this paper, we modeled caching problem using Semi-Markov \  Decision Process that considers file features such as popularity, \  lifetime, size, and importance. Then, we used a Reinforcement \  Learning algorithm called Double Deep Q-Learning to solve the \  Semi-Markov Decision Process. Simulation results show that the \  proposed method outperforms an existing caching method in  terms of cache hit rate and total utility in various settings. This method is the first to comprehensively consider all file features, making it more practical for real-world scenarios.',
      image: '/Aakash-Portfolio/assets/edge.png', // Replace with actual image URL
      paper: "/Aakash-Portfolio/assets/edge.pdf",
      paperlink:'https://ieeexplore.ieee.org/document/10233394',
      conference: '2023 IEEE/CIC International Conference on Communications in China (ICCC)'
    },
    {
        id: 3,
        title: 'FauDigPro: A Machine Learning based Fault Diagnosis and Prognosis System for Electrocardiogram Sensor',
        authors: 'A. Agarwal, D. Das, A. Sinha,',
        description: 'Nowadays, sensors play a vital role in monitoring many appliances in various sectors, including the medical field.\
                    The electrocardiogram (ECG) is a test used to check the heart’s electric activity, using the ECG sensors. These sensors can\
                    get faulty and cause serious havoc. In this paper, a real-time \
                    classification and prognostics system is proposed that could \
                    classify between normal and faulty ECG signals and could even \
                    predict whether the sensor will get faulty based on previous data. \
                    Drift and bias fault are considered in this study. Four different \
                    machine learning algorithms, the Support Vector Machine, KNearest Neighbour, Decision Tree and Naive Bayes, are used\
                    and compared for classification purposes. Three statistical timedomain features, mean of the signal, energy of the signal and the\
                    peak-to-peak value of the signal, are used as the feature set in this \
                    study. The autoregression algorithm is used for fault prognosis.\
                    To replicate a practical scenario in an industrial system, an \
                    unbalanced dataset is generated having a larger number of \
                    normal signals than faulty signals. The model is implemented \
                    on raspberry pi for low resource hardware implementation. The \
                    performance of the classifiers is evaluated using different metrics.\
                    From the results, we can see that the KNN algorithm achieves the \
                    best accuracy of 95% which is suitable for real-time deployment. \
                    We also see that a very good result in the case of fault prognosis is \
                    achieved owing to the fact that the faults introduced are linear in \
                    nature. Different Root Mean Squared Error-values are presented \
                    in the paper for both faults.',
        image: "/Aakash-Portfolio/assets/faudig.png", // Replace with actual image URL
        conference:' IEEE India ICMIAM 2022',
        paperlink: 'https://ieeexplore.ieee.org/document/10146898', 
        paper: "/Aakash-Portfolio/assets/faudigpro.pdf",
      },
      {
        id: 4,
        title: 'mDLSpiro: Hardware Efficient Deep Learning based Mobile Spirometry',
        authors:'A. Agarwal, D. Das',
        description: 'Respiratory diseases such as chronic pulmonary \
                    disease (COPD), asthma etc., are diseases related to the lungs \
                    which usually cause difficulty in breathing. The most common of \
                    all the diseases is COPD. Spirometry is the standard diagnostic \
                    test for diagnosing COPD. Like every other disease, COPD \
                    negatively impacts the sufferer’s life, which worsens over time. \
                    This requires them to have regular spirometry tests, which are \
                    time-consuming or to buy expensive portable devices. Therefore \
                    either time or money, both are affected and highly utilized. \
                    Since there has been much advancement in the computational \
                    power of smartphones, in this work, we try to exploit this and, \
                    using built-in microphones, provide a cost-effective alternative \
                    to traditional spirometry. This paper proposes a classification \
                    system that could classify if the person has COPD or not based \
                    on the breathing audio signal. The convolutional neural network \
                    is trained and evaluated on the Respiratory Sound Database \
                    (ICBHI 2017 database). The model is then compressed using the \
                    post-training quantization technique so that it can be deployed on \
                    an edge device (smartphone, for instance). A training accuracy \
                    of 99.05% and a testing accuracy of 95.56% is achieved. The \
                    model size is reduced from an initial 44.822 Megabytes to 11.207 \
                    Megabytes which is a four times reduction.',
        paper: "/Aakash-Portfolio/assets/mdlspiro.pdf",
        image: '/Aakash-Portfolio/assets/mdlspiro.png', // Replace with actual image URL
        conference:'INDISCON 22 IEEE India Council International Sub-Sections Conference',
        paperlink: 'https://ieeexplore.ieee.org/document/9862871'
      },
      {
        id: 5,
        title: 'AStERisk*:Automatic Mental Stress Detection based on Electrocardiogram forReal-Time Heart Risk Prediction using 1-D CNN',
        authors: 'S. Alluri, A. Agarwal, A. Varshney, D. Das',
        description: 'Mental health is highly affected by stress. Sometimes mental stress is the primary cause of serious \
                    cardiac problems. An electrocardiogram is widely \
                    used for monitoring the activity of the heart. The \
                    effect of mental stress on the heart is reflected in \
                    the ECG, which makes ECG vulnerable information to detect mental stress. This paper suggests \
                    an ECG-based Mental Stress Detection system \
                    and extending it for heart risk prediction. We used \
                    a 1-D convolution neural network model trained \
                    and evaluated on the ECG data present in the WESAD data set. The proposed 1-D CNN model \
                    achieved an area under the ROC curve of 0.9636. \
                    Our work is currently in progress. We are working \
                    on a heart risk prediction model and deployment \
                    of developed models in IoT devices powered by \
                    differential privacy for real-time monitoring and \
                    to keep users’ medical data private.', 
        conference :'ICML workshop on Computer Approaches to Mental Health',
        paper: "/Aakash-Portfolio/assets/mentalstress.pdf",
        paperlink: 'https://drive.google.com/file/d/18hx2I3EaM45tjN7xpn2lZVKSiDgj5Utw/view',
        image: '/Aakash-Portfolio/assets/asterisks.png' // Replace with actual image URL
      },

    // Add more publications as needed
  ];
  
  const Publications = () => {
    const [expandedId, setExpandedId] = useState(null);
  
    const togglePublication = (id) => {
      if (expandedId === id) {
        setExpandedId(null); // Collapse if already expanded
      } else {
        setExpandedId(id); // Expand if not expanded
      }
    };
  
    return (
      <div id="publications">
        <div className="section-header ">
          <span className="section-title">/ Publications</span>
        </div>
        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-item">
              <img src={pub.image} alt={pub.title} className="publication-image" />
              <div className="publication-info">
                <h2 className="publication-title" onClick={() => togglePublication(pub.id)}>{pub.title }<a href={pub.paper} target='_blank'> Paper |</a> <a href = {pub.paperlink} target='_blank'>Link</a></h2>
                {expandedId === pub.id && (
                  <div className="publication-details">
                    <p><strong>Authors:</strong> {pub.authors}</p>
                    <p><strong> {pub.conference}</strong>   </p>
                    <p>{pub.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Publications;