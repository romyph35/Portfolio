# Portfolio Customization Guide

This guide will help you customize your portfolio with your own information, branding, and content.

## 🎯 Quick Start Customization

### 1. Personal Information (PRIORITY)

**File: `data/portfolio.ts`**

Update the `personalInfo` object with your details:

```typescript
export const personalInfo = {
  name: "Your Name",                    // Your full name
  role: "Your Professional Title",      // e.g., "Full Stack Developer"
  tagline: "YOUR CUSTOM TAGLINE.",      // Hero headline
  description: "Your bio...",           // Short introduction
  email: "your@email.com",              // Your email
  location: "Your City, State",         // Your location
  availability: "Available for Work",   // Current status
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",  // Optional
  },
}
```

### 2. About Section

In the same file, update your about section:

```typescript
about: {
  intro: "Your professional introduction...",
  story: "Your career story...",
  focus: [
    "What you focus on #1",
    "What you focus on #2",
    "What you focus on #3",
    "What you focus on #4"
  ],
  stats: [
    { label: "Years Experience", value: "X+" },
    { label: "Projects Completed", value: "X+" },
    { label: "Happy Clients", value: "X+" },
    { label: "Your Custom Stat", value: "X+" }
  ]
}
```

### 3. Skills

Update your skills by category:

```typescript
export const skills = {
  "Frontend Development": [
    "React", "Next.js", "TypeScript", // Add your skills
  ],
  "Backend Development": [
    "Node.js", "Python", // Add your skills
  ],
  // Add or remove categories as needed
};
```

### 4. Projects

**IMPORTANT:** Add your project data:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Detailed project description",
    category: "Web Application", // or "Mobile App", "Website", etc.
    year: "2024",
    image: "/projects/project1.jpg", // Place image in public/projects/
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project-url.com" // or "#" if not available
  },
  // Add more projects...
];
```

**Adding Project Images:**
1. Place project screenshots in `public/projects/`
2. Name them: `project1.jpg`, `project2.jpg`, etc.
3. Recommended size: 1200x800px (3:2 aspect ratio)
4. Format: JPG or PNG

### 5. Experience

Update your work history:

```typescript
export const experience = [
  {
    company: "Company Name",
    position: "Your Position",
    period: "2022 - Present",
    description: "What you did at this company...",
    achievements: [
      "Key achievement #1",
      "Key achievement #2",
      "Key achievement #3"
    ]
  },
  // Add more positions...
];
```

### 6. Services

Customize what services you offer:

```typescript
export const services = [
  {
    title: "Service Name",
    description: "What this service includes",
    icon: "code" // Options: code, palette, sparkles, brain, target, zap
  },
  // Modify or add services
];
```

## 🎨 Design Customization

### Color Scheme

**File: `tailwind.config.js`**

Change the accent color and backgrounds:

```javascript
colors: {
  'accent-orange': '#FF6B35',  // Your brand color
  'dark-bg': '#0A0A0A',        // Main background
  'dark-secondary': '#151515',  // Secondary areas
  'dark-tertiary': '#1F1F1F',  // Cards/components
}
```

**Popular color alternatives:**
- Blue: `#3B82F6`
- Purple: `#A855F7`
- Green: `#10B981`
- Pink: `#EC4899`
- Teal: `#14B8A6`

### Typography

**File: `app/layout.tsx`**

Change the font:

```typescript
import { Inter } from 'next/font/google'
// Replace 'Inter' with your choice:
// Poppins, Montserrat, Space Grotesk, etc.
```

Popular font combinations:
- Modern: Space Grotesk + Inter
- Professional: Poppins + Open Sans
- Creative: Montserrat + Lato
- Technical: JetBrains Mono + Inter

### Logo/Branding

**File: `components/Navigation.tsx`**

Update your logo text:

```typescript
<a href="#home" className="text-2xl font-bold">
  <span className="text-white">YOUR</span>
  <span className="text-accent-orange">LOGO</span>
</a>
```

Or replace with an image:

```typescript
<a href="#home">
  <img src="/logo.svg" alt="Your Name" className="h-8" />
</a>
```

## 📝 Content Customization

### Hero Section

**File: `components/Hero.tsx`**

Customize the main headline:

```typescript
<h1>
  <span>YOUR</span>
  <span>CUSTOM</span>
  <span>HEADLINE</span>
  <span className="text-gradient">HERE.</span>
</h1>
```

### Navigation Links

**File: `components/Navigation.tsx`**

Add/remove navigation items:

```typescript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },  // Add new section
  // Modify as needed
];
```

### Section Visibility

**File: `app/page.tsx`**

Comment out sections you don't need:

```typescript
<Navigation />
<Hero />
<About />
{/* <Skills /> */}  {/* Hidden */}
<Projects />
<Experience />
{/* <Services /> */}  {/* Hidden */}
<Contact />
<Footer />
```

## 🖼️ Image Guidelines

### Project Images
- **Location:** `public/projects/`
- **Size:** 1200x800px (3:2 ratio)
- **Format:** JPG (optimized) or PNG
- **File size:** < 500KB per image
- **Naming:** `project1.jpg`, `project2.jpg`, etc.

### Optimization Tips:
1. Use https://tinypng.com/ to compress images
2. Convert to WebP for better performance
3. Add proper alt text for accessibility

## 🚀 Advanced Customization

### Adding a Blog Section

1. Install `contentlayer` or use markdown
2. Create `components/Blog.tsx`
3. Add route in `app/blog/page.tsx`
4. Add navigation link

### Adding Contact Form

Replace the contact section with a form:

```typescript
// Use: Formspree, Netlify Forms, or EmailJS
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

### Custom Animations

**File: `app/globals.css`**

Add custom animations:

```css
@keyframes yourAnimation {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.your-class {
  animation: yourAnimation 2s ease-in-out;
}
```

### Adding Dark/Light Theme Toggle

1. Install `next-themes`
2. Update `tailwind.config.js` with `darkMode: 'class'`
3. Add toggle button in `Navigation.tsx`
4. Define light mode colors

## 📱 SEO Optimization

**File: `app/layout.tsx`**

Update metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your SEO description',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
}
```

Create `public/og-image.jpg` (1200x630px) for social sharing.

## 🔍 Before Going Live

### Checklist:
- [ ] Updated all personal information
- [ ] Added real project images
- [ ] Updated social media links
- [ ] Changed color scheme (optional)
- [ ] Added custom domain
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Added Google Analytics (optional)
- [ ] Tested page speed
- [ ] Added favicon (`public/favicon.ico`)
- [ ] Updated README with your info
- [ ] Removed placeholder content

## 📊 Analytics (Optional)

### Google Analytics

1. Create GA4 property
2. Install package: `npm install @next/third-parties`
3. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🆘 Common Issues

### Images Not Showing
- Check file paths are correct
- Ensure images are in `public/` directory
- Verify file names match exactly

### Animations Not Working
- Check Framer Motion is installed: `npm install framer-motion`
- Clear cache: `rm -rf .next`
- Rebuild: `npm run build`

### Mobile Layout Issues
- Test with Chrome DevTools responsive mode
- Check Tailwind responsive classes
- Verify no fixed widths

## 📞 Need Help?

If you encounter issues:
1. Check the console for errors (F12 in browser)
2. Review the component file mentioned in error
3. Ensure all dependencies are installed
4. Try clearing the build cache

---

**Remember:** This is YOUR portfolio. Feel free to modify, add, or remove any section to best represent your personal brand and style!
