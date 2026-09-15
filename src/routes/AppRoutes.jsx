import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import DashboardLayout from '../layouts/DashboardLayout';

// Public Pages
import LandingPage from '../pages/public/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage'; 
import HospitalLogin from '../pages/auth/HospitalLogin'; // <-- Added Hospital Login import
import NotFound from '../pages/public/NotFound';

// Donor Pages
import DonorDashboard from '../pages/donor/DonorDashboard';
import BloodRequests from '../pages/donor/BloodRequests'; 
import UserProfile from '../pages/donor/UserProfile'; 

// Recipient Pages
import RecipientDashboard from '../pages/recipient/RecipientDashboard'; 
import CreateRequest from '../pages/recipient/CreateRequest'; 

// Hospital Pages
import HospitalDashboard from '../pages/hospital/HospitalDashboard'; 
import BloodInventory from '../pages/hospital/BloodInventory'; 

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard'; 

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/hospital/login" element={<HospitalLogin />} /> {/* <-- Hospital Portal Route */}
      
      {/* PROTECTED DASHBOARD ROUTES */}
      <Route element={<DashboardLayout />}>
        
        {/* Donor View */}
        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/blood-requests" element={<BloodRequests />} />
        <Route path="/donor/profile" element={<UserProfile />} />

        {/* Recipient View */}
        <Route path="/recipient/dashboard" element={<RecipientDashboard />} />
        <Route path="/create-request" element={<CreateRequest />} />

        {/* Hospital View */}
        <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
        <Route path="/hospital/inventory" element={<BloodInventory />} />

        {/* Admin View */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Route>

      {/* CATCH-ALL ROUTE FOR 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}