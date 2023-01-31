import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
// import instagramIcon from '../../assets/instagram.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <div style={{"display":"flex", "justifyContent":"center" , "alignItems" :"center"}}>
        <p>
       @2023 All Rights Reserved.Terms & Conditions | Privacy Policy <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

    </Container>
  )
}
