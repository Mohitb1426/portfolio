import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Download App" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CAT(computed tomography scan)- Viewer</h3>
              <p>
              A installer to help Assign Tasks and Show Chart details of a equipments.
              web Application made using React.Js , Node , JavaScript , MongoDB.
              react-Bootstrab and ANTD used for maintaining the UI and ContextAPI is used for exchanging the state/data of web Application
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Node JS</li>
                <li>MongoDB</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Admin Portal</h3>
              <p>
              A responsive web Application made using Next.Js , Typescript and authentication services are handled using auth0-react.
              Material UI used for maintaining the UI of Nanovest Portal
              Zustand is used for exchanging the state/data of web Application and Axios for API Fetching
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next Js</li>
                <li>TypeScript</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Portfolio-v1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://portfoliov1.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SimInvest</h3>
              <p>
              A responsive Application made using React Native , Javascript.
              Redux-Observables used for exchanging the state/data of Application and Axios for API Fetching              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>RX Js</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}