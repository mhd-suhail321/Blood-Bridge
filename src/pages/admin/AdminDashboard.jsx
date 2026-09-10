import React from 'react';
import { Users, Building, Activity, AlertTriangle, ShieldCheck, MoreVertical } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="container-fluid p-0">
      
      <div className="mb-4 d-flex justify-content-between align-items-end">
        <div>
          <h3 className="fw-bold text-navy mb-1">Platform Administration</h3>
          <p className="text-muted-custom m-0">System overview, user management, and platform health.</p>
        </div>
        <button className="btn btn-outline-primary bg-surface fw-medium px-3 d-flex align-items-center gap-2">
          <AlertTriangle size={18} className="text-danger" /> System Alerts
        </button>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Total Users</p>
                <h3 className="fw-bold text-navy mb-0">12,450</h3>
              </div>
              <div className="bg-primary-light p-2 rounded-3 text-teal">
                <Users size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Partner Hospitals</p>
                <h3 className="fw-bold text-navy mb-0">42</h3>
              </div>
              <div className="bg-primary-light p-2 rounded-3 text-teal">
                <Building size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Total Donations</p>
                <h3 className="fw-bold text-navy mb-0">8,230</h3>
              </div>
              <div className="bg-success bg-opacity-10 p-2 rounded-3 text-success">
                <Activity size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm border-bottom border-danger border-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Unverified Users</p>
                <h3 className="fw-bold text-danger mb-0">124</h3>
              </div>
              <div className="bg-danger bg-opacity-10 p-2 rounded-3 text-danger">
                <ShieldCheck size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 p-4 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold text-navy m-0">Recent Registrations</h5>
          <button className="btn btn-outline-primary btn-sm bg-surface">View All Users</button>
        </div>
        
        <div className="table-responsive">
          <table className="table table-hover mb-0 align-middle">
            <thead className="bg-surface-light text-muted-custom small">
              <tr>
                <th className="py-3 border-0 ps-3 rounded-start">User Info</th>
                <th className="py-3 border-0">Role</th>
                <th className="py-3 border-0">Location</th>
                <th className="py-3 border-0">Status</th>
                <th className="py-3 border-0 text-end pe-3 rounded-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 ps-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=CCFBF1&color=0F766E" className="rounded-circle" width="40" alt="Avatar" />
                    <div>
                      <h6 className="fw-bold text-navy m-0">Priya Sharma</h6>
                      <small className="text-muted-custom">priya@example.com</small>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-muted-custom fw-medium">Donor</td>
                <td className="py-3 text-muted-custom">Erode</td>
                <td className="py-3"><span className="badge badge-soft-warning">Pending Review</span></td>
                <td className="py-3 text-end pe-3">
                  <button className="btn btn-sm btn-light text-muted-custom"><MoreVertical size={16}/></button>
                </td>
              </tr>
              <tr>
                <td className="py-3 ps-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                      <Building size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold text-navy m-0">City Care Clinic</h6>
                      <small className="text-muted-custom">admin@citycare.com</small>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-muted-custom fw-medium">Hospital</td>
                <td className="py-3 text-muted-custom">Bangalore</td>
                <td className="py-3"><span className="badge badge-soft-success">Verified</span></td>
                <td className="py-3 text-end pe-3">
                  <button className="btn btn-sm btn-light text-muted-custom"><MoreVertical size={16}/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}