import React, { useState, useEffect } from 'react';
import { Search, MapPin, CheckCircle, Clock, SearchX, HeartPulse } from 'lucide-react';
import EmptyState from '../../components/common/EmptyState';
import ActionModal from '../../components/common/ActionModal';

export default function FindDonors() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [donors, setDonors] = useState([]);
  
  // Modal State
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulate an API search
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    
    // Fake 2-second loading delay to show Skeletons
    setTimeout(() => {
      // Toggle this between [] and the real data to test the Empty State!
      const mockData = [
        { id: 1, name: 'Arun Kumar', group: 'O+', location: 'Kallakurichi', distance: '8.4 km', available: true },
        { id: 2, name: 'Priya Sharma', group: 'O+', location: 'Erode', distance: '12.1 km', available: true }
      ];
      setDonors(mockData); 
      setIsLoading(false);
    }, 1500);
  };

  const handleOpenModal = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const handleConfirmRequest = () => {
    console.log("Requested blood from:", selectedDonor.name);
    setIsModalOpen(false);
    // Add success toast or notification here later!
  };

  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold text-navy mb-1">Find a Blood Donor</h3>
        <p className="text-muted-custom m-0">Search and connect with verified donors in your area.</p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="card border-0 p-4 mb-4 bg-surface shadow-sm" style={{ borderRadius: '16px' }}>
        <div className="row g-3 align-items-end">
          <div className="col-12 col-md-3">
            <label className="form-label fw-medium text-navy small">Blood Group</label>
            <select className="form-select">
              <option value="O+">O+</option>
              <option value="A-">A-</option>
            </select>
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label fw-medium text-navy small">Location</label>
            <div className="input-group">
              <span className="input-group-text bg-surface-light border-end-0 text-muted-custom"><MapPin size={18} /></span>
              <input type="text" className="form-control border-start-0" placeholder="Enter city or zip code" />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <label className="form-label fw-medium text-navy small">Maximum Distance</label>
            <select className="form-select">
              <option value="10">Within 10 km</option>
              <option value="25">Within 25 km</option>
            </select>
          </div>
          <div className="col-12 col-md-2">
            <button type="submit" className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </form>

      {/* Results Area */}
      <div className="row g-4">
        
        {/* 1. LOADING SKELETONS (Shown while fetching) */}
        {isLoading && [1, 2, 3].map((n) => (
          <div key={n} className="col-12 col-md-6 col-xl-4">
            <div className="card border-0 p-4 h-100 text-center shadow-sm" aria-hidden="true">
              <div className="placeholder-glow">
                <div className="placeholder rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}></div>
                <div className="placeholder col-6 mb-2 rounded"></div>
                <br/>
                <div className="placeholder col-4 mb-4 rounded"></div>
                <div className="d-flex gap-2">
                  <div className="placeholder col-6 btn btn-light disabled"></div>
                  <div className="placeholder col-6 btn btn-primary disabled"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2. EMPTY STATE (Shown if search finished but array is empty) */}
        {!isLoading && hasSearched && donors.length === 0 && (
          <EmptyState 
            icon={SearchX} 
            title="No Donors Found" 
            message="We couldn't find any donors matching your criteria in this area. Try expanding your search radius or checking a different blood group."
            actionText="Clear Filters"
            onAction={() => setHasSearched(false)}
          />
        )}

        {/* 3. ACTUAL RESULTS */}
        {!isLoading && donors.map(donor => (
          <div key={donor.id} className="col-12 col-md-6 col-xl-4">
            <div className="card border-0 p-4 h-100 text-center position-relative shadow-sm hover-elevate">
              <div className="position-absolute top-0 end-0 p-3">
                <span className="badge badge-soft-primary"><CheckCircle size={12} className="me-1" /> Verified</span>
              </div>
              <img src={`https://ui-avatars.com/api/?name=${donor.name.replace(' ', '+')}&background=F8FAFC&color=0F172A`} alt={donor.name} className="rounded-circle mx-auto mb-3 border" width="80" />
              <h5 className="fw-bold text-navy mb-1">{donor.name}</h5>
              
              <div className="d-flex justify-content-center gap-2 mb-3">
                <span className="badge badge-soft-danger fs-6">{donor.group}</span>
                <span className="badge badge-soft-neutral"><MapPin size={12} className="me-1"/> {donor.location}</span>
              </div>
              
              <div className="text-muted-custom small mb-4">
                <span className="text-success fw-medium"><Clock size={14} className="me-1"/> Available Now</span>
              </div>

              <div className="d-flex gap-2 mt-auto">
                <button className="btn btn-outline-primary flex-grow-1 bg-surface">Profile</button>
                <button 
                  className="btn btn-primary flex-grow-1"
                  onClick={() => handleOpenModal(donor)} // Triggers Modal!
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. THE ACTION MODAL */}
      {selectedDonor && (
        <ActionModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmRequest}
          title="Send Blood Request"
          message={`Are you sure you want to send a direct blood request to ${selectedDonor.name}? They will be notified immediately.`}
          confirmText="Send Request"
          confirmStyle="primary"
          icon={HeartPulse}
        />
      )}
    </div>
  );
}