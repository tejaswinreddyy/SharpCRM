import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Leads from './pages/Leads';
import Contacts from './pages/Contacts';
import Deals from './pages/Deals';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Overview from './pages/Analytics/Overview';
import Personal from './pages/Settings/General/Personal';
import Dealers from './pages/Dealers';
import Subsidiaries from './pages/Subsidiries';
import AllReports from './pages/Reports/AllReports';
import Favourites from './pages/Reports/Favourites';
import ScheduledReports from './pages/Reports/ScheduledReports';
import LeadAnalytics from './pages/Analytics/LeadAnalytics';
import DealInsights from './pages/Analytics/DealInsights';
import ActivityStats from './pages/Analytics/ActivityStats';
import TeamChat from "./pages/TeamChat"; 
import EmailIntegration from './pages/Integration/EmailIntegration';
import AccessControl from './pages/AccessControl';
import Notifications from './pages/Notifications';

// Placeholder components for other pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="p-6">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600">This page is under development. Check back soon!</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leads" element={<Leads />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="deals" element={<Deals />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="meetings" element={<PlaceholderPage title="Meetings" />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/dealers" element={<Dealers />} />

          <Route path="/notifications" element={<Notifications />} />

          {/* Reports */}
          <Route path="reports/*" element={<PlaceholderPage title="Reports" />} />

          {/* Analytics */}
          <Route path="analytics/overview" element={<Overview />} />
          <Route path="analytics/*" element={<PlaceholderPage title="Analytics" />} />

          {/* Settings */}
          <Route path="settings/general/personal" element={<Personal />} />
          <Route path="settings/*" element={<PlaceholderPage title="Settings" />} />
          
          <Route path="/settings/security/access-control" element={<AccessControl />} />


          {/* Utilities */}
          <Route path="requests" element={<PlaceholderPage title="My Requests" />} />
          <Route path="marketplace" element={<PlaceholderPage title="Marketplace" />} />
          <Route path="integrations" element={<PlaceholderPage title="Integrations" />} />
          <Route path="/integrations/email" element={<EmailIntegration />} />

          {/* Team Chat */}
          <Route path="team-chat" element={<TeamChat />} />




          {/* Profile */}
          <Route path="profile" element={<Profile />} />

          <Route path="/reports/all" element={<AllReports />} />
          <Route path="/reports/favourites" element={<Favourites />} />
          <Route path="/reports/scheduled" element={<ScheduledReports />} />

          <Route path="/analytics/leads" element={<LeadAnalytics />} />
          <Route path="/analytics/deals" element={<DealInsights />} />
          <Route path="/analytics/activity" element={<ActivityStats />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;