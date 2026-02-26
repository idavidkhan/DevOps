# Muhammad Dawood | DevOps Portfolio

An optimized, accessibility-focused professional portfolio showcasing expertise in Cloud Infrastructure and DevSecOps.  
Engineered for performance. Focused on reliability. Built using a modern, dependency-free vanilla JavaScript architecture.

This project demonstrates proficiency in **Infrastructure as Code (IaC)**, **Cloud-native orchestration**, and **frontend systems thinking**—delivered through a zero-framework, high-speed interface.

---

## Technical Overview

This application is a **static frontend deployment** powered by a **data-driven JavaScript model**.

Rather than manual HTML duplication, the site utilizes **centralized data structures** within `script.js` to dynamically render projects, testimonials, and interactive components.

- **Zero Framework Overhead**: No React, Vue, or heavy libraries.
- **Decoupled Logic**: Strict separation of structural HTML, design-system CSS, and state-driven JavaScript.
- **Automated Content Injection**: Content is managed via structured objects, making the portfolio highly scalable.

---

## System Architecture

### 1. Structural Layer (`index.html`)

Contains the semantic skeleton, SEO metadata (Open Graph, Twitter Cards), and the root containers for dynamic injection.

### 2. Presentation Layer (`style.css`)

A custom design system utilizing CSS variables for theme management (Light/Dark mode) and a motion system based on cubic-bezier transitions.

### 3. Logic & Data Layer (`script.js`)

The engine of the portfolio. It manages:

- **Project & Testimonial Data**: Centralized arrays for easy updating.
- **State Management**: Controls modal visibility, skill toggles, and theme switching.
- **Interaction Systems**: Handles "Magnetic Buttons," Parallax effects, and the Testimonial Carousel.

---

## Key Performance Features

- **Intersection Observer API**: Triggers "Animate-on-Scroll" (AOS) effects only when elements enter the viewport to save CPU cycles.
- **Event Delegation**: Minimizes memory usage by attaching single listeners to parent containers for modal and carousel logic.
- **Resource Pre-fetching**: Uses preconnect for Google Fonts to reduce Time to First Byte (TTFB).
- **Stat Animation**: Custom easing functions for the "Impact & Experience" counters.

---

## How to Extend Content

### Adding New DevOps Projects

1. Open `script.js`.
2. Locate the `projects` array.
3. Append a new object following this schema:

```javascript
{
  id: 1, // Unique integer
  title: "Project Name",
  description: "Technical breakdown",
  skills: ["Terraform", "AWS"],
  githubUrl: "https://github.com/your-repo"
}
```

### Updating Skills

- **Core Skills**: Updated directly in `index.html` for SEO prioritization.
- **Minor Skills**: Added to the `minor-skills` container in `index.html` to be managed by the "Show More" toggle logic in `script.js`.

---

## Deployment & Hosting

As a pure static site, this portfolio is optimized for modern CI/CD workflows:

- **GitHub Pages**: Automatic deployment via the `main` branch.
- **Performance**: Scores 95+ on Lighthouse due to minimal payload and optimized asset loading.

---

## Engineering Philosophy

- **Reliability over Complexity**: If it can be done with native Browser APIs, it is.
- **Data over Hardcoding**: Centralized data models prevent "spaghetti HTML."
- **User-Centric Motion**: Animations are subtle and respect `prefers-reduced-motion` settings.
