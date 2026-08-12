# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

**CLI Method:**
```bash
npm i -g vercel
vercel login
vercel
```

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain
- Update DNS records as instructed

---

### Option 2: Netlify

**Steps:**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect GitHub and select repository
   - Configure build settings
   - Deploy

**netlify.toml Configuration:**

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Then install the plugin:
```bash
npm install -D @netlify/plugin-nextjs
```

---

### Option 3: GitHub Pages (Static Export)

**⚠️ Note:** This requires static export (loses some Next.js features)

1. **Update next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. **Build and Export:**
```bash
npm run build
```

3. **Deploy to GitHub Pages:**
   - Push the `out` folder to `gh-pages` branch
   - Enable GitHub Pages in repository settings

**Using GitHub Actions:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

### Option 4: AWS Amplify

1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

---

### Option 5: Railway

1. Visit [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Railway auto-detects Next.js
5. Deploy automatically

---

## 🌐 Custom Domain Setup

### For Vercel:

1. **In Vercel Dashboard:**
   - Project Settings → Domains
   - Add your domain: `yourdomain.com`

2. **In Your Domain Registrar:**
   - Add DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. **In Netlify Dashboard:**
   - Site Settings → Domain Management
   - Add custom domain

2. **In Your Domain Registrar:**
   - Update nameservers to Netlify's nameservers

---

## 📊 Environment Variables

If you add environment variables later (e.g., for analytics):

### Vercel:
- Settings → Environment Variables
- Add variable name and value
- Redeploy

### Netlify:
- Site Settings → Build & Deploy → Environment
- Add variables
- Redeploy

### Local Development:

Create `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_KEY=your_key_here
```

---

## 🔧 Build Optimization

### Before Deploying:

1. **Optimize Images:**
```bash
# Use next/image or optimize manually
```

2. **Check Bundle Size:**
```bash
npm run build
# Check output for large bundles
```

3. **Analyze Bundle:**
```bash
npm install @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})
```

Run: `ANALYZE=true npm run build`

---

## ⚡ Performance Checklist

Before going live:

- [ ] Compress all images
- [ ] Remove console.logs
- [ ] Test on mobile devices
- [ ] Check page load speed (GTmetrix, PageSpeed Insights)
- [ ] Verify all links work
- [ ] Test contact form (if applicable)
- [ ] Add meta tags for SEO
- [ ] Add favicon
- [ ] Set up analytics
- [ ] Test in different browsers
- [ ] Add 404 page
- [ ] Set up SSL (automatic on most platforms)

---

## 🔍 Post-Deployment Testing

### Speed Testing:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### SEO Testing:
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Responsiveness:
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- Browser DevTools (F12 → Device Mode)

---

## 📈 Monitoring & Analytics

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your site:

```typescript
// app/layout.tsx
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

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🆘 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Issues

**Images not loading:**
- Check image paths (use `/` prefix for public folder)
- Verify images are committed to git

**Styles not applying:**
- Check Tailwind config
- Verify PostCSS is configured
- Clear build cache

**Environment variables not working:**
- Ensure they're prefixed with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

---

## 🔒 Security

### Best Practices:

1. **Never commit sensitive data:**
   - Use `.env.local` for secrets
   - Add `.env*` to `.gitignore`

2. **Use HTTPS:**
   - Automatic on Vercel/Netlify
   - Let's Encrypt for custom servers

3. **Keep dependencies updated:**
```bash
npm audit
npm update
```

4. **Set security headers:**

Create `next.config.js` headers:
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

---

## 🎯 Domain Recommendations

### Where to Buy Domains:
- [Namecheap](https://namecheap.com) - Affordable, good support
- [Google Domains](https://domains.google) - Simple, Google integration
- [Cloudflare](https://cloudflare.com) - Best prices, includes CDN
- [Porkbun](https://porkbun.com) - Cheap, good features

### Domain Tips:
- Keep it short and memorable
- Use `.com` for maximum compatibility
- Avoid hyphens and numbers
- Check social media availability

---

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **Netlify Docs:** https://docs.netlify.com
- **Stack Overflow:** Tag your questions with `next.js`

---

## ✅ Pre-Launch Checklist

- [ ] All personal information updated
- [ ] Real project images added
- [ ] All links tested
- [ ] Mobile responsive checked
- [ ] SEO meta tags added
- [ ] Favicon added
- [ ] Analytics configured
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] 404 page working
- [ ] Contact information correct
- [ ] Social media links verified
- [ ] Cross-browser tested
- [ ] Performance tested (>90 on Lighthouse)

---

**You're ready to launch! 🚀**

Choose your platform, follow the steps, and your portfolio will be live in minutes.
