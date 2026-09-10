import React from 'react';
import { Camera, Shield } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold text-navy mb-1">Account Settings</h3>
        <p className="text-muted-custom m-0">Manage your personal information and preferences.</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-xl-4">
          <div className="card border-0 p-4 shadow-sm text-center">
            <div className="position-relative d-inline-block mx-auto mb-3">
              <img src="https://ui-avatars.com/api/?name=Arun+Kumar&background=CCFBF1&color=0F766E&size=120" className="rounded-circle border" alt="Profile" />
              <button className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 p-2 shadow" style={{transform: 'translate(10%, 10%)'}}>
                <Camera size={18} />
              </button>
            </div>
            <h5 className="fw-bold text-navy mb-1">Arun Kumar</h5>
            <p className="text-muted-custom small mb-3">Donor • O+ Blood Group</p>
            <span className="badge badge-soft-primary px-3 py-2 w-100 d-flex justify-content-center align-items-center gap-2">
              <Shield size={16} /> Identity Verified
            </span>
          </div>
        </div>

        <div className="col-12 col-xl-8">
          <div className="card border-0 p-4 shadow-sm">
            <h5 className="fw-bold text-navy mb-4 border-bottom pb-3">Personal Details</h5>
            <form>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">Full Name</label>
                  <input type="text" className="form-control" defaultValue="Arun Kumar" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">Email Address</label>
                  <input type="email" className="form-control" defaultValue="arun@example.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">Phone Number</label>
                  <input type="tel" className="form-control" defaultValue="+91 98765 43210" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">City / Location</label>
                  <input type="text" className="form-control" defaultValue="Bangalore" />
                </div>
              </div>

              <h5 className="fw-bold text-navy mb-4 border-bottom pb-3">Preferences</h5>
              <div className="mb-4">
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" id="emailNotif" defaultChecked />
                  <label className="form-check-label fw-medium text-navy" htmlFor="emailNotif">Email Notifications</label>
                  <div className="text-muted-custom small">Receive emails about urgent blood requests nearby.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="availableStatus" defaultChecked />
                  <label className="form-check-label fw-medium text-navy" htmlFor="availableStatus">Available to Donate</label>
                  <div className="text-muted-custom small">Show up in search results for hospitals and recipients.</div>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-4">
                <button type="button" className="btn btn-outline-primary bg-surface px-4">Cancel</button>
                <button type="submit" className="btn btn-primary px-5">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}