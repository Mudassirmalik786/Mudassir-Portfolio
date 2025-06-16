#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

async function buildForVercel() {
  try {
    console.log('Building client for static deployment...');
    
    // Ensure dist directory exists
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true });
    }
    
    // Run vite build for client only
    await execAsync('npm run build');
    
    // Check if dist/public exists and move files to dist root
    if (fs.existsSync('dist/public')) {
      console.log('Moving files from dist/public to dist...');
      const files = fs.readdirSync('dist/public');
      for (const file of files) {
        const srcPath = path.join('dist/public', file);
        const destPath = path.join('dist', file);
        
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        
        if (fs.statSync(srcPath).isDirectory()) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
      
      // Remove the public directory after copying
      fs.rmSync('dist/public', { recursive: true, force: true });
    }
    
    // Verify dist has content
    if (!fs.existsSync('dist') || fs.readdirSync('dist').length === 0) {
      throw new Error('No files were built to dist directory');
    }
    
    console.log('Static build completed successfully!');
    console.log('Files in dist:', fs.readdirSync('dist'));
  } catch (error) {
    console.error('Build failed:', error);
    console.error('Error details:', error.message);
    process.exit(1);
  }
}

buildForVercel();
