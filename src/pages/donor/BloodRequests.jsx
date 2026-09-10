import React, { useState } from 'react';
import { Droplet, MapPin, Clock, AlertCircle, Share2, Heart } from 'lucide-react';

export default function BloodRequests() {
  const [filter, setFilter] = useState('ALL');

  // Mock Request Data
  const requests = [
    { id: 1, patient: 'Rahul S.', group: 'O-', hospital: 'Apollo City Hospital', distance: '4.2 km', units: 2, urgency: 'EMERGENCY', date: 'Today, 6:00 PM', matched: 1 },
    { id: 2, patient: 'Meera K.', group: 'A+', hospital: 'Global Health City', distance: '12.5 km', units: 1, urgency: 'URGENT', date: 'Tomorrow, 10:00 AM', matched: 3 },
    { id: 3, patient: 'Suresh V.', group: 'B+', hospital: 'Metro General Hospital', distance: '8.1 km', units: 3, urgency: 'NORMAL', date: '14 Sep 2026', matched: 0 },
    { id: 4, patient: 'Ananya M.', group: 'O+', hospital: 'City Care Clinic', distance: '2.5 km', units: 1, urgency: 'EMERGENCY', date: 'Today, 8:30 PM', matched: 2 },
  ];

  return (
    <div className="container-fluid p-0">
      
      {/* Header & Filters */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-navy mb-1">Active Blood Requests</h3>
          <p className="text-muted-custom m-0">Patients in your city who urgently need your help.</p>
        </div>
        
        {/* Modern Pill Filters */}
        <div className="d-flex gap-2 overflow-auto pb-1" style={{ whiteSpace: 'nowrap' }}>
          <button className={`btn rounded-pill px-4 fw-medium ${filter === 'ALL' ? 'btn-navy text-white bg-navy' : 'btn-light border text-muted-custom'}`} onClick={() => setFilter('ALL')} style={filter === 'ALL' ? { backgroundColor: 'var(--navy)' } : {}}>All Requests</button>
          <button className={`btn rounded-pill px-4 fw-medium ${filter === 'EMERGENCY' ? 'btn-danger text-white' : 'btn-light border text-muted-custom'}`} onClick={() => setFilter('EMERGENCY')}>Emergency</button>
          <button className={`btn rounded-pill px-4 fw-medium ${filter === 'URGENT' ? 'btn-warning text-dark' : 'btn-light border text-muted-custom'}`} onClick={() => setFilter('URGENT')}>Urgent</button>
        </div>
      </div>

      {/* Requests Grid */}
      <div className="row g-4">
        {requests.filter(r => filter === 'ALL' || r.urgency === filter).map(request => (
          <div key={request.id} className="col-12 col-md-6 col-xl-4">
            
            {/* Request Card */}
            <div className={`card border-0 p-4 h-100 shadow-sm ${request.urgency === 'EMERGENCY' ? 'border-top border-danger border-4' : ''}`}>
              
              {/* Top Row: Blood Group & Urgency */}
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-danger text-white rounded-3 d-flex justify-content-center align-items-center shadow-sm" style={{width: '50px', height: '50px'}}>
                    <span className="fs-5 fw-bold">{request.group}</span>
                  </div>
                  <div>
                    <h6 className="fw-bold text-navy mb-0">{request.patient}</h6>
                    <small className="text-muted-custom">{request.units} Units Required</small>
                  </div>
                </div>
                
                {request.urgency === 'EMERGENCY' && <span className="badge badge-soft-danger px-2 py-1"><AlertCircle size={12} className="me-1"/> Emergency</span>}
                {request.urgency === 'URGENT' && <span className="badge badge-soft-warning px-2 py-1">Urgent</span>}
                {request.urgency === 'NORMAL' && <span className="badge badge-soft-neutral px-2 py-1">Normal</span>}
              </div>

              {/* Middle Row: Details */}
              <div className="text-muted-custom small d-flex flex-column gap-2 mb-4 bg-surface-light p-3 rounded-3 border">
                <div className="d-flex align-items-center gap-2">
                  <MapPin size={16} className="text-teal" />
                  <span className="fw-medium text-navy">{request.hospital}</span>
                  <span className="ms-auto">{request.distance}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Clock size={16} className="text-teal" />
                  <span>Required by: <span className="fw-medium text-navy">{request.date}</span></span>
                </div>
              </div>

              {/* Bottom Row: Actions */}
              <div className="mt-auto d-flex gap-2">
                <button className="btn btn-primary flex-grow-1 fw-medium d-flex justify-content-center align-items-center gap-2">
                  <Heart size={18} /> Accept
                </button>
                <button className="btn btn-outline-primary bg-surface fw-medium px-3">
                  <Share2 size={18} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}