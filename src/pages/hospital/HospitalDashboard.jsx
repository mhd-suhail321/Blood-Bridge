import React from 'react';
import { Droplet, Activity, ArrowDownToLine, AlertCircle, TrendingUp } from 'lucide-react';

export default function HospitalDashboard() {
  return (
    <div className="container-fluid p-0">
      
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold text-navy mb-1">Apollo City Hospital Overview</h3>
        <p className="text-muted-custom m-0">Monitor your inventory, incoming donations, and patient requests.</p>
      </div>

      {/* Stats Row */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Total Blood Units</p>
                <h3 className="fw-bold text-navy mb-0">1,245</h3>
              </div>
              <div className="bg-primary-light p-2 rounded-3 text-teal">
                <Droplet size={24} fill="currentColor" />
              </div>
            </div>
            <div className="text-success small fw-medium d-flex align-items-center gap-1">
              <TrendingUp size={14} /> +45 Units this week
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Incoming Donations</p>
                <h3 className="fw-bold text-navy mb-0">18</h3>
              </div>
              <div className="bg-success bg-opacity-10 p-2 rounded-3 text-success">
                <ArrowDownToLine size={24} />
              </div>
            </div>
            <div className="text-muted-custom small fw-medium">Scheduled for today</div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Active Requests</p>
                <h3 className="fw-bold text-navy mb-0">24</h3>
              </div>
              <div className="bg-warning bg-opacity-10 p-2 rounded-3 text-warning">
                <Activity size={24} />
              </div>
            </div>
            <div className="text-warning small fw-medium d-flex align-items-center gap-1">
              5 marked as Emergency
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100 shadow-sm border-bottom border-danger border-4">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Critical Stock Alerts</p>
                <h3 className="fw-bold text-danger mb-0">O-, AB-</h3>
              </div>
              <div className="bg-danger bg-opacity-10 p-2 rounded-3 text-danger">
                <AlertCircle size={24} />
              </div>
            </div>
            <div className="text-danger small fw-medium mt-2">Below 10 units available</div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Incoming Donations Table */}
        <div className="col-12 col-xl-7">
          <div className="card border-0 p-4 shadow-sm h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-navy m-0">Incoming Donations (Today)</h5>
              <button className="btn btn-outline-primary btn-sm bg-surface">View Schedule</button>
            </div>
            
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead className="bg-surface-light text-muted-custom small">
                  <tr>
                    <th className="py-3 border-0 rounded-start">Donor</th>
                    <th className="py-3 border-0">Blood Group</th>
                    <th className="py-3 border-0">Time</th>
                    <th className="py-3 border-0 rounded-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 text-navy fw-medium">Arun Kumar</td>
                    <td className="py-3"><span className="badge badge-soft-danger">O+</span></td>
                    <td className="py-3 text-muted-custom">10:30 AM</td>
                    <td className="py-3"><span className="badge badge-soft-warning">Expected</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-navy fw-medium">Priya Sharma</td>
                    <td className="py-3"><span className="badge badge-soft-danger">A-</span></td>
                    <td className="py-3 text-muted-custom">11:15 AM</td>
                    <td className="py-3"><span className="badge badge-soft-success">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-navy fw-medium">Vikram Singh</td>
                    <td className="py-3"><span className="badge badge-soft-danger">B+</span></td>
                    <td className="py-3 text-muted-custom">02:00 PM</td>
                    <td className="py-3"><span className="badge badge-soft-warning">Expected</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-12 col-xl-5">
          <div className="card border-0 p-4 shadow-sm h-100 bg-primary-light">
            <h5 className="fw-bold text-teal mb-4">Quick Actions</h5>
            
            <div className="d-flex flex-column gap-3">
              <button className="btn btn-surface text-navy fw-medium p-3 text-start d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3 border-0">
                <span><Droplet size={18} className="me-2 text-teal" /> Update Blood Inventory</span>
                <i className="bi bi-chevron-right text-muted-custom"></i>
              </button>
              
              <button className="btn btn-surface text-navy fw-medium p-3 text-start d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3 border-0">
                <span><Activity size={18} className="me-2 text-teal" /> Manage Patient Requests</span>
                <i className="bi bi-chevron-right text-muted-custom"></i>
              </button>
              
              <button className="btn btn-surface text-danger fw-medium p-3 text-start d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3 border-0">
                <span><AlertCircle size={18} className="me-2 text-danger" /> Issue Emergency Broadcast</span>
                <i className="bi bi-chevron-right text-muted-custom"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}