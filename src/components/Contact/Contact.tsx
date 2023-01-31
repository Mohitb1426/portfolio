import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Contact(){
  useEffect(() => {
    AOS.init();
    AOS.init({
      useClassNames: true,
      throttleDelay: 99,
      startEvent: 'DOMContentLoaded'
    });
  }, []);
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p style={{"marginTop": "2em"}}>Ready to get started on your project? </p>
        <p style={{"marginTop": "0.5em"}}>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts" style={{"marginTop": "2em"}}>
        <div  >
        <a data-aos="fade-up-right" data-aos-duration="1500" href="mailto:rawatmohituk12@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a data-aos="fade-up-left" data-aos-duration="1500" href="mailto:rawatmohituk12@gmail.com">rawatmohituk12@gmail.com</a>
        </div>
        <div>
        <a data-aos="fade-up-right" data-aos-duration="1500" href="tel:+917895702386"><img src={phoneIcon} alt="Phone No" /></a>
          <a data-aos="fade-up-left" data-aos-duration="1500" href="tel:+917895702386">(+91) 7895702386</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}