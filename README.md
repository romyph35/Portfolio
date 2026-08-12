# Premium Personal Portfolio

A modern, futuristic personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Premium Dark Theme** - Black background with orange accent colors
- **Massive Typography** - Bold, dramatic headings inspired by creative agencies
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Responsive Design** - Fully responsive across all devices
- **Glass Morphism** - Modern glassmorphism UI elements
- **Interactive Elements** - Hover effects and smooth transitions
- **Performance Optimized** - Fast loading and smooth scrolling

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd premium-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Personal Information

Edit `data/portfolio.ts` to customize:

- Personal info (name, email, role, tagline)
- About section (bio, stats, focus areas)
- Skills and technologies
- Projects portfolio
- Work experience
- Services offered
- Social media links

### Colors

The color scheme can be customized in `tailwind.config.js`:

```js
colors: {
  'accent-orange': '#FF6B35',  // Main accent color
  'dark-bg': '#0A0A0A',         // Background
  'dark-secondary': '#151515',   // Secondary background
  'dark-tertiary': '#1F1F1F',   // Tertiary background
}
```

### Typography

Font settings are configured in `app/layout.tsx` using Inter font from Google Fonts.

## 📱 Sections

1. **Navigation** - Sticky navigation with smooth scroll
2. **Hero** - Full-screen hero with massive typography
3. **About** - Editorial-style about section with stats
4. **Skills** - Technology and expertise showcase
5. **Projects** - Featured work with detailed cards
6. **Experience** - Timeline-based work history
7. **Services** - Service offerings with icons
8. **Contact** - Contact information and CTAs
9. **Footer** - Social links and quick navigation

## 🎨 Design System

### Typography Scale
- Hero: 5xl to 8xl (responsive)
- Section Headings: 4xl to 6xl
- Body: base to lg
- Labels: xs to sm

### Spacing
- Section padding: py-32
- Component padding: p-6 to p-8
- Gaps: gap-4 to gap-8

### Border Radius
- Cards: rounded-3xl
- Buttons: rounded-full
- Small elements: rounded-lg

## 🔧 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy

This project can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

For Vercel deployment:
```bash
npm i -g vercel
vercel
```

## 📄 Project Structure

```
premium-portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Experience.tsx    # Work experience
│   ├── Services.tsx      # Services section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── data/
│   └── portfolio.ts      # Portfolio data (CUSTOMIZE THIS)
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎯 Performance

- Optimized images with Next.js Image
- Code splitting and lazy loading
- Minimal dependencies
- CSS optimization with Tailwind
- Animation performance optimizations

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements
- Color contrast compliance

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

Design inspired by modern creative agency websites and the Oryx AI Agency reference design.

---

Built with ❤️ by Alex Rivera
