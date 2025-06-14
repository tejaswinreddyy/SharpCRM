import React from "react";

const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center min-w-[200px]">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Section 1: Header + Stat Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Tejaswin Reddy Y</h2>
        <div className="flex flex-wrap gap-4">
          <StatCard label="My Open Deals" value="8" />
          <StatCard label="My Untouched Deals" value="2" />
          <StatCard label="My Calls Today" value="1" />
          <StatCard label="My Leads" value="11" />
        </div>
      </div>

      {/* Section 2 & 3: My Open Tasks + My Meetings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Open Tasks Table */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">My Open Tasks</h3>
          <table className="min-w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-2 pr-4">Subject</th>
                <th className="pb-2 pr-4">Due Date</th>
                <th className="pb-2 pr-4">Status</th>
                <th className="pb-2">Priority</th>
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
                <tr key={index} className="border-t">
                  <td className="py-2 pr-4">{task.subject}</td>
                  <td className="py-2 pr-4">{task.due}</td>
                  <td className="py-2 pr-4">{task.status}</td>
                  <td className="py-2">{task.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Meetings Table */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">My Meetings</h3>
          <table className="min-w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-2 pr-4">Subject</th>
                <th className="pb-2 pr-4">Start</th>
                <th className="pb-2 pr-4">End</th>
                <th className="pb-2">With</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subject: "Seminar",
                  start: "13/06/2025 02:48 PM",
                  end: "13/06/2025 04:48 PM",
                  contact: "Carissa Kidman",
                },
                {
                  subject: "Attend Customer Conference",
                  start: "13/06/2025",
                  end: "13/06/2025",
                  contact: "Feltz Printing",
                },
                {
                  subject: "CRM Webinar",
                  start: "13/06/2025 01:48 PM",
                  end: "13/06/2025 03:48 PM",
                  contact: "Morlong Associates",
                },
              ].map((meeting, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 pr-4">{meeting.subject}</td>
                  <td className="py-2 pr-4">{meeting.start}</td>
                  <td className="py-2 pr-4">{meeting.end}</td>
                  <td className="py-2">{meeting.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 4: Today’s Leads + Deals Closing This Month */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Leads */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Today's Leads</h3>
          <table className="min-w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-2 pr-4">Name</th>
                <th className="pb-2 pr-4">Email</th>
                <th className="pb-2 pr-4">Phone</th>
                <th className="pb-2">Company</th>
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
                <tr key={index} className="border-t">
                  <td className="py-2 pr-4">{lead.name}</td>
                  <td className="py-2 pr-4">{lead.email}</td>
                  <td className="py-2 pr-4">{lead.phone}</td>
                  <td className="py-2">{lead.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deals Closing This Month */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Deals Closing This Month</h3>
          <table className="min-w-full text-sm table-auto">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-2 pr-4">Deal Name</th>
                <th className="pb-2 pr-4">Account</th>
                <th className="pb-2 pr-4">Stage</th>
                <th className="pb-2">Expected Close Date</th>
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
                <tr key={index} className="border-t">
                  <td className="py-2 pr-4">{deal.name}</td>
                  <td className="py-2 pr-4">{deal.account}</td>
                  <td className="py-2 pr-4">{deal.stage}</td>
                  <td className="py-2">{deal.closeDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
