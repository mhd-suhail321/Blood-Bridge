import React from 'react';
// Added 'Heart' to the imports here!
import { Droplet, Activity, Calendar, Clock, MapPin, Heart } from 'lucide-react';

export default function DonorDashboard() {
  return (
    <div className="container-fluid p-0">
      
      {/* Header Section */}
      <div className="mb-4 d-flex justify-content-between align-items-end">
        <div>
          <h3 className="fw-bold text-navy mb-1">Welcome back, Arun</h3>
          <p className="text-muted-custom m-0">Here is your donation activity and nearby requests.</p>
        </div>
        <div>
          <span className="badge badge-soft-success fs-6 py-2 px-3">
            <i className="bi bi-check-circle-fill me-1"></i> Available to Donate
          </span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Blood Group</p>
                <h3 className="fw-bold text-danger mb-0">O+</h3>
              </div>
              <div className="bg-danger bg-opacity-10 p-2 rounded-3 text-danger">
                <Droplet size={24} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Total Donations</p>
                <h3 className="fw-bold text-navy mb-0">4</h3>
              </div>
              <div className="bg-primary-light p-2 rounded-3 text-teal">
                <Activity size={24} />
              </div>
            </div>
            <div className="mt-3 text-success fs-7 fw-medium">
              Top 10% in your city
            </div>
          </div>
        </div>

        {/* LIVES SUPPORTED CARD (FIXED) */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Lives Supported</p>
                <h3 className="fw-bold text-navy mb-0">12</h3>
              </div>
              <div className="bg-primary-light p-2 rounded-3 text-teal">
                {/* Replaced the missing Bootstrap icon with the Lucide Heart icon */}
                <Heart size={24} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="text-muted-custom mb-1 fs-6">Next Eligible Date</p>
                <h4 className="fw-bold text-navy mb-0">Available Now</h4>
              </div>
              <div className="bg-success bg-opacity-10 p-2 rounded-3 text-success">
                <Calendar size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Urgent Nearby Requests */}
        <div className="col-12 col-xl-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold text-navy m-0">Nearby Urgent Requests</h5>
            <button className="btn btn-link text-teal text-decoration-none p-0">View Map</button>
          </div>

          <div className="card border-0 p-4 mb-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <span className="badge badge-soft-danger px-3 py-2 fs-6">O+</span>
              <span className="badge badge-soft-warning"><i className="bi bi-exclamation-triangle-fill"></i> Urgent</span>
            </div>
            <h6 className="fw-bold text-navy fs-5 mb-1">Apollo City Hospital</h6>
            <div className="text-muted-custom small d-flex flex-column gap-1 mb-4">
              <span><MapPin size={14} className="me-1"/> 4.2 km away • Bangalore</span>
              <span><Clock size={14} className="me-1"/> Required today</span>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary flex-grow-1 fw-medium">Accept Request</button>
              <button className="btn btn-outline-primary bg-surface flex-grow-1 fw-medium">Decline</button>
            </div>
          </div>
        </div>

        {/* Donation History Table */}
        <div className="col-12 col-xl-7">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold text-navy m-0">Donation History</h5>
            <button className="btn btn-outline-primary btn-sm bg-surface">View All</button>
          </div>

          <div className="card border-0 p-0 overflow-hidden">
            <div className="table-responsive">
              <table className="table table-borderless table-hover mb-0 align-middle">
                <thead className="bg-surface-light border-bottom">
                  <tr>
                    <th className="text-muted-custom fw-medium py-3 ps-4">Date</th>
                    <th className="text-muted-custom fw-medium py-3">Hospital</th>
                    <th className="text-muted-custom fw-medium py-3">Units</th>
                    <th className="text-muted-custom fw-medium py-3 pe-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 ps-4 text-navy fw-medium">12 Aug 2026</td>
                    <td className="py-3 text-muted-custom">City Care Hospital</td>
                    <td className="py-3 text-muted-custom">1 Unit</td>
                    <td className="py-3 pe-4"><span className="badge badge-soft-success">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-4 text-navy fw-medium">05 Apr 2026</td>
                    <td className="py-3 text-muted-custom">Metro General Hospital</td>
                    <td className="py-3 text-muted-custom">1 Unit</td>
                    <td className="py-3 pe-4"><span className="badge badge-soft-success">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-4 text-navy fw-medium">14 Nov 2025</td>
                    <td className="py-3 text-muted-custom">Global Health City</td>
                    <td className="py-3 text-muted-custom">1 Unit</td>
                    <td className="py-3 pe-4"><span className="badge badge-soft-success">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}