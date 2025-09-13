import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const service = searchParams.get('service') || '';
  const location = searchParams.get('location') || '';

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await api.get('/providers');
        let filteredProviders = response.data;

        // Filter by service type if specified
        if (service) {
          filteredProviders = filteredProviders.filter(provider =>
            provider.serviceType.toLowerCase().includes(service.toLowerCase()) ||
            provider.name.toLowerCase().includes(service.toLowerCase()) ||
            provider.description.toLowerCase().includes(service.toLowerCase())
          );
        }

        // Filter by location if specified (simple text match for now)
        if (location) {
          filteredProviders = filteredProviders.filter(provider =>
            provider.location && provider.location.toString().toLowerCase().includes(location.toLowerCase())
          );
        }

        setProviders(filteredProviders);
        setError(null);
      } catch (err) {
        console.error('Error fetching search results:', err);
        setError('Failed to load search results. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [service, location]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link 
            to="/" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const searchQuery = [service, location].filter(Boolean).join(' in ');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Search Results
        </h1>
        {searchQuery && (
          <p className="text-gray-600 mb-2">
            Showing results for: <span className="font-medium">"{searchQuery}"</span>
          </p>
        )}
        <p className="text-gray-600">
          {providers.length} {providers.length === 1 ? 'provider' : 'providers'} found
        </p>
      </div>

      {/* Search Again */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Refine Your Search</h2>
        <form className="grid md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="What do you need?"
              defaultValue={service}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              defaultValue={location}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Search Again
            </button>
          </div>
        </form>
      </div>

      {providers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Results Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any service providers matching your search criteria.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">Try:</p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
              <li>• Using different keywords</li>
              <li>• Checking your spelling</li>
              <li>• Searching in a broader area</li>
              <li>• Browsing our popular services</li>
            </ul>
          </div>
          <div className="mt-8 space-x-4">
            <Link 
              to="/" 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              to="/services" 
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map(provider => (
            <div key={provider._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{provider.name}</h2>
                <p className="text-blue-600 font-medium mb-2 capitalize">{provider.serviceType}</p>
                {provider.description && (
                  <p className="text-gray-600 text-sm">{provider.description}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-400">
                  <span>⭐</span>
                  <span className="ml-1 text-gray-600">4.8 (24 reviews)</span>
                </div>
                <Link 
                  to={`/services/${provider._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
