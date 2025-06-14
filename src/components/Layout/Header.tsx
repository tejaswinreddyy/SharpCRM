import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { mockUser, mockNotifications } from '../../data/mockData';
import NotificationsPanel from '../Common/NotificationsPanel';
import AddNewModal from '../Common/AddNewModal';
import CalendarModal from '../Common/CalendarModal';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAddNew, setShowAddNew] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const notificationRef = useRef<HTMLDivElement | null>(null);

  // Click-away logic for notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-end">
          {/* Actions */}
          <div className="flex items-center space-x-4 ml-6">
            {/* Add New Button */}
            <button
              onClick={() => setShowAddNew(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Icons.Plus className="w-4 h-4 mr-2" />
              Add New
            </button>

            {/* Calendar */}
            <button
              onClick={() => setShowCalendar(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icons.Calendar className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                <Icons.Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {showNotifications && (
                <NotificationsPanel
                  notifications={mockNotifications}
                  onClose={() => setShowNotifications(false)}
                />
              )}
            </div>

            {/* Profile */}
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2 transition-colors"
            >
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">
                  {mockUser.name}
                </div>
                <div className="text-xs text-gray-500">{mockUser.role}</div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Modals */}
      <AddNewModal isOpen={showAddNew} onClose={() => setShowAddNew(false)} />
      <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  );
};

export default Header;
