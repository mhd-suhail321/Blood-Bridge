import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Activity, MapPin } from 'lucide-react';
import '../../App.css'; // Ensure this contains the new Teal/Navy CSS variables

export default function LandingPage() {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--background)' }}>
      
      {/* Modern Navbar */}
      <nav className="navbar navbar-expand-lg py-3 w-100" style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-fluid px-4 px-lg-5">
          <Link to="/" className="navbar-brand text-navy fw-bold d-flex align-items-center gap-2">
            <Droplet size={24} style={{ color: 'var(--primary)' }} fill="currentColor" /> 
            BloodBridge
          </Link>
          <div className="d-flex gap-3">
            <Link to="/login" className="btn btn-outline-primary fw-medium">Login</Link>
            <Link to="/register" className="btn btn-primary fw-medium">Become a Donor</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container-fluid px-4 px-lg-5 w-100">
          <div className="row align-items-center g-5">
            
            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start">
              <span className="badge badge-soft-primary mb-3 fs-6 px-3 py-2">Community Driven Healthcare</span>
              <h1 className="display-4 fw-bolder text-navy mb-4" style={{ lineHeight: '1.2' }}>
                Every Donation Connects <span className="text-teal">Two Lives.</span>
              </h1>
              <p className="lead text-muted-custom mb-5 mx-auto mx-lg-0" style={{ maxWidth: '600px' }}>
                Find compatible blood donors, respond to urgent requests, and help build a stronger, healthier community through our modern platform.
              </p>
              
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <Link to="/find-blood" className="btn btn-primary btn-lg px-4 fw-medium shadow-sm">
                  Find a Donor
                </Link>
                <Link to="/register" className="btn btn-outline-primary btn-lg px-4 fw-medium bg-surface">
                  Request Blood
                </Link>
              </div>
            </div>

            {/* Right Content - Floating Mockup Card */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="card border-0 p-4 shadow-lg mx-auto" style={{ maxWidth: '420px', borderRadius: '20px' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="spinner-grow text-danger spinner-grow-sm" role="status"></div>
                  <h6 className="fw-bold text-danger m-0">Emergency Request Match</h6>
                </div>
                
                <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3" style={{ backgroundColor: 'var(--surface-light)' }}>
                  <div className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                    <span className="fw-bold fs-5">O+</span>
                  </div>
                  <div>
                    <h6 className="text-navy fw-bold m-0">Apollo City Hospital</h6>
                    <small className="text-muted-custom d-flex align-items-center gap-1">
                      <MapPin size={14} /> 4.2 km away
                    </small>
                  </div>
                </div>

                <p className="text-navy fw-medium mb-4">A patient nearby urgently needs your blood type. Are you available to help?</p>
                <button className="btn btn-primary w-100 py-2 fw-medium">Respond Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 w-100" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container-fluid px-4 px-lg-5">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-navy mb-0">12,450+</h2>
              <p className="text-muted-custom mt-2 fw-medium">Registered Donors</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-teal mb-0 d-flex justify-content-center align-items-center gap-2">
                <Activity size={32} /> 8,230
              </h2>
              <p className="text-teal mt-2 fw-medium">Lives Supported</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-navy mb-0">145</h2>
              <p className="text-muted-custom mt-2 fw-medium">Active Requests</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-navy mb-0">42</h2>
              <p className="text-muted-custom mt-2 fw-medium">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}