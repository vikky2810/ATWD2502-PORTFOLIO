"use client"

import * as React from "react"
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import "./styles.css"; 
export default function Page() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const navItems = ["Home", "About", "Projects", "Contact"]

  const projects = [
    {
      title: "My Portfolio Website",
      description: "A personal portfolio showcasing my projects, skills, and experience.",
      image: "/project1.png?height=300&width=400",
      link: "https://github.com/vikky2810/ATWD2502-PORTFOLIO/",
    },
    {
      title: "Conversational Image Recognition Chatbot",
      description: "A chatbot that can see and talk! Upload an image, ask questions, and get AI-powered responses.",
      image: "/project2.png?height=300&width=400",
      link: "https://github.com/vikky2810/Conversational_Image_Recognition_Chatbot",
    },
    {
      title: "Freedium URL Opener",
      description: "A tool that opens premium Medium articles as free readable content. Enjoy seamless reading!",
      image: "/project3.png?height=300&width=400",
      link: "https://github.com/vikky2810/Freedium-url-opener",
    },
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Vikram&apos;s Portfolio</h1>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)} aria-label="Toggle theme">
              {isDark ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Hi, I&apos;m Vikram!</h2>
          <p className="hero-subtitle">Passionate Developer & Creator</p>
          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img
              src="/profile.png?height=200&width=200"
              alt="Profile"
              className="profile-image"
            />
            <p className="about-text">
              I&apos;m a passionate developer focused on creating beautiful and functional web applications. 
              With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-image-container">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" required className="form-input" rows={5} />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
            <div className="social-links">
              <a href="https://github.com/vikram" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="icon" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/vikram" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@vikram.dev" className="social-link">
                <Mail className="icon" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2024 Portfolio. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/vikram" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/vikram" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
