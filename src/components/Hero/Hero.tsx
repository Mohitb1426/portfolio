import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.init({
      useClassNames: true,
      throttleDelay: 99,
      startEvent: 'DOMContentLoaded'
    });
  }, []);
  return (

    <Container id="home">
      <div className="hero-text">
          <p data-aos="fade-up-right" data-aos-duration="1500">Hello <img data-aos="fade-up-right" data-aos-duration="1500" src={Hello} alt="Hello" width="20px"/>, I'm</p>
          <h1 data-aos="fade-up-right" data-aos-duration="1500">Mohit Kumar</h1>
          <h3 data-aos="fade-up-right" data-aos-duration="1500">Full Stack Developer</h3>
          <p data-aos="fade-up-right" data-aos-duration="1500" className="small-resume">1 Years of Experience</p>
          <BrowserRouter>
            <NavHashLink data-aos="fade-up-right" data-aos-duration="1500" smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
          <div>

      <div className="social-media" data-aos="fade-up"><a
        href="https://www.linkedin.com/in/mern-developer-mohit-kumar/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a></div>
        </div>
      </div>
      <div className="hero-image">
          <img data-aos="fade-up-left" data-aos-duration="1500" src={Illustration} alt="Ilustração" />
      </div>

    </Container>

  )
}