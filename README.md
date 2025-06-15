# Muhammad Mudassir - Portfolio Website

A professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Interactive animations and smooth scrolling
- Working contact form with email functionality
- Professional project showcase
- Skills visualization with progress bars
- Experience and education timeline
- Certifications display with authentic links

## Email Setup

To enable the contact form to send emails to your inbox:

1. **Create a free EmailJS account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up your email service:**
   - Add an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## Deployment

This portfolio is optimized for easy deployment on free hosting platforms:

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Add environment variables in project settings

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Email:** EmailJS
- **Icons:** Lucide React

## Contact

Feel free to reach out through the contact form or directly at your email address.