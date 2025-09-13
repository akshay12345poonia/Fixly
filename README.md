# Fixly

A modern service provider booking platform that connects users with various service providers like tutors, cleaners, repair technicians, and more.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Service Provider Management**: Browse and filter service providers by category
- **Booking System**: Schedule appointments with service providers
- **Review System**: Rate and review service providers
- **Provider Applications**: Apply to become a service provider
- **Email Notifications**: Automated email notifications for bookings and updates
- **Responsive Design**: Modern UI built with React and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **FullCalendar** - Calendar component for scheduling
- **JWT Decode** - JSON Web Token handling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Fixly/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic services
│   │   └── server.js       # Main server file
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── public/            # Static assets
│   ├── src/               # React components and logic
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Fixly
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/fixly
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=http://localhost:5173
   EMAIL_HOST=your_email_host
   EMAIL_PORT=587
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Populate the database with sample data** (optional)
   ```bash
   cd backend
   npm run populate
   ```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Service Providers
- `GET /api/providers` - Get all service providers
- `GET /api/providers/:id` - Get specific provider
- `POST /api/providers` - Create new provider (authenticated)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status

### Reviews
- `GET /api/reviews` - Get reviews
- `POST /api/reviews` - Create new review

### Provider Applications
- `POST /api/provider-applications` - Submit provider application
- `GET /api/provider-applications` - Get applications (admin)

## 🧪 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data
- `npm run populate` - Populate database

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Development

### Adding New Features

1. **Backend**: Add new routes in `backend/src/routes/`
2. **Frontend**: Add new components in `frontend/src/components/`
3. **Database**: Define new models in `backend/src/models/`

### Code Style

- Follow ESLint configuration for consistent code style
- Use meaningful variable and function names
- Add comments for complex logic
- Follow React best practices for component structure

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Ensure MongoDB is running
   - Check MONGODB_URI in .env file

2. **CORS Errors**
   - Verify CLIENT_URL in backend .env
   - Check frontend API base URL

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token storage in localStorage

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🤝 Support

For support, email support@fixly.com or create an issue in the repository.

---

**Happy Coding! 🎉**
