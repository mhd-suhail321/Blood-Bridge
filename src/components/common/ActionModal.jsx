import React from 'react';

export default function ActionModal({ isOpen, onClose, onConfirm, title, message, confirmText, confirmStyle = "primary", icon: Icon }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dark semi-transparent backdrop */}
      <div className="modal-backdrop fade show" style={{ opacity: 0.5 }}></div>
      
      {/* Modal Container */}
      <div className="modal fade show d-block" tabIndex="-1" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
            
            <div className="modal-header border-0 pb-0 mt-2 px-4">
              <div className={`bg-${confirmStyle} bg-opacity-10 text-${confirmStyle} rounded-circle d-flex align-items-center justify-content-center me-3`} style={{ width: '48px', height: '48px' }}>
                <Icon size={24} />
              </div>
              <h5 className="modal-title fw-bold text-navy m-0">{title}</h5>
              <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
            </div>
            
            <div className="modal-body px-4 py-3 text-muted-custom">
              {message}
            </div>
            
            <div className="modal-footer border-0 pt-0 px-4 mb-2">
              <button type="button" className="btn btn-light fw-medium px-4 text-muted-custom" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className={`btn btn-${confirmStyle} fw-medium px-4`} onClick={onConfirm}>
                {confirmText}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}