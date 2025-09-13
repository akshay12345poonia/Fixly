
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ReviewsList({ providerId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get(`/reviews/provider/${providerId}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, [providerId]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Reviews</h3>
      {reviews.map(review => (
        <div key={review._id} className="border p-2 mb-2 rounded">
          <p className="font-semibold">{review.user.name}</p>
          <p>{'⭐'.repeat(review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      {reviews.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
    </div>
  );
}
