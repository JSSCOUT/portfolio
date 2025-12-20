# Hannah Jade Corpuz - Portfolio Website

A modern, responsive personal portfolio website with smooth animations and dark/light theme support.

## Features

- **Responsive Design** - Mobile-first approach with hamburger menu for smaller screens
- **Dark/Light Theme** - Toggle between themes with preference saved to localStorage
- **Smooth Scrolling** - Custom easing animations for navigation
- **Scroll Animations** - Sections fade in as you scroll using Intersection Observer
- **Accessible** - Keyboard navigation, focus states, and ARIA labels

## Project Structure

```
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive breakpoints
├── script.js       # Theme toggle, navigation, animations
├── assets/
│   └── profile.png # Profile image
└── README.md       # This file
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Introduction with name, title, and CTA buttons |
| About | Bio and technical skills grid |
| Projects | Featured project cards with links |
| Contact | Email and GitHub links |

## Customization

### Update Personal Info
Edit `index.html` to change:
- Name and title in the hero section
- About me text
- Skills in the skills grid
- Project details and links
- Contact email and GitHub URL

### Change Colors
Edit CSS variables in `style.css`:

```css
:root {
  --accent: #06b6d4;        /* Primary accent color */
  --accent-hover: #0891b2;  /* Hover state */
  --bg-primary: #0f172a;    /* Main background */
  --text-primary: #f1f5f9;  /* Main text color */
}
```

### Add New Projects
Copy a project card in `index.html` and update:
- Project title
- Tag (Web Design, Full Stack, etc.)
- Description
- Tech stack spans
- Live demo and code URLs

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Uses CSS custom properties, Intersection Observer, and ES6+