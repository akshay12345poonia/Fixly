// frontend/src/components/services/ServiceDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../shared/LoadingSpinner';
import BookingForm from './BookingForm';
import ReviewsList from '../reviews/ReviewsList';

export default function ServiceDetails() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    api.get(`/providers/${id}`)
      .then(res => setProvider(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!provider) return <LoadingSpinner />;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{provider.name}</h1>
      <p className="mb-4 text-gray-700">Category: {provider.serviceType}</p>
      <p className="mb-4">{provider.description}</p>
      <BookingForm providerId={id} />
      <ReviewsList providerId={id} />
    </div>
  );
}
