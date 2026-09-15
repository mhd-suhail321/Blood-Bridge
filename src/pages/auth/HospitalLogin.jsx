import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplet, Building, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/authContext';

export default function HospitalLogin() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  
  // Setup State for Email instead of Hospital ID
  const [email, setEmail] = useState('admin@apollo.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Mock Hospital Login Check (Use admin@apollo.com / password to test)
      if (email === 'admin@apollo.com' && password === 'password') {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use AuthContext to store user data with the 'HOSPITAL' role!
        loginUser({ email, role: 'HOSPITAL', name: 'Apollo City Hospital' }, 'mock-hospital-token');
        
        // Redirect to the Hospital Dashboard
        navigate('/hospital/dashboard');
      } else {
        setError('Invalid email or password (Try admin@apollo.com / password)');
      }
    } catch {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-4 py-md-5" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container-fluid" style={{ maxWidth: '900px' }}>
        <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
          <div className="row g-0">
            
            {/* Left Side: Branding / Info */}
            <div className="col-12 col-md-5 bg-primary-light p-4 p-md-5 d-flex flex-column justify-content-center text-center border-end">
              <div className="mb-4 d-flex justify-content-center align-items-center gap-2">
                <Droplet size={32} style={{ color: 'var(--primary)' }} fill="currentColor" />
                <span className="fs-3 fw-bolder text-navy">BloodBridge</span>
              </div>
              <Building size={48} className="text-teal mx-auto mb-3" />
              <h4 className="fw-bold text-navy mb-3">Partner Portal</h4>
              <p className="text-muted-custom small mb-4">
                Secure access for verified hospitals and blood banks to manage inventory and patient requests.
              </p>
              <div className="d-flex align-items-center justify-content-center gap-2 text-success small fw-medium">
                <ShieldCheck size={16} /> HIPAA Compliant Portal
              </div>
            </div>

            {/* Right Side: The Login Form */}
            <div className="col-12 col-md-7 p-4 p-md-5 bg-surface">
              <div className="mb-4 text-center">
                <h4 className="fw-bold text-navy">Hospital Login</h4>
                <p className="text-muted-custom small m-0">Enter your official registered email.</p>
              </div>

              {/* Show Error Message if login fails */}
              {error && (
                <div className="alert alert-danger bg-danger bg-opacity-10 text-danger border-0 rounded-3 mb-4 py-2 px-3 small fw-medium">
                  <i className="bi bi-exclamation-circle me-2"></i>{error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-medium text-navy small">Registered Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg bg-surface-light border-0" 
                    placeholder="admin@hospital.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="form-label fw-medium text-navy small mb-0">Password</label>
                    <a href="#" className="text-teal small text-decoration-none fw-medium">Forgot Password?</a>
                  </div>
                  <input 
                    type="password" 
                    className="form-control form-control-lg mt-2 bg-surface-light border-0" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 fw-medium mb-4 shadow-sm" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Access Dashboard'}
                </button>
              </form>

              <div className="text-center mt-2 border-top pt-4">
                <p className="text-muted-custom small m-0">
                  Not a hospital? <Link to="/login" className="text-teal text-decoration-none fw-bold">Return to User Login</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}