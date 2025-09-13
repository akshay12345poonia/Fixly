
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import LandingPage from './components/LandingPage';
import ServiceProviderList from './components/services/ServiceProviderList';
import ServiceDetails from './components/services/ServiceDetails';
import BookingForm from './components/services/BookingForm';
import BecomeProvider from './components/provider/BecomeProvider';
import HelpPage from './components/help/HelpPage';
import SearchResults from './components/search/SearchResults';
import './styles/globals.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/services" element={<ServiceProviderList />} />
              <Route path="/services/category/:serviceType" element={<ServiceProviderList />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/booking/:providerId" element={<BookingForm />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/become-provider" element={<BecomeProvider />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
