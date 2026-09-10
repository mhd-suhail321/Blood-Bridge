import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Droplet, Grid, User, Settings, LogOut, Bell, Search, 
  HeartPulse, MapPin, Building, Archive, ClipboardList, ShieldCheck, Menu, X
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // NEW: State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkStyles = (path) => {
    const isActive = currentPath === path;
    return isActive 
      ? "d-flex align-items-center gap-3 px-3 py-2 text-decoration-none rounded-3 fw-medium active-link"
      : "d-flex align-items-center gap-3 px-3 py-2 text-decoration-none rounded-3 fw-medium text-muted-custom hover-bg-light";
  };

  const getActiveStyle = (path) => {
    return currentPath === path ? { backgroundColor: 'var(--primary-light)', color: 'var(--primary)' } : {};
  };

  // NEW: We extract the links so we don't have to write them twice (once for desktop, once for mobile)
  const renderNavLinks = () => (
    <nav className="d-flex flex-column gap-1 flex-grow-1" onClick={() => setIsMobileMenuOpen(false)}>
      
      <div className="text-muted-custom small fw-bold mt-3 mb-2 px-3" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>DONOR</div>
      <Link to="/donor/dashboard" className={getLinkStyles('/donor/dashboard')} style={getActiveStyle('/donor/dashboard')}><Grid size={20} /> Dashboard</Link>
      <Link to="/find-donors" className={getLinkStyles('/find-donors')} style={getActiveStyle('/find-donors')}><MapPin size={20} /> Find Donors</Link>
      <Link to="/blood-requests" className={getLinkStyles('/blood-requests')} style={getActiveStyle('/blood-requests')}><ClipboardList size={20} /> Active Requests</Link>

      <div className="text-muted-custom small fw-bold mt-4 mb-2 px-3" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>RECIPIENT</div>
      <Link to="/recipient/dashboard" className={getLinkStyles('/recipient/dashboard')} style={getActiveStyle('/recipient/dashboard')}><User size={20} /> My Requests</Link>
      <Link to="/create-request" className={getLinkStyles('/create-request')} style={getActiveStyle('/create-request')}><HeartPulse size={20} /> Request Blood</Link>

      <div className="text-muted-custom small fw-bold mt-4 mb-2 px-3" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>HOSPITAL</div>
      <Link to="/hospital/dashboard" className={getLinkStyles('/hospital/dashboard')} style={getActiveStyle('/hospital/dashboard')}><Building size={20} /> Hospital Dash</Link>
      <Link to="/hospital/inventory" className={getLinkStyles('/hospital/inventory')} style={getActiveStyle('/hospital/inventory')}><Archive size={20} /> Inventory</Link>

      <div className="text-muted-custom small fw-bold mt-4 mb-2 px-3" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>ADMIN</div>
      <Link to="/admin/dashboard" className={getLinkStyles('/admin/dashboard')} style={getActiveStyle('/admin/dashboard')}><ShieldCheck size={20} /> Admin Dash</Link>

      <div className="text-muted-custom small fw-bold mt-4 mb-2 px-3" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>ACCOUNT</div>
      <Link to="/donor/profile" className={getLinkStyles('/donor/profile')} style={getActiveStyle('/donor/profile')}><User size={20} /> Profile</Link>
      <Link to="/donor/settings" className={getLinkStyles('/donor/settings')} style={getActiveStyle('/donor/settings')}><Settings size={20} /> Settings</Link>
    </nav>
  );

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: 'var(--background)' }}>
      
      {/* 1. DESKTOP SIDEBAR (Hidden on screens smaller than large) */}
      <aside className="d-none d-lg-flex flex-column p-3 overflow-auto" style={{ width: '260px', backgroundColor: 'var(--surface)', borderRight: '1px solid var(--border)' }}>
        <div className="mb-4 px-3 d-flex align-items-center gap-2 mt-2">
          <Droplet size={26} style={{ color: 'var(--primary)' }} fill="currentColor" />
          <span className="fs-4 fw-bolder text-navy">BloodBridge</span>
        </div>
        {renderNavLinks()}
        <div className="mt-4 pt-3 border-top border-light">
          <button className="btn btn-link text-decoration-none text-muted-custom d-flex align-items-center gap-3 px-3 py-2 w-100 fw-medium hover-bg-light text-start">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* 2. MOBILE OFFCANVAS SIDEBAR (Controlled by state) */}
      {isMobileMenuOpen && (
        <>
          <div className="offcanvas-backdrop fade show" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="offcanvas offcanvas-start show" style={{ visibility: 'visible', backgroundColor: 'var(--surface)', width: '280px' }}>
            <div className="offcanvas-header border-bottom p-3">
              <div className="d-flex align-items-center gap-2">
                <Droplet size={26} style={{ color: 'var(--primary)' }} fill="currentColor" />
                <span className="fs-4 fw-bolder text-navy">BloodBridge</span>
              </div>
              <button type="button" className="btn-close shadow-none" onClick={() => setIsMobileMenuOpen(false)}></button>
            </div>
            <div className="offcanvas-body d-flex flex-column p-3">
              {renderNavLinks()}
              <div className="mt-4 pt-3 border-top border-light">
                <button className="btn btn-link text-decoration-none text-muted-custom d-flex align-items-center gap-3 px-3 py-2 w-100 fw-medium hover-bg-light text-start">
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="d-flex flex-column flex-grow-1 overflow-hidden w-100">
        
        {/* 3. TOP NAVBAR */}
        <header className="d-flex justify-content-between align-items-center px-4 px-md-5 w-100" style={{ height: '76px', backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          
          {/* Mobile Hamburger Button */}
          <button className="btn btn-link d-lg-none p-0 text-navy" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>

          {/* Search (Hidden on Mobile) */}
          <div className="input-group d-none d-md-flex" style={{ maxWidth: '300px' }}>
            <span className="input-group-text bg-surface-light border-0 rounded-start-pill text-muted-custom ps-3"><Search size={18} /></span>
            <input type="text" className="form-control bg-surface-light border-0 rounded-end-pill shadow-none" placeholder="Search..." />
          </div>
          
          {/* Right side: Notifications & Profile */}
          <div className="d-flex align-items-center gap-3 gap-md-4 ms-auto">
            <button className="btn btn-link text-muted-custom p-0 position-relative">
              <Bell size={22} />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-2 border-white rounded-circle"></span>
            </button>
            <div className="d-flex align-items-center gap-2 cursor-pointer">
              <img src="https://ui-avatars.com/api/?name=Arun+Kumar&background=CCFBF1&color=0F766E" alt="User" className="rounded-circle" width="38" />
              <span className="fw-bold text-navy d-none d-md-block">Arun Kumar</span>
            </div>
          </div>
        </header>

        {/* 4. DASHBOARD PAGE CONTENT */}
        <div className="p-3 p-md-4 p-lg-5 overflow-auto flex-grow-1">
          {children || <Outlet />} 
        </div>
      </main>
      
    </div>
  );
}