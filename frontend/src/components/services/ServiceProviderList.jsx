
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function ServiceProviderList() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { serviceType } = useParams();

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const response = await api.get('/providers');
        let filteredProviders = response.data;
        
        // Filter by service type if specified
        if (serviceType) {
          filteredProviders = response.data.filter(provider => 
            provider.serviceType.toLowerCase() === serviceType.toLowerCase()
          );
        }
        
        setProviders(filteredProviders);
        setError(null);
      } catch (err) {
        console.error('Error fetching providers:', err);
        setError('Failed to load service providers. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [serviceType]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const pageTitle = serviceType 
    ? `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services`
    : 'All Service Providers';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
        <p className="text-gray-600">
          {providers.length} {providers.length === 1 ? 'provider' : 'providers'} found
        </p>
      </div>

      {providers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">
            No service providers found{serviceType ? ` for ${serviceType}` : ''}.
          </p>
          <Link 
            to="/" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map(provider => (
            <div key={provider._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{provider.name}</h2>
                <p className="text-blue-600 font-medium mb-2">{provider.serviceType}</p>
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
