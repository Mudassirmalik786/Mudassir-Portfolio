#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

async function buildForVercel() {
  try {
    console.log('Building client for static deployment...');
    
    // Run vite build for client only
    await execAsync('vite build');
    
    // Copy built files from dist/public to dist root
    if (fs.existsSync('dist/public')) {
      // Move files from dist/public to dist
      const files = fs.readdirSync('dist/public');
      for (const file of files) {
        const srcPath = path.join('dist/public', file);
        const destPath = path.join('dist', file);
        
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        
        fs.renameSync(srcPath, destPath);
      }
      
      // Remove empty public directory
      fs.rmSync('dist/public', { recursive: true, force: true });
    }
    
    console.log('Static build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForVercel();