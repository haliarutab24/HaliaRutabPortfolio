import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/halia rutab.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate{" "}
              <b className="purple">MERN Stack Developer</b> and a final-year{" "}
              <b className="purple">Software Engineering</b> student who loves
              turning ideas into real-world applications.
              <br />
              <br />
              I am skilled in{" "}
              <i>
                <b className="purple">JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB,</b>
              </i>{" "}
              and also have a solid foundation in{" "}
              <i>
                <b className="purple">C++ and Java.</b>
              </i>
              <br />
              <br />
              My key interests include building{" "}
              <b className="purple">scalable web applications, APIs, and modern digital solutions</b>{" "}
              using the latest technologies.
              <br />
              <br />
              I enjoy working with{" "}
              <i>
                <b className="purple">React.js, Next.js,</b> and{" "}
                <b className="purple">Node.js</b>
              </i>{" "}
              to design smooth user experiences and efficient backends.
              <br />
              <br />
              Currently, I’m also exploring{" "}
              <b className="purple">cloud technologies, deployment pipelines,</b> and{" "}
              <b className="purple">real-time apps</b> to expand my skillset.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and collaborate on
              exciting projects!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/haliarutab24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haliarutab24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/haliarutab24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
