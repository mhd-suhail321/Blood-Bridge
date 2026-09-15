import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import '../../App.css';

export default function NotFound() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: 'var(--background)' }}>
      <div className="text-center">
        <FileQuestion size={56} className="text-teal mb-3" aria-hidden="true" />
        <p className="text-teal fw-bold mb-2">404</p>
        <h1 className="display-5 fw-bolder text-navy mb-3">Page not found</h1>
        <p className="text-muted-custom mb-4">The page you requested does not exist or has moved.</p>
        <Link to="/" className="btn btn-primary fw-medium">
          <ArrowLeft size={18} className="me-2" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
