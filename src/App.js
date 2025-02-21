"use client";

import { createElement as e, useState, useEffect } from "react";
import "./styles.css";
const Header = ({ isDark, onThemeToggle }) => {
  const navItems = ["About", "Projects", "Skills", "Contact"];

  return e(
    "header",
    { className: "header" },
    e("div", { className: "logo" }, "Portfolio"),
    e(
      "nav",
      { className: "nav" },
      ...navItems.map((item) =>
        e(
          "a",
          {
            key: item,
            href: `#${item.toLowerCase()}`,
            className: "nav-item",
          },
          item
        )
      ),
      e(
        "button",
        {
          className: "theme-toggle",
          onClick: onThemeToggle,
          "aria-label": "Toggle theme",
        },
        isDark ? "☀️" : "🌙"
      )
    )
  );
};

const About = () =>
  e(
    "section",
    { id: "about", className: "section" },
    e("h2", { className: "section-title" }, "About Me"),
    e(
      "div",
      { className: "about-content" },
      e("img", {
        src: "/profile.png?height=200&width=200",
        alt: "Profile picture",
        className: "profile-image",
      }),
      e(
        "p",
        { className: "about-text" },
        "I'm a passionate developer focused on creating beautiful and functional web applications. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design."
      )
    )
  );

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Project 2",
      description: "Full-stack application with real-time features",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Project 3",
      description: "Mobile-first responsive design project",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return e(
    "section",
    { id: "projects", className: "section" },
    e("h2", { className: "section-title" }, "Projects"),
    e(
      "div",
      { className: "projects-grid" },
      ...projects.map((project, index) =>
        e(
          "div",
          { key: index, className: "project-card" },
          e("img", {
            src: project.image,
            alt: project.title,
            className: "project-image",
          }),
          e("h3", { className: "project-title" }, project.title),
          e("p", { className: "project-description" }, project.description)
        )
      )
    )
  );
};

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
    "Responsive Design",
    "Web Performance",
  ];

  return e(
    "section",
    { id: "skills", className: "section" },
    e("h2", { className: "section-title" }, "Skills"),
    e(
      "div",
      { className: "skills-grid" },
      ...skills.map((skill) =>
        e("div", { key: skill, className: "skill-item" }, skill)
      )
    )
  );
};

const Contact = () =>
  e(
    "section",
    { id: "contact", className: "section" },
    e("h2", { className: "section-title" }, "Contact"),
    e(
      "form",
      { className: "contact-form" },
      e(
        "div",
        { className: "form-group" },
        e("input", {
          type: "text",
          placeholder: "Name",
          className: "form-input",
          required: true,
        })
      ),
      e(
        "div",
        { className: "form-group" },
        e("input", {
          type: "email",
          placeholder: "Email",
          className: "form-input",
          required: true,
        })
      ),
      e(
        "div",
        { className: "form-group" },
        e("textarea", {
          placeholder: "Message",
          className: "form-input",
          rows: 5,
          required: true,
        })
      ),
      e("button", { type: "submit", className: "submit-btn" }, "Send Message")
    )
  );

const Footer = () =>
  e(
    "footer",
    { className: "footer" },
    e("p", null, "© 2024 Portfolio. All rights reserved.")
  );

export default function Page() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return e(
    "div",
    { className: "app" },
    e(Header, { isDark, onThemeToggle: toggleTheme }),
    e(
      "main",
      { className: "main" },
      e(About),
      e(Projects),
      e(Skills),
      e(Contact)
    ),
    e(Footer)
  );
}
