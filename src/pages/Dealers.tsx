import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import PageHeader from '../components/Common/PageHeader';
import { mockDealers, mockUser } from '../data/mockData';
import AddNewModal from '../components/Common/AddNewModal';

const Dealers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultType, setDefaultType] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // State for filter visibility
  const [filters, setFilters] = useState({
    name: false,
    contact: false,
    address: false,
    subsidiary: false,
  });

  // State for filter values
  const [filterValues, setFilterValues] = useState({
    name: '',
    contact: '',
    address: '',
    subsidiary: '',
  });

  const handleCheckboxChange = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFilterChange = (key: keyof typeof filterValues, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setIsFilterOpen(false); // Close the sidebar after applying filters
  };

  const clearFilters = () => {
    setFilterValues({
      name: '',
      contact: '',
      address: '',
      subsidiary: '',
    });
    setFilters({
      name: false,
      contact: false,
      address: false,
      subsidiary: false,
    });
    setIsFilterOpen(false);
  };

  const handleEdit = (id: string) => {
    console.log('Edit dealer', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete dealer', id);
  };

  const canEditOrDelete = mockUser.role === 'Admin' || mockUser.role === 'Manager';
  const canCreate = mockUser.role === 'Admin' || mockUser.role === 'Manager';

  // Filter the dealers based on the filter values
  const filteredDealers = mockDealers.filter(dealer => {
    let matches = true;

    if (filterValues.name && !dealer.name.toLowerCase().includes(filterValues.name.toLowerCase())) {
      matches = false;
    }
    if (filterValues.contact && !dealer.contact.toLowerCase().includes(filterValues.contact.toLowerCase())) {
      matches = false;
    }
    if (filterValues.address && !dealer.address.toLowerCase().includes(filterValues.address.toLowerCase())) {
      matches = false;
    }
    if (filterValues.subsidiary && !dealer.subsidiary.toLowerCase().includes(filterValues.subsidiary.toLowerCase())) {
      matches = false;
    }

    return matches;
  });

  const headerActions = (
    <>
      
      {canCreate && (
        <button
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            setDefaultType('dealer');
            setIsModalOpen(true);
          }}
        >
          <Icons.Plus className="w-4 h-4 mr-2" />
          New Dealer
        </button>
      )}
    </>
  );

  return (
    <div className="p-6 lg:p-8 overflow-x-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div
          className={`w-full lg:w-72 bg-white p-6 border border-gray-200 rounded-xl shadow-sm h-fit transition-all duration-300 ${
            isFilterOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <p className="font-medium text-gray-700 mb-4">Filter Dealers by</p>
          <div className="text-sm text-gray-600 space-y-5">
            {/* Name Filter */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={filters.name}
                  onChange={() => handleCheckboxChange('name')}
                />
                Name
              </label>
              {filters.name && (
                <div className="mt-3 pl-4">
                  <input
                    type="text"
                    placeholder="Dealer name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={filterValues.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Contact Filter */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={filters.contact}
                  onChange={() => handleCheckboxChange('contact')}
                />
                Contact
              </label>
              {filters.contact && (
                <div className="mt-3 pl-4">
                  <input
                    type="text"
                    placeholder="Contact number"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={filterValues.contact}
                    onChange={(e) => handleFilterChange('contact', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Address Filter */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={filters.address}
                  onChange={() => handleCheckboxChange('address')}
                />
                Address
              </label>
              {filters.address && (
                <div className="mt-3 pl-4">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={filterValues.address}
                    onChange={(e) => handleFilterChange('address', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Subsidiary Filter */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={filters.subsidiary}
                  onChange={() => handleCheckboxChange('subsidiary')}
                />
                Subsidiary
              </label>
              {filters.subsidiary && (
                <div className="mt-3 pl-4">
                  <input
                    type="text"
                    placeholder="Subsidiary name"
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                    value={filterValues.subsidiary}
                    onChange={(e) => handleFilterChange('subsidiary', e.target.value)}
                  />
                </div>
              )}
            </div>

            <button
              className="w-full mt-6 py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={applyFilters}
            >
              Apply Filter
            </button>
            <button
              className="w-full mt-3 py-2 px-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <PageHeader
            title="Dealers"
            subtitle="List of dealers and their associated subsidiaries"
            breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Dealers' }]}
            actions={headerActions}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredDealers.length > 0 ? (
              filteredDealers.map((dealer) => (
                <div
                  key={dealer.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative"
                >
                  {canEditOrDelete && (
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(dealer.id)}
                        className="text-gray-500 hover:text-blue-600"
                        title="Edit"
                      >
                        <Icons.Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(dealer.id)}
                        className="text-gray-500 hover:text-red-600"
                        title="Delete"
                      >
                        <Icons.Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icons.UserCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900">{dealer.name}</p>
                      <p className="text-sm text-gray-500">{dealer.contact}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Address:</strong> {dealer.address}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Subsidiary:</strong> {dealer.subsidiary}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No dealers match the applied filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AddNewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType={defaultType}
      />
    </div>
  );
};

export default Dealers;