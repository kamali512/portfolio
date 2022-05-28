import image1 from"../../Assets/Muhammad Usman.jpg"
import "./nav.css"
function Nav() {
    return (
      <div className="App">
      <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a>
          </li>
          <li>
            <a href="#skills" className="nav-link scrollto"><i className="bx bi-chat-square-text-fill"></i>
              <span>Skills</span></a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a>
          </li>
          <li>
            <a href="#trainings" className="nav-link scrollto"><i className="bx bx-shape-square"></i> <span>Trainings</span></a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a>
          </li>
        </ul>
      </nav>
    </header>
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
        <h1>Muhammad Usman</h1>
        <p>
          I'm
          <span className="typed" data-typed-items="Full Stack Architect Level Developer, Certified Trainer, Mern Stack Developer, Blockchain Developer, Web Developer, Mobile App Developer, Game Developer, Continuous Innovation Consultant">Full Stack Architect Level Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
        </p>
        <div className="social-links">
          <a href={""} target="_blank" title="GitHub" className="github"><i className="bx bxl-github"></i></a>
          <a href={""} target="_blank" title="LinkedIn" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href={""} target="_blank" title="Youtube" className="youtube"><i className="bx bxl-youtube"></i></a>
          <a href={""}target="_blank" title="Upwork" className="upwork">
            <img src="" className="img-fluid" alt=""/>
          </a>
          <a href="" target="_blank" title="unialsolutions" className="unialsolutions">
            <img src="" className="img-fluid" alt="" />
          </a>
          <a href="" target="_blank" title="Facebook" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="" target="_blank" title="Twitter" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="" target="_blank" title="Instagram" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="" target="_blank" title="Behance" className="behance"><i className="bx bxl-behance"></i></a>
        </div>
      </div>
    </section>

    <main id="main">
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Full Stack Architect Level Web Developer, Mobile Application
            Developer, Blockchain Developer, UI/UX Designer, Game Developer
            and Continuous Innovation Consultant.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={image1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Architect Level Programmer</h3>
            <p>
              Web Developer, Mobile Application Developer, Blockchain
              Developer, UI/UX Designer, Game Developer and Continuous
              Innovation Consultant.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Experience:</strong> <span>9 Years</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <span>www.unialsolutions.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+92-301-3949480</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Remote</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Type:</strong>
                    <span>Full Stack</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Masters</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>M.Usman.fullstack@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I aim to empower individuals, small businesses, and corporate
              businesses to overcome unemployment.
            </p>
          </div>
        </div>
      </div>
    </section>
    
     <section id="facts" className="facts">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Delivering best services, and making clients project successful is
            always remain my passion, I always ready to get job done, whatever
            hard and smart work it takes.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="0" className="purecounter">200</span>
              <span>+</span>
              <h5>Happy Clients</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="12000" data-purecounter-duration="0" className="purecounter">12000</span>
              <span>+</span>
              <h5>Students Trained</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="20000" data-purecounter-duration="0" className="purecounter">20000</span>
              <span>+</span>
              <h5>Hours Of Support</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span data-purecounter-start="0" data-purecounter-end="9" data-purecounter-duration="0" className="purecounter">9</span>
              <span>+</span>
              <h5>Years Of Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" className="skills section-bg">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Certified full stack, React Native, ReactJS, Blockchain, Nodejs,
            Solidity, TypeScript, Unity3d, Unreal Engine, Laravel, Web App,
            Mobile App Developer, Consultant and Expert in Metaverse, Ico,Ieo
            and Ido Launch, Continuous Innovation Consultant.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">React Native <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React JS <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">NodeJS <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Unity3d <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">Laravel <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">TypeScript <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Blockchain <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Solidity <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}} ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="resume" className="resume">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Having 9+ Years of experience in Custom Mobile App, Web App,
            Blockchain Development, Project Management, Continuous Innovation
            Manager, HCI, (UI/UX) Consultant, Game Developer and Software
            Architect in various International and Fortune Companies.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Muhammad Usman</h4>
              <p>
                CERTIFIED FULL STACK React Native ReactJS BLOCKCHAIN NodeJS
                Solidity TypeScript Unity3d Unreal Engine Laravel WEB App,
                Mobile APP DEVELOPER Consultant and Expert in Metaverse,
                ICO,IEO and IDO Launch Continuous Innovation Consultant.
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BS Computer Science</h4>
              <p>2013-2017</p>
              <p>National Textile University, Faisalabad</p>
            </div>
            <div className="resume-item">
              <h4>Game Development and Entrepreneurship</h4>
              <p>Massachusetts Institute of Technology</p>
            </div>
            <div className="resume-item">
              <h4>MERN Stack Development</h4>
              <p>Microsoft</p>
            </div>
            <div className="resume-item">
              <h4>Blockchain Development</h4>
              <p>Blockchain</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Mobile App Developer</h4>
              <p>Ava Technologies</p>
            </div>
            <div className="resume-item">
              <h4>Senior Web App Developer</h4>
              <p>Biji Biji</p>
            </div>
            <div className="resume-item">
              <h4>Blockchain Developer and Game Developer</h4>
              <p>RVC LLC</p>
            </div>
            <div className="resume-item">
              <h4>DevOPS Manager</h4>
              <p>CISCO</p>
            </div>
            <div className="resume-item">
              <h4>Full Stack Mobile, Web Developer and Project Manager</h4>
              <p>UNIAL SOLUTIONS Private Limited</p>
            </div>
            <div className="resume-item">
              <h4>Full Stack MERN and Blockchain Developer</h4>
              <p>Personalitynft LLC</p>
            </div>
            <div className="resume-item">
              <h4>Web and AI Developer</h4>
              <p>Careermapper UK LTD</p>
            </div>
          </div>
        </div>
      </div>
    </section>


        </main>
  
      </div>
    );
  }
  
  export default Nav;
  