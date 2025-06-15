import React from "react";
import * as Icons from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ label, value, icon: Icon }: { label: string; value: string | number; icon: React.ElementType }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center space-x-4 hover:shadow-md transition-shadow min-w-[200px]">
    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const statusStyles: { [key: string]: string } = {
    Negotiation: "bg-yellow-100 text-yellow-800",
    Proposal: "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || "bg-gray-100 text-gray-800"}`}>
      {status}
    </span>
  );
};

const Home: React.FC = () => {
  const today = new Date("2025-06-15"); // Current date: June 15, 2025
  const navigate = useNavigate();

  // Helper to check if a date is overdue
  const isOverdue = (dateString: string) => {
    const dueDate = new Date(dateString);
    return dueDate < today;
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Section 1: Header + Stat Cards */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome, John Paul</h2>
            <p className="text-sm text-gray-500 mt-1">
              Today is {today.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <StatCard label="My Open Deals" value="8" icon={Icons.Target} />
          <StatCard label="My Untouched Deals" value="2" icon={Icons.AlertCircle} />
          <StatCard label="My Calls Today" value="1" icon={Icons.Phone} />
          <StatCard label="My Leads" value="11" icon={Icons.Users} />
        </div>
      </div>

      {/* Section 2 & 3: My Open Tasks + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* My Open Tasks Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">My Open Tasks</h3>
            <button
              onClick={() => navigate('/tasks')}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm table-auto">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.CheckSquare className="w-4 h-4 mr-2" /> Subject</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Calendar className="w-4 h-4 mr-2" /> Due Date</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Info className="w-4 h-4 mr-2" /> Status</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Flag className="w-4 h-4 mr-2" /> Priority</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    subject: "Register for upcoming CRM Webinars",
                    due: "13/06/2025",
                    status: "Not Started",
                    priority: "Low",
                  },
                  {
                    subject: "Refer CRM Videos",
                    due: "15/06/2025",
                    status: "In Progress",
                    priority: "Normal",
                  },
                  {
                    subject: "Competitor Comparison",
                    due: "11/06/2025",
                    status: "Not Started",
                    priority: "Highest",
                  },
                ].map((task, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    onClick={() => navigate('/tasks')}
                  >
                    <td className="py-3 px-4">{task.subject}</td>
                    <td className={`py-3 px-4 ${isOverdue(task.due) ? "text-red-600 font-medium" : ""}`}>
                      {task.due}
                    </td>
                    <td className="py-3 px-4">{task.status}</td>
                    <td className={`py-3 px-4 ${task.priority === "Highest" ? "text-red-600 font-medium" : ""}`}>
                      {task.priority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            <button
              onClick={() => navigate('/notifications')}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm table-auto">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Bell className="w-4 h-4 mr-2" /> Message</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Clock className="w-4 h-4 mr-2" /> Timestamp</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Info className="w-4 h-4 mr-2" /> Type</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    message: "New lead assigned: Jason Roy",
                    timestamp: "15/06/2025 09:30 AM",
                    type: "Lead",
                  },
                  {
                    message: "Deal stage updated: Website Revamp to Negotiation",
                    timestamp: "15/06/2025 08:45 AM",
                    type: "Deal",
                  },
                  {
                    message: "Task overdue: Competitor Comparison",
                    timestamp: "15/06/2025 07:00 AM",
                    type: "Task",
                  },
                ].map((notification, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    onClick={() => navigate('/notifications')}
                  >
                    <td className="py-3 px-4">{notification.message}</td>
                    <td className="py-3 px-4">{notification.timestamp}</td>
                    <td className="py-3 px-4">{notification.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Today’s Leads + Deals Closing This Month */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Leads */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Today's Leads</h3>
            <button
              onClick={() => navigate('/leads')}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm table-auto">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.User className="w-4 h-4 mr-2" /> Name</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Mail className="w-4 h-4 mr-2" /> Email</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Phone className="w-4 h-4 mr-2" /> Phone</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Building2 className="w-4 h-4 mr-2" /> Company</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Jason Roy",
                    email: "jason.roy@alpha.com",
                    phone: "+91 99999 88888",
                    company: "Alpha Tech",
                  },
                  {
                    name: "Priya Singh",
                    email: "priya.singh@neutron.com",
                    phone: "+91 98765 43210",
                    company: "Neutron Corp",
                  },
                ].map((lead, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    onClick={() => navigate('/leads')}
                  >
                    <td className="py-3 px-4">{lead.name}</td>
                    <td className="py-3 px-4">{lead.email}</td>
                    <td className="py-3 px-4">{lead.phone}</td>
                    <td className="py-3 px-4">{lead.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deals Closing This Month */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Deals Closing This Month</h3>
            <button
              onClick={() => navigate('/deals')}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm table-auto">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Target className="w-4 h-4 mr-2" /> Deal Name</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Building className="w-4 h-4 mr-2" /> Account</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Info className="w-4 h-4 mr-2" /> Stage</span></th>
                  <th className="pb-3 px-4"><span className="flex items-center"><Icons.Calendar className="w-4 h-4 mr-2" /> Expected Close Date</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Website Revamp",
                    account: "Neo Systems",
                    stage: "Negotiation",
                    closeDate: "25/06/2025",
                  },
                  {
                    name: "CRM Onboarding",
                    account: "Triton Tech",
                    stage: "Proposal",
                    closeDate: "29/06/2025",
                  },
                ].map((deal, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    onClick={() => navigate('/deals')}
                  >
                    <td className="py-3 px-4">{deal.name}</td>
                    <td className="py-3 px-4">{deal.account}</td>
                    <td className="py-3 px-4"><StatusBadge status={deal.stage} /></td>
                    <td className="py-3 px-4">{deal.closeDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;