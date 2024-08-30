

import './index.scss'; // Import the corresponding stylesheet for styling
import ArduinoIcon from '../../assets/images/Coding Icons/arduino-original.svg';
import GitIcon from '../../assets/images/Coding Icons/git-original.svg';
import JavaIcon from '../../assets/images/Coding Icons/java-original.svg';
import JavascriptIcon from '../../assets/images/Coding Icons/javascript-original.svg';
import SqlIcon from '../../assets/images/Coding Icons/sqldeveloper-original.svg'
import PythonIcon from '../../assets/images/Coding Icons/python-original.svg'
import ReactIcon from '../../assets/images/Coding Icons/react-original.svg';

const About = () => {
  return (
    <div className="about-page">
        const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d")
        context.fillRect(10,10,300,100)
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          Hello! I'm <strong>Esther Thompson</strong>, a passionate and driven third-year Computer Science student at the University of Calgary. 
          My interest in technology began with a fascination for problem-solving and the endless possibilities that coding offers. 
          This has evolved into a dedicated pursuit of excellence in software development, data analysis, and artificial intelligence.
          Over the past three years, I have sharpened my skills in Python, Java, and C++, gaining hands-on experience through projects in web development,
          machine learning, and database management. My future aspirations involve contributing to innovative tech solutions that can make a significant 
          impact on society. Please feel free to reach out for collaboration, networking, or just a friendly chat about the latest in tech!
          </p>
        <h1>Here are some of my skills</h1>
      </div>
        <div className='icon-zone'>

        <img src= {ArduinoIcon} alt="Arduino" width="63" height="84" />
        <img src= {GitIcon} alt="Git" width="63" height="84" />
        <img src= {JavaIcon} alt="Java" width="63" height="84" />
        <img src= {JavascriptIcon} alt="Javascript" width="63" height="84" />
        <img src= {SqlIcon} alt="Sql" width="63" height="84" />
        <img src= {PythonIcon} alt="Python" width="63" height="84" />
        <img src= {ReactIcon} alt="React" width="63" height="84" />

        </div>
    </div>
  );
};

export default About;
