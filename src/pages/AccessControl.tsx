import React from 'react';
import PageHeader from '../components/Common/PageHeader';
import { roles, mockUsers } from '../data/mockPermissions';

const AccessControl: React.FC = () => {
  return (
    <div className="p-6">
      <PageHeader
        title="Access Control"
        subtitle="Manage user roles and permissions"
        breadcrumbs={[{ name: 'Settings', path: '/settings' }, { name: 'Access Control' }]}
      />

      <div className="mt-6 space-y-6">
        {roles.map(role => {
          const usersInRole = mockUsers.filter(user => user.role === role.name);

          return (
            <div key={role.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.name}</h3>

              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Role Permissions:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map(p => (
                    <span
                      key={p}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full border text-gray-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mt-4 mb-1">Users:</h4>
                {usersInRole.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">No users assigned to this role</p>
                ) : (
                  <ul className="space-y-2">
                    {usersInRole.map(user => (
                      <li
                        key={user.id}
                        className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <div className="text-sm font-semibold text-gray-800">
                          {user.name}{' '}
                          <span className="text-xs text-gray-500">({user.email})</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {role.permissions.map(p => (
                            <span
                              key={p}
                              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccessControl;
