import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Halia Rutab</span> from{" "}
            <span className="purple">Lahore, Pakistan.</span>
            <br />
            I am a final-year <span className="purple">Software Engineering</span> student at{" "}
            <span className="purple">UMT</span> and a passionate{" "}
            <span className="purple">MERN Stack Developer</span>.
            <br />
            I love designing scalable web applications, writing clean code, and
            exploring modern technologies like React, Node.js, and MongoDB.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building full-stack projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new frameworks & tools ⚡
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to code with creativity, solve real-world problems, and build
            things that make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Halia Rutab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
