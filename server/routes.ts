import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from 'nodemailer';
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid email format' 
        });
      }

      // Configure nodemailer (you would use real SMTP settings in production)
      const transporter = nodemailer.createTransport({
        // Configure with your email service
        service: 'gmail', // or your preferred email service
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });

      // Email content
      const mailOptions = {
        from: email,
        to: 'mudassirnaveed303@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
  });

  // API route to serve resume for download
  app.get('/api/resume/download', (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), 'attached_assets', 'Resume_1750000481729.pdf');
      res.download(resumePath, 'Muhammad_Mudassir_Resume.pdf', (err) => {
        if (err) {
          console.error('Resume download error:', err);
          res.status(404).json({ 
            success: false, 
            message: 'Resume not found' 
          });
        }
      });
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to download resume' 
      });
    }
  });

  // API route to get portfolio data
  app.get('/api/portfolio', (req, res) => {
    try {
      // This could come from a database in a real application
      const portfolioData = {
        personalInfo: {
          name: 'Muhammad Mudassir',
          title: 'Full Stack Developer & Computer Science Student',
          email: 'mudassirnaveed303@gmail.com',
          phone: '+92 309 9603075',
          location: 'Lahore, Pakistan',
          bio: 'Passionate about creating innovative web solutions and exploring the endless possibilities of technology. Currently pursuing my BS in Computer Science while building real-world applications.'
        },
        stats: {
          experience: '3+',
          projects: '15+',
          technologies: '12+',
          internships: '3'
        }
      };

      res.json({ 
        success: true, 
        data: portfolioData 
      });
    } catch (error) {
      console.error('Portfolio data error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch portfolio data' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
