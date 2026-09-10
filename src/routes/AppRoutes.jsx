import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import DashboardLayout from '../layouts/DashboardLayout';

// Public Pages
import LandingPage from '../pages/public/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage'; 

// Donor Pages
import DonorDashboard from '../pages/donor/DonorDashboard';
import FindDonors from '../pages/donor/FindDonors'; 
import BloodRequests from '../pages/donor/BloodRequests'; 
import UserProfile from '../pages/donor/UserProfile'; // <-- Imported

// Recipient Pages
import RecipientDashboard from '../pages/recipient/RecipientDashboard'; 
import CreateRequest from '../pages/recipient/CreateRequest'; 

// Hospital Pages
import HospitalDashboard from '../pages/hospital/HospitalDashboard'; 
import BloodInventory from '../pages/hospital/BloodInventory'; 

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard'; // <-- Imported

export default function AppRoutes() {
  return (
    <Routes>
      {/* =======================
          PUBLIC ROUTES
      ======================== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* =======================
          PROTECTED DASHBOARD ROUTES 
          (Everything inside here gets the Navbar & Sidebar)
      ======================== */}
      <Route element={<DashboardLayout />}>
        
        {/* Donor View */}
        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/blood-requests" element={<BloodRequests />} />
        <Route path="/donor/profile" element={<UserProfile />} /> {/* <-- Added Route */}

        {/* Recipient View */}
        <Route path="/recipient/dashboard" element={<RecipientDashboard />} />
        <Route path="/create-request" element={<CreateRequest />} />

        {/* Hospital View */}
        <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
        <Route path="/hospital/inventory" element={<BloodInventory />} />

        {/* Admin View */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* <-- Added Route */}

      </Route>
    </Routes>
  );
}