import React, { useState } from 'react';
import './profil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function Profil() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <nav className="navbar">
          <h1 className="logo">ait haddou</h1><br/>
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDarkMode} className="theme-toggle">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="icon" />
          </button>
        </nav>
      <section id="home">
      <h1 className='h1experience'>Home</h1>
      <hr className='hrstyle'/>
      <div className='divtotal'>
        <div className='divphothom'>
        <img className='imagehom' src='db.png'></img>
        </div>
        <div className='paraghome'>
           <p>Sara est une développeuse full-stack dédiée et ambitieuse avec une passion
           profonde pour le développement web. Son objectif est de maîtriser le duo dynamique React.js et Laravel. 
           Désireuse d'élargir ses horizons, elle recherche inlassablement des opportunités pour 
          renforcer ses compétences et approfondir sa compréhension de ces technologies.
          </p>
          <div className='lengagehome'><button className="btn btn-black-white-border" id='buttonbl'>HTML</button>
          <button className="btn btn-black-white-border" id='buttonbl'>CSS</button>
          <button className="btn btn-black-white-border" id='buttonbl'>BOOTSTRAP</button>
          <button className="btn btn-black-white-border" id='buttonbl'>JAVA SCRIPTS</button>
          <button className="btn btn-black-white-border" id='buttonbl'>PHP</button>
          <button className="btn btn-black-white-border" id='buttonbl'>LARAVEL</button>
          <button className="btn btn-black-white-border" id='buttonbl'>REACT</button>
          <button className="btn btn-black-white-border" id='buttonbl'>REDUX</button>
          <button className="btn btn-black-white-border" id='buttonbl'>REST/API</button>
          <button className="btn btn-black-white-border" id='buttonbl'>NODE JS</button>
         
         
</div>
          </div>
       </div>


      
      </section>
      
      <section id="experience">
        <h1 className='h1experience'>Experience</h1>
        <hr className='hrstyle'/>
        <div className='totalexper'>
                    
                    <div className='exp1'>
                      <div className='imageexper1'><img className='image1' src='front.png'></img></div>
                      <div className='nonex1'><h5>Front end</h5></div>
                      <div className='descre1'> <div className='descre2'><ul><li>html</li> <li>CSS</li>  <li>REACT</li><li>java script</li></ul></div></div>

                    </div>
                    <div className='exp2'>
                      <div className='imageexper2'><img className='image2' src='back.png'></img></div>
                      <div className='nonex2'><h5>Back end</h5></div>
                      <div className='descre2'><ul><li>PH</li> <li>LARAVEL</li></ul></div>

                    </div>
                    <div className='exp3'>
                      <div className='imageexper3'><img className='image2' src='db.png'></img></div>
                      <div className='nonex3'><h5>Base de donner</h5></div>
                      <div className='descre3'><ul><li>SQL</li> <li>MONGODB</li></ul></div>

                    </div>
                    <div className='exp4'>
                      <div className='imageexper4'><img className='image2' src='outil.png'></img></div>
                      <div className='nonex4'><h5>Outils de devloppement</h5></div>
                      <div className='descre4'>
                        <ul className='ulclass'>
                       <li>GIT</li> <li>GIT HUB</li>
                      <li>JIRA</li> <li>SCRUM</li> 
                       {/* <div> <li>DEVOPS </li> <li>VS CODE</li><br/> </div>
                       <div><li>SONARQUBE</li>  <li>GIT LAB</li> </div> */}
                        
                        </ul></div>

                    </div>
         
        </div>
      </section>
      
      <section id="service">
        <h1>Service</h1>
        <p>This is the service section.</p>
      </section>
      
      <section id="contact" className="contact-section">
        <h1 className='h1contact'>Contact</h1>
        <hr className='hrstyle'/>
        <div className="contact-content">
          <div className="form-container">
            <div className='formulaire'>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
          <div className="photo-container">
            <img src={darkMode ? 'contactdarkimg.png' : 'imagecontact.png'} alt="Contact" className="contact-photo" />
          </div>
        </div>
      </section>

    </div>
    <h3 className='footer'>Merci pour vos futures visites, et j'attends avec impatience des opportunités de réseautage fructueuses. AIT HADDOU SARA © 2024.</h3>

    </>
    
  );
}

export default Profil;
  