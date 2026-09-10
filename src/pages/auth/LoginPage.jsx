import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Droplet } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  // 1. Setup State
  const [email, setEmail] = useState('donor@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  // 2. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Mock Login Check (Use donor@example.com / password to test)
      if (email === 'donor@example.com' && password === 'password') {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use AuthContext to store user data
        loginUser({ email, role: 'DONOR', name: 'Arun Kumar' }, 'mock-token-123');
        
        // Redirect to the Dashboard
        navigate('/donor/dashboard'); 
      } else {
        setError('Invalid email or password (Try donor@example.com / password)');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            
            {/* Logo area */}
            <div className="text-center mb-4">
              <Link to="/" className="text-decoration-none text-navy fw-bold fs-3 d-flex align-items-center justify-content-center gap-2">
                <Droplet size={28} style={{ color: 'var(--primary)' }} fill="currentColor" /> 
                BloodBridge
              </Link>
            </div>

            {/* Login Card */}
            <div className="card border-0 p-4 p-md-5" style={{ borderRadius: '20px' }}>
              <div className="mb-4 text-center">
                <h4 className="fw-bold text-navy">Welcome back</h4>
                <p className="text-muted-custom">Please enter your details to sign in.</p>
              </div>

              {/* Show Error Message if login fails */}
              {error && (
                <div className="alert alert-danger bg-danger bg-opacity-10 text-danger border-0 rounded-3 mb-4 py-2 px-3 small fw-medium">
                  <i className="bi bi-exclamation-circle me-2"></i>{error}
                </div>
              )}

              {/* Connect form to handleSubmit */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium text-navy">Email address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-medium text-navy d-flex justify-content-between">
                    Password
                    <Link to="/forgot-password" className="text-teal text-decoration-none small">Forgot password?</Link>
                  </label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>

                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label text-muted-custom" htmlFor="rememberMe">Remember for 30 days</label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 fw-medium mb-3" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="text-center mt-3">
                <p className="text-muted-custom m-0">
                  Don't have an account? <Link to="/register" className="text-teal text-decoration-none fw-medium">Sign up</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}