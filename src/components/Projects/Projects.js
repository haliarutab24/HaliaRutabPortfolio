import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/pos.png";
import emotion from "../../Assets/Projects/focusmate.png";
import editor from "../../Assets/Projects/crave-mingle.png";
import chatify from "../../Assets/Projects/ecommerce.png";
import suicide from "../../Assets/Projects/uni-lost-n-find (2).png";
import bitsOfCode from "../../Assets/Projects/cake-website.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Platform"
              description="A fully deployed MERN stack e-commerce platform built to deliver a seamless online shopping experience. The project included product management, user authentication, shopping cart functionality, and order tracking.

Initially integrated with Stripe for payments, the system was later migrated to Safepay (Pakistan-based payment gateway)."
              ghLink="https://github.com/haliarutab24/E-commerce-Frontend.git"
              demoLink="https://e-commerce-frontend-sandy-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sweet-Delights"
              description="Sweet Delights is a modern, user-friendly website for a dessert shop that offers mouthwatering cakes, pastries, and sweets. Designed with an elegant layout, responsive design, and smooth navigation, it brings the charm of a dessert shop to the digital world.Sweet Delights is a modern, user-friendly website for a dessert shop that offers mouthwatering cakes, pastries, and sweets. Designed with an elegant layout, responsive design, and smooth navigation."
              ghLink="https://github.com/haliarutab24/SweetDelights1.git"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crave-Mingle"
              description="OCraveMingle is a modern and user-friendly food ordering platform designed to satisfy your cravings with just a few clicks.

From browsing diverse menus to customizing your dishes, CraveMingle ensures that every bite is exactly how you want it. Because when hunger calls, we help you mingle with flavor. 🍕🥗🍔"
              ghLink="https://github.com/haliarutab24/Food-Order.git"
              demoLink="https://food-order-ruddy-delta.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Point of Sales (POS) Web Application"
              description="A comprehensive web-based Point of Sales application built to streamline business management processes. The platform offers a clean dashboard and intuitive interface for handling customers, orders, purchases, and analytics. The system also supports secure authentication with role-based access control, ensuring data privacy and tailored access for different users. Developed with React.js, Tailwind CSS, Recharts.js, Node.js, and MongoDB."
              ghLink="https://github.com/haliarutab24/POS-frontend.git"
              demoLink="https://pos-frontend-eta-blue.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Lost and Found Portal "
              description=" Lost and Found Portal built specifically for UMT students and staff!
This platform ensures lost items don't stay lost for long — by simplifying how items are reported, found, and claimed.
 Built using modern web technologies with a strong focus on security, usability, and real-time tracking."
              ghLink="https://github.com/haliarutab24/UMT-Lost-Find-Portal.git"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Focus Mate"
              description=" Introducing Focus Mate – Your Ultimate Productivity Partner!
A smart productivity app designed to help students and professionals beat distractions, stay organized, and achieve their goals."
              ghLink="https://github.com/haliarutab24/FocusMateApp.git"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
