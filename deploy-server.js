const express = require('express');
const path = require('path');
const cors = require('cors');
const os = require('os');

// Import backend routes
const authRoutes = require('./server/routes/authSQLite');
const lessonRoutes = require('./server/routes/lessonsSQLite');
const quizRoutes = require('./server/routes/quizzesSQLite');
const flashcardRoutes = require('./server/routes/flashcardsSQLite');
const userRoutes = require('./server/routes/usersSQLite');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Project Historia API Server (SQLite)',
    status: 'Running',
    database: 'SQLite',
    timestamp: new Date().toISOString()
  });
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing - return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

// Get local IP address
const networkInterfaces = os.networkInterfaces();
let localIP = 'localhost';

Object.keys(networkInterfaces).forEach(interfaceName => {
  const networkInterface = networkInterfaces[interfaceName];
  networkInterface.forEach(details => {
    if (details.family === 'IPv4' && !details.internal) {
      localIP = details.address;
    }
  });
});

// Initialize database and start server
const { initializeDatabase } = require('./server/config/database');

initializeDatabase().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log('🎉 Historia Platform is LIVE and accessible on all devices!');
    console.log('');
    console.log('📱 Access URLs:');
    console.log(`   Local:        http://localhost:${PORT}`);
    console.log(`   Network:      http://${localIP}:${PORT}`);
    console.log('');
    console.log('🌐 SHAREABLE LINK for other devices:');
    console.log(`   👉 http://${localIP}:${PORT}`);
    console.log('');
    console.log('📚 Complete UPSC History Platform Features:');
    console.log('   ✅ 17 Comprehensive Lessons');
    console.log('   ✅ 8 UPSC-Style Quizzes');
    console.log('   ✅ 8 Engaging Historical Stories');
    console.log('   ✅ Smart Flashcards System');
    console.log('   ✅ Progress Tracking & Badges');
    console.log('   ✅ Mobile-Responsive Design');
    console.log('');
    console.log('🔐 Login Credentials:');
    console.log('   Email: admin@historia.com');
    console.log('   Password: admin123');
    console.log('');
    console.log('🎯 Perfect for UPSC History Preparation!');
    console.log('📱 Works on phones, tablets, laptops - any device!');
  });
}).catch(error => {
  console.error('Failed to initialize database:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Historia Platform shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Historia Platform shutting down gracefully...');
  process.exit(0);
});
