import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplet } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  
  // 1. Setup State to make the form functional (Responsive to typing)
  const [role, setRole] = useState('DONOR');
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    location: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend/Spring Boot API
    console.log("Creating account for:", { role, ...formData });
    
    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    // Fixed Mobile Responsiveness: Added py-4 for mobile spacing
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-4 py-md-5" style={{ backgroundColor: 'var(--background)' }}>
      {/* Changed container to container-fluid with max-width for better mobile handling */}
      <div className="container-fluid" style={{ maxWidth: '800px' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            <div className="text-center mb-4">
              <Link to="/" className="text-decoration-none text-navy fw-bold fs-3 d-flex align-items-center justify-content-center gap-2">
                <Droplet size={28} style={{ color: 'var(--primary)' }} fill="currentColor" /> 
                BloodBridge
              </Link>
            </div>

            {/* Adjusted padding (p-3 p-sm-4 p-md-5) so it doesn't overflow on tiny mobile screens */}
            <div className="card border-0 p-3 p-sm-4 p-md-5 shadow-sm" style={{ borderRadius: '20px' }}>
              <div className="mb-4 text-center">
                <h4 className="fw-bold text-navy">Create an Account</h4>
                <p className="text-muted-custom small mb-0">Join our community to give or receive blood.</p>
              </div>

              {/* Role Selection - Stacked on tiny screens, side-by-side on larger */}
              <div className="d-flex flex-column flex-sm-row gap-2 mb-4 p-1 rounded-3 bg-surface-light border">
                <button 
                  type="button"
                  className={`btn flex-grow-1 fw-medium border-0 py-2 ${role === 'DONOR' ? 'btn-primary' : 'btn-light text-muted-custom'}`}
                  onClick={() => setRole('DONOR')}
                >
                  I want to Donate
                </button>
                <button 
                  type="button"
                  className={`btn flex-grow-1 fw-medium border-0 py-2 ${role === 'RECIPIENT' ? 'btn-primary' : 'btn-light text-muted-custom'}`}
                  onClick={() => setRole('RECIPIENT')}
                >
                  I need Blood
                </button>
              </div>

              {/* The Form */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium text-navy small">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-medium text-navy small">Blood Group</label>
                    <select 
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="form-select" 
                      required
                    >
                      <option value="">Select Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium text-navy small">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium text-navy small">City / Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="e.g. Bangalore" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-medium text-navy small">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 fw-medium mb-3">
                  Create Account
                </button>
              </form>

              <div className="text-center mt-2">
                <p className="text-muted-custom small m-0">
                  Already have an account? <Link to="/login" className="text-teal text-decoration-none fw-bold">Sign in</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}