# BloodConnect - Blood Donation Platform 🩸

A modern, community-driven blood donation platform built with React + Vite. Connect blood donors, recipients, hospitals, and administrators in a unified ecosystem to save lives.

## ✨ Features

- **👥 Multi-Role System**: Support for Donors, Recipients, Hospitals, and Admins
- **🔐 Secure Authentication**: JWT-based authentication with persistent sessions
- **📍 Location-Based Search**: Find compatible blood donors near you
- **🚨 Emergency Requests**: Urgent blood request notifications
- **📊 Comprehensive Dashboards**: Role-specific dashboards for all user types
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎨 Modern UI**: Built with Bootstrap 5 and custom CSS variables
- **⚡ Hot Module Reloading**: Instant feedback during development

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.8
- **Build Tool**: Vite 8.2.2 with Oxc linting
- **CSS Framework**: Bootstrap 5
- **Routing**: React Router 7.18.3
- **HTTP Client**: Axios 1.20.0
- **Icons**: Lucide React 1.43.0
- **State Management**: React Context API
- **Styling**: Bootstrap + Custom CSS Variables

## 📋 Prerequisites

- Node.js v14+ (tested on v11.19.0)
- npm or yarn package manager
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/bloodconnect.git
cd bloodconnect
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=BloodConnect
```

### 4. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5174/`

## 📦 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Oxlint checks
npm run lint
```

## 📁 Project Structure

```
bloodconnect/
├── src/
│   ├── components/          # Reusable components
│   │   └── common/         # Shared components (ActionModal, EmptyState, BloodGroupBadge)
│   ├── context/            # React Context (AuthContext)
│   ├── data/               # Mock data and constants
│   ├── layouts/            # Layout components (DashboardLayout)
│   ├── pages/              # Page components
│   │   ├── public/         # Public pages (LandingPage)
│   │   ├── auth/           # Auth pages (LoginPage, RegisterPage)
│   │   ├── donor/          # Donor-specific pages
│   │   ├── recipient/      # Recipient-specific pages
│   │   ├── hospital/       # Hospital-specific pages
│   │   └── admin/          # Admin-specific pages
│   ├── routes/             # Route configuration
│   ├── services/           # API services and auth logic
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles and CSS variables
│   └── App.css             # App-level animations and overrides
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🔐 Authentication

### Demo Credentials

Default test user (pre-filled in login form):
- **Email**: `donor@example.com`
- **Password**: `password`
- **Role**: Donor

The app uses a mock authentication service that simulates backend API responses. Replace with actual API calls in `src/services/authService.js`.

### Authentication Flow

1. User enters credentials on LoginPage
2. AuthService validates against mock users
3. AuthContext stores user data and JWT token in localStorage
4. Protected routes check user role and redirect to appropriate dashboard
5. Axios interceptor adds Authorization header to all API requests

## 🎨 Styling

The project uses Bootstrap 5 with custom CSS variables for theming:

```css
:root {
    --primary: #0F766E;           /* Teal */
    --navy: #0F172A;              /* Navy */
    --background: #ECF8F5;        /* Light Teal */
    --surface: #FFFFFF;           /* White */
    --text-primary: #0F172A;      /* Navy */
    --text-secondary: #64748B;    /* Gray */
    --danger: #FB7185;            /* Pink */
    --success: #16A34A;           /* Green */
}
```

### CSS Classes

- `.text-navy`, `.text-teal`, `.text-muted-custom` - Text colors
- `.badge-soft-*` - Soft badge variants
- `.btn-*` - Bootstrap buttons with custom styling
- `.card` - Styled card components

## 🔄 Component Architecture

### Pages
- **LandingPage**: Public homepage with features and CTA
- **LoginPage**: Authentication with demo credentials
- **RegisterPage**: User registration (scaffold)
- **DonorDashboard**: Donor activity and statistics
- **RecipientDashboard**: Blood request tracking
- **HospitalDashboard**: Inventory and patient management
- **AdminDashboard**: System overview and management

### Layouts
- **DashboardLayout**: Protected layout with sidebar and navbar

### Reusable Components
- **ActionModal**: Confirmation dialogs
- **EmptyState**: No-results state with icon and message
- **BloodGroupBadge**: Blood type display

## 🔗 API Integration

Currently using mock API with 500-800ms delays to simulate real backend.

### AuthService Mock Methods
```javascript
login(email, password)      // Returns { data: { user, token } }
register(userData)          // Placeholder
logout()                    // Clears localStorage
```

### To Connect Real API:
1. Update `.env` with actual `VITE_API_URL`
2. Replace mock methods in `src/services/authService.js`
3. Update Axios config in `src/services/api.js`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify / Vercel
```bash
# Netlify
npm install -g netlify-cli
netlify deploy --prod --dir dist

# Vercel
npm install -g vercel
vercel --prod
```

## 📚 Available Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page |
| `/login` | Public | User login |
| `/register` | Public | User registration |
| `/donor/dashboard` | Protected | Donor dashboard |
| `/find-donors` | Protected | Search donors |
| `/blood-requests` | Protected | Active requests |
| `/donor/profile` | Protected | User profile |
| `/recipient/dashboard` | Protected | Recipient dashboard |
| `/create-request` | Protected | Create blood request |
| `/hospital/dashboard` | Protected | Hospital dashboard |
| `/hospital/inventory` | Protected | Blood inventory |
| `/admin/dashboard` | Protected | Admin panel |

## 🔧 React Compiler

The React Compiler is not enabled by default due to performance impact. To enable it in development, see the [official documentation](https://react.dev/learn/react-compiler/installation).

## 📝 Expanding the Configuration

For production applications, consider:

1. **TypeScript Support**: Migrate to TypeScript for type safety
   ```bash
   npm install -D typescript @types/react @types/react-dom
   ```

2. **Enhanced Linting**: Enable TypeScript-aware Oxlint rules

3. **Testing**: Add Jest and React Testing Library
   ```bash
   npm install -D @testing-library/react @testing-library/jest-dom vitest
   ```

4. **State Management**: Consider Redux or Zustand for complex state

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

## 🙌 Acknowledgments

- React and Vite communities
- Bootstrap for UI framework
- Lucide React for icons
- All contributors and supporters

---

**Built with ❤️ by the BloodConnect Team**

Last Updated: September 2026
