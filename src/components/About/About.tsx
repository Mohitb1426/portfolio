import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import MohitKumar from "../../assets/Mohit.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    AOS.init();
    AOS.init({
      useClassNames: true,
      throttleDelay: 99,
      startEvent: 'DOMContentLoaded'
    });
  }, []);
  return (
    <Container id="about">
      <div className="about-text">
        <div >
          <h2>About me</h2>
        </div>
        <div  >
          <p  data-aos="fade-up-right" data-aos-duration="1500">
          Hi there! I'm Mohit , Full Stack developer with a passion for creating custom online experiences for my clients. With a skill set including HTML5, CSS3, JavaScript,Node , React Native and React, I have the tools to bring any website vision to life.
          </p>
        </div>
        {/* <div   style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p data-aos="fade-up-right" data-aos-duration="1500">
          But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p>
        </div> */}
        <div   style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p data-aos="fade-up-right" data-aos-duration="1500">
          So if you're in need of a new website/Application or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website/Application dreams to reality together!</p>
        </div>

        <div  >
          <h3  data-aos="fade-up-left" data-aos-duration="1500">Here are my main skills:</h3>
        </div>
        <div className="hard-skills"  data-aos="fade-up" data-aos-duration="1500">
          <div className="hability">
            <div >
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="hability">
            <div >
              <img src={typescriptIcon} alt="Typescript" />
            </div>
          </div>
          <div className="hability">
            <div >
              <img src={nodeIcon} alt="Node" />
            </div>
          </div>
          <div className="hability">
            <div >
              <img src={htmlIcon} alt="Html" />
            </div>
          </div>

          <div className="hability">
            <div >
              <img src={cssIcon} alt="Css" />
            </div>
          </div>

          <div className="hability">
            <div >
              <img src={boostrapIcon} alt="bootstrap" />
            </div>
          </div>
          <div className="hability">
            <div >
              <img src={jsIcon} alt="JavaScript" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div  data-aos="fade-up-left" data-aos-duration="1500">
          <img  src={MohitKumar} alt="Mohit Kumar" />
        </div>
      </div>
    </Container>
  )
}
