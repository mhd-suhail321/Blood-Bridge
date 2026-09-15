import React from 'react';
import { Plus, RefreshCw } from 'lucide-react';

export default function BloodInventory() {
  const inventory = [
    { group: 'A+', units: 245, status: 'Optimal', type: 'success' },
    { group: 'A-', units: 42, status: 'Low', type: 'warning' },
    { group: 'B+', units: 310, status: 'Optimal', type: 'success' },
    { group: 'B-', units: 18, status: 'Low', type: 'warning' },
    { group: 'AB+', units: 85, status: 'Optimal', type: 'success' },
    { group: 'AB-', units: 4, status: 'Critical', type: 'danger' },
    { group: 'O+', units: 420, status: 'Optimal', type: 'success' },
    { group: 'O-', units: 8, status: 'Critical', type: 'danger' },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-navy mb-1">Blood Inventory</h3>
          <p className="text-muted-custom m-0">Manage current blood stock and monitor expiration dates.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary bg-surface fw-medium px-3 d-flex align-items-center gap-2">
            <RefreshCw size={16} /> Sync
          </button>
          <button className="btn btn-primary fw-medium px-4 d-flex align-items-center gap-2">
            <Plus size={18} /> Add Units
          </button>
        </div>
      </div>

      <div className="card border-0 p-4 shadow-sm mb-4">
        <div className="row g-4">
          {inventory.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3">
              <div className={`p-3 rounded-4 border d-flex flex-column justify-content-between ${item.type === 'danger' ? 'bg-danger bg-opacity-10 border-danger border-opacity-25' : 'bg-surface-light'}`}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className={`fw-bold fs-3 ${item.type === 'danger' ? 'text-danger' : 'text-navy'}`}>{item.group}</span>
                  <span className={`badge badge-soft-${item.type}`}>{item.status}</span>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-2">
                  <div>
                    <h2 className="fw-bolder mb-0 text-navy">{item.units}</h2>
                    <span className="text-muted-custom small">Available Units</span>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width: '32px', height:'32px'}}><Plus size={14}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}