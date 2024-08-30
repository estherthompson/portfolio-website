import './index.scss';
import ProfileImage from '../../assets/images/profile.jpeg';
import Swirl_7 from '../../assets/images/7.png';
import Swirl_6 from '../../assets/images/6.png';
import Swirl_2 from '../../assets/images/2.png';
import {Link} from 'react-router-dom';




const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm Esther Thompson</h1>
                <h2>Third-Year Computer Science Undergraduate Student</h2>
                
           
              
                <div className="image-container">

                    <div className='SwirlImage'>
                        {/* <img src={Swirl_7} className="swirl7" alt="Swirl 7" /> */}
                        <img src={Swirl_6} className="swirl6" alt="Swirl 6" />
                        <img src={Swirl_2} className="swirl2" alt="Swirl 2"/>
                        
                    </div>
                            
                    <div className='border_container'>
                        <span className="spark" />
                        <img src={ProfileImage} alt="Profile" width="252" height="336" />
                    </div>
                </div> 
            </div>
            <div className='contact-container'>
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        

        </div>
        
    );
}

export default Home;
