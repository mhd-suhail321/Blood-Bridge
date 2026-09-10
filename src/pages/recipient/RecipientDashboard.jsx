import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Clock, CheckCircle, HeartPulse, User } from 'lucide-react';

export default function RecipientDashboard() {
  return (
    <div className="container-fluid p-0">
      
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-navy mb-1">Recipient Dashboard</h3>
          <p className="text-muted-custom m-0">Track your blood requests and matched donors.</p>
        </div>
        <Link to="/create-request" className="btn btn-primary fw-medium px-4 d-flex align-items-center gap-2">
          <HeartPulse size={18} /> New Request
        </Link>
      </div>

      <div className="row g-4">
        {/* Left Column: Active Request Status Tracker */}
        <div className="col-12 col-xl-8">
          <h5 className="fw-bold text-navy mb-3">Current Request Status</h5>
          
          <div className="card border-0 p-4 shadow-sm mb-4">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <span className="badge badge-soft-danger px-3 py-1 mb-2 fs-6">O- Requested</span>
                <h5 className="fw-bold text-navy m-0">Apollo City Hospital</h5>
                <p className="text-muted-custom small m-0">2 Units • Required Today</p>
              </div>
              <span className="badge badge-soft-primary px-3 py-2">
                <span className="spinner-grow spinner-grow-sm me-2" role="status"></span>
                In Progress
              </span>
            </div>

            {/* Custom Modern Stepper/Timeline */}
            <div className="d-flex justify-content-between position-relative mt-4 mb-2">
              <div className="position-absolute top-50 start-0 end-0 translate-middle-y border-top border-2" style={{ zIndex: 0, borderColor: 'var(--border)' }}></div>
              <div className="position-absolute top-50 start-0 translate-middle-y border-top border-2 border-primary" style={{ zIndex: 0, width: '50%' }}></div>
              
              {/* Step 1 */}
              <div className="text-center position-relative" style={{ zIndex: 1 }}>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm" style={{ width: '40px', height: '40px' }}>
                  <CheckCircle size={20} />
                </div>
                <small className="fw-medium text-navy d-none d-sm-block">Created</small>
              </div>
              
              {/* Step 2 */}
              <div className="text-center position-relative" style={{ zIndex: 1 }}>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm" style={{ width: '40px', height: '40px' }}>
                  <Activity size={20} />
                </div>
                <small className="fw-medium text-navy d-none d-sm-block">Searching</small>
              </div>

              {/* Step 3 (Current) */}
              <div className="text-center position-relative" style={{ zIndex: 1 }}>
                <div className="bg-surface border border-2 border-primary text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '40px', height: '40px' }}>
                  <User size={20} />
                </div>
                <small className="fw-bold text-teal d-none d-sm-block">Donors Found (2)</small>
              </div>

              {/* Step 4 (Pending) */}
              <div className="text-center position-relative" style={{ zIndex: 1 }}>
                <div className="bg-surface-light border border-2 text-muted-custom rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '40px', height: '40px' }}>
                  <HeartPulse size={20} />
                </div>
                <small className="fw-medium text-muted-custom d-none d-sm-block">Completed</small>
              </div>
            </div>
          </div>
          
          {/* Matched Donors Box */}
          <h5 className="fw-bold text-navy mb-3">Matched Donors Responding</h5>
          <div className="card border-0 p-3 shadow-sm">
             <div className="d-flex align-items-center justify-content-between p-3 bg-surface-light rounded-3 border mb-2">
                <div className="d-flex align-items-center gap-3">
                   <img src="https://ui-avatars.com/api/?name=Arun+Kumar&background=CCFBF1&color=0F766E" className="rounded-circle" width="45" alt="Arun" />
                   <div>
                     <h6 className="fw-bold text-navy m-0">Arun Kumar</h6>
                     <small className="text-success fw-medium"><CheckCircle size={12} className="me-1"/> Accepted Request</small>
                   </div>
                </div>
                <button className="btn btn-outline-primary btn-sm bg-surface">Message</button>
             </div>
          </div>

        </div>

        {/* Right Column: Stats & History */}
        <div className="col-12 col-xl-4">
          <h5 className="fw-bold text-navy mb-3">Your Overview</h5>
          <div className="row g-3 mb-4">
            <div className="col-6 col-xl-12">
              <div className="card border-0 p-3 shadow-sm d-flex flex-row align-items-center gap-3">
                <div className="bg-primary-light p-3 rounded-3 text-teal"><Activity size={24} /></div>
                <div>
                  <h4 className="fw-bold text-navy m-0">3</h4>
                  <small className="text-muted-custom">Total Requests</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-xl-12">
              <div className="card border-0 p-3 shadow-sm d-flex flex-row align-items-center gap-3">
                <div className="bg-success bg-opacity-10 p-3 rounded-3 text-success"><CheckCircle size={24} /></div>
                <div>
                  <h4 className="fw-bold text-navy m-0">2</h4>
                  <small className="text-muted-custom">Completed</small>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}