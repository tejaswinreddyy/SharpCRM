import React from 'react';
import * as Icons from 'lucide-react';
import PageHeader from '../components/Common/PageHeader';
import { mockUser } from '../data/mockData';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const profileStats = [
    { label: 'Deals Closed', value: '23', icon: 'Target' },
    { label: 'Revenue Generated', value: '$1.2M', icon: 'DollarSign' },
    { label: 'Leads Converted', value: '145', icon: 'UserPlus' },
    { label: 'Meetings Held', value: '89', icon: 'Calendar' }
  ];

  const recentActivity = [
    { action: 'Closed deal with Global Industries', time: '2 hours ago', type: 'success' },
    { action: 'Created new lead from website inquiry', time: '4 hours ago', type: 'info' },
    { action: 'Updated account information for TechCorp', time: '6 hours ago', type: 'info' },
    { action: 'Scheduled meeting with potential client', time: '1 day ago', type: 'info' }
  ];

  return (
    <div className="p-6">
      <PageHeader
        title="Profile"
        subtitle="Your personal dashboard and settings"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Profile' }
        ]}
      />

      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-6">
            <div className="flex items-center space-x-6">
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{mockUser.name}</h2>
                <p className="text-gray-600">{mockUser.role}</p>
                <p className="text-gray-500">{mockUser.email}</p>
                <p className="text-gray-500">{mockUser.department}</p>
              </div>
              <div className="flex space-x-3">
                <Link
                  to="/settings/general/personal"
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Icons.Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {profileStats.map((stat, index) => {
                    const Icon = Icons[stat.icon as keyof typeof Icons] as any;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side is now empty or can be removed completely */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
