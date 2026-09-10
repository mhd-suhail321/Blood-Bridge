import React from 'react';
import { Lock, Bell, Trash2, ShieldCheck } from 'lucide-react';

export default function Settings() {
  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold text-navy mb-1">Account Settings</h3>
        <p className="text-muted-custom m-0">Manage your security and platform preferences.</p>
      </div>

      <div className="row g-4">
        {/* Left Column: Security Settings */}
        <div className="col-12 col-xl-7">
          <div className="card border-0 p-4 shadow-sm mb-4">
            <h5 className="fw-bold text-navy mb-4 d-flex align-items-center gap-2">
              <Lock size={20} className="text-teal" /> Change Password
            </h5>
            <form>
              <div className="mb-3">
                <label className="form-label fw-medium text-navy small">Current Password</label>
                <input type="password" className="form-control" placeholder="Enter current password" />
              </div>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">New Password</label>
                  <input type="password" className="form-control" placeholder="Enter new password" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy small">Confirm New Password</label>
                  <input type="password" className="form-control" placeholder="Confirm new password" />
                </div>
              </div>
              <button type="button" className="btn btn-primary fw-medium px-4">Update Password</button>
            </form>
          </div>

          <div className="card border-0 p-4 shadow-sm border-danger border-opacity-25 border-1">
            <h5 className="fw-bold text-danger mb-2 d-flex align-items-center gap-2">
              <Trash2 size={20} /> Delete Account
            </h5>
            <p className="text-muted-custom small mb-4">
              Once you delete your account, there is no going back. Please be certain. All your donation history and active requests will be permanently removed.
            </p>
            <div>
              <button type="button" className="btn btn-outline-danger fw-medium px-4 bg-white">Delete My Account</button>
            </div>
          </div>
        </div>

        {/* Right Column: Notifications & Privacy */}
        <div className="col-12 col-xl-5">
          <div className="card border-0 p-4 shadow-sm mb-4">
            <h5 className="fw-bold text-navy mb-4 d-flex align-items-center gap-2">
              <Bell size={20} className="text-teal" /> Notification Preferences
            </h5>
            
            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
              <div>
                <h6 className="fw-bold text-navy m-0">Emergency Alerts</h6>
                <small className="text-muted-custom">Get notified when a nearby patient needs blood instantly.</small>
              </div>
              <div className="form-check form-switch fs-5 m-0">
                <input className="form-check-input" type="checkbox" defaultChecked />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
              <div>
                <h6 className="fw-bold text-navy m-0">Donation Reminders</h6>
                <small className="text-muted-custom">Receive reminders when you are eligible to donate again.</small>
              </div>
              <div className="form-check form-switch fs-5 m-0">
                <input className="form-check-input" type="checkbox" defaultChecked />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="fw-bold text-navy m-0">Marketing Emails</h6>
                <small className="text-muted-custom">Updates on BloodBridge events and news.</small>
              </div>
              <div className="form-check form-switch fs-5 m-0">
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
          </div>

          <div className="card border-0 p-4 shadow-sm bg-primary-light text-center">
            <ShieldCheck size={40} className="text-teal mx-auto mb-3" />
            <h5 className="fw-bold text-navy mb-2">Two-Factor Authentication</h5>
            <p className="text-muted-custom small mb-4">Add an extra layer of security to your account by enabling 2FA.</p>
            <button className="btn btn-primary fw-medium w-100">Enable 2FA</button>
          </div>
        </div>
      </div>
    </div>
  );
}