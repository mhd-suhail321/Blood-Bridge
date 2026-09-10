import React from 'react';

export default function EmptyState({ icon: Icon, title, message, actionText, onAction }) {
  return (
    <div className="card border-0 shadow-sm p-5 text-center w-100" style={{ borderRadius: '20px' }}>
      <div className="mx-auto mb-4 bg-surface-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
        <Icon size={40} className="text-muted-custom" />
      </div>
      <h4 className="fw-bold text-navy">{title}</h4>
      <p className="text-muted-custom mx-auto mb-4" style={{ maxWidth: '400px' }}>
        {message}
      </p>
      {actionText && onAction && (
        <div>
          <button onClick={onAction} className="btn btn-outline-primary bg-surface fw-medium px-4">
            {actionText}
          </button>
        </div>
      )}
    </div>
  );
}