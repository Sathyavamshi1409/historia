# 🏛️ Project Historia - Setup Guide

## Prerequisites

Before setting up Project Historia, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone and Install Dependencies

```bash
# Navigate to the project directory
cd C:\xampp\htdocs\Historia

# Install all dependencies (root, server, and client)
npm run install-all
```

### 2. Environment Setup

Create environment files:

**Server Environment** (`server/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/historia
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**macOS/Linux:**
```bash
# Start MongoDB
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### 4. Seed Sample Data

```bash
# Navigate to server directory
cd server

# Run the data seeder
node seedData.js
```

This will create:
- Sample users (including admin)
- Sample lessons about Ancient India
- Sample quizzes and flashcards
- All necessary test data

### 5. Start the Application

```bash
# From the root directory
npm run dev
```

This will start both:
- **Backend server** on http://localhost:5000
- **Frontend client** on http://localhost:3000

## 📱 Access the Application

### User Interface
- **URL**: http://localhost:3000
- **Landing Page**: Beautiful ancient-themed homepage
- **Registration**: Create new accounts
- **Login**: Access the dashboard

### Sample Login Credentials

**Admin Account:**
- Email: `admin@historia.com`
- Password: `admin123`
- Access: Full admin panel + all user features

**Student Accounts:**
- Email: `priya@example.com` / Password: `password123`
- Email: `rahul@example.com` / Password: `password123`

### Admin Panel
- **URL**: http://localhost:3000/admin
- **Access**: Login with admin credentials
- **Features**: User management, content management, analytics

## 🎯 Key Features to Test

### 1. **Landing Page**
- Scroll animations and ancient theme
- Responsive design
- Feature showcases

### 2. **Authentication**
- User registration with exam selection
- Login with streak tracking
- Profile management

### 3. **Dashboard**
- Personalized welcome
- Progress tracking
- Quick action cards
- Streak display with flame animation

### 4. **Interactive Lessons**
- Story-based content
- Progress tracking
- Completion rewards with confetti
- Fun facts and quick quizzes

### 5. **Smart Flashcards**
- Spaced repetition algorithm
- Flip animations
- Difficulty rating system
- Favorite marking

### 6. **Quizzes & Tests**
- UPSC-style questions
- Timer functionality
- Detailed results with explanations
- Progress tracking

### 7. **References & Syllabus**
- Comprehensive exam coverage
- Downloadable resources
- Interactive syllabus breakdown
- Government source links

### 8. **Community Forum**
- Discussion posts
- Category filtering
- Upvoting system
- User interactions

### 9. **Profile Management**
- Progress visualization
- Weekly activity charts
- Achievement badges
- Settings management

### 10. **Admin Features**
- User management
- Content creation
- Analytics dashboard
- System monitoring

## 🎨 Design Features

### Ancient Theme
- **Colors**: Gold (#D4AF37), Terracotta (#E2725B), Bronze (#CD7F32)
- **Fonts**: Cinzel (headings), Crimson Text (content), Inter (UI)
- **Animations**: Smooth transitions, confetti celebrations, scroll reveals
- **Responsive**: Mobile-first design with Tailwind CSS

### Gamification Elements
- **Streaks**: Daily learning streaks with flame animations
- **Badges**: Achievement system with milestone rewards
- **Progress Bars**: Visual progress tracking
- **Confetti**: Celebration animations for completions
- **Leaderboards**: Community competition features

## 🛠️ Development Commands

```bash
# Install all dependencies
npm run install-all

# Start development servers
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Build for production
npm run build

# Seed database with sample data
cd server && node seedData.js
```

## 📁 Project Structure

```
Historia/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main app component
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── seedData.js       # Sample data seeder
│   └── index.js          # Server entry point
├── package.json          # Root package.json
└── README.md
```

## 🔧 Troubleshooting

### Common Issues

**1. MongoDB Connection Error**
```bash
# Check if MongoDB is running
mongosh
# or
mongo
```

**2. Port Already in Use**
```bash
# Kill process on port 3000 or 5000
npx kill-port 3000
npx kill-port 5000
```

**3. Dependencies Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules client/node_modules server/node_modules
npm run install-all
```

**4. Database Issues**
```bash
# Reset database
cd server
node seedData.js
```

## 🌟 Next Steps

After setup, you can:

1. **Explore the Features**: Test all modules and functionalities
2. **Add Content**: Use admin panel to add more lessons and quizzes
3. **Customize**: Modify colors, fonts, or layouts in Tailwind config
4. **Deploy**: Use Vercel for frontend and Render/Railway for backend
5. **Extend**: Add new features like video lessons, live sessions, etc.

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify MongoDB is running
3. Ensure all dependencies are installed
4. Check environment variables are set correctly

---

**🎉 Congratulations! Project Historia is now ready to transform history learning for UPSC aspirants!**

*Where India's Past Meets Your Future* 🏛️
