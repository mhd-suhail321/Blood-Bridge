import React from 'react';

export default function CreateRequest() {
  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold text-navy mb-1">Create Blood Request</h3>
        <p className="text-muted-custom m-0">Fill out the details below to notify nearby matching donors.</p>
      </div>

      <div className="row">
        <div className="col-12 col-xl-8">
          <div className="card border-0 p-4 shadow-sm">
            <form>
              <h5 className="fw-bold text-navy mb-4 border-bottom pb-2">Patient Details</h5>
              
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy">Patient Name</label>
                  <input type="text" className="form-control" placeholder="Enter patient name" required />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-medium text-navy">Blood Group</label>
                  <select className="form-select" required>
                    <option value="">Select</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-medium text-navy">Units Required</label>
                  <input type="number" className="form-control" min="1" max="10" placeholder="1" required />
                </div>
              </div>

              <h5 className="fw-bold text-navy mb-4 border-bottom pb-2">Hospital & Urgency</h5>
              
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy">Hospital Name</label>
                  <input type="text" className="form-control" placeholder="Enter hospital name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy">City / Area</label>
                  <input type="text" className="form-control" placeholder="Enter hospital location" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy">Required By (Date)</label>
                  <input type="date" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium text-navy">Urgency Level</label>
                  <select className="form-select" required>
                    <option value="NORMAL">Normal (Within 2-3 Days)</option>
                    <option value="URGENT">Urgent (Within 24 Hours)</option>
                    <option value="EMERGENCY">Emergency (Immediate)</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label fw-medium text-navy">Additional Notes (Optional)</label>
                  <textarea className="form-control" rows="3" placeholder="Provide any specific medical instructions or contact details..."></textarea>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-2">
                <button type="button" className="btn btn-outline-primary bg-surface px-4">Cancel</button>
                <button type="submit" className="btn btn-primary px-5">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="col-12 col-xl-4 mt-4 mt-xl-0">
          <div className="card border-0 p-4 shadow-sm bg-primary-light">
            <h5 className="fw-bold text-teal mb-3">Guidelines</h5>
            <ul className="text-navy small lh-lg m-0 ps-3">
              <li>Ensure the hospital name is accurate for proper navigation.</li>
              <li>Only mark as <strong>Emergency</strong> if blood is required within the next 4 hours.</li>
              <li>Your contact information will only be shared with donors who accept the request.</li>
              <li>1 Unit of blood is approximately 350-450ml.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}