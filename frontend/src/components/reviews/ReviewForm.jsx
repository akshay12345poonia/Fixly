
import React, { useState } from 'react';
import api from '../../services/api';

export default function ReviewForm({ providerId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleReview = () => {
    api.post('/reviews', { providerId, rating, comment })
      .then(res => {
        setMessage('Review submitted!');
        setRating(5);
        setComment('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
      <textarea placeholder="Your review" value={comment} onChange={e => setComment(e.target.value)}
                className="w-full border border-gray-300 p-2 mb-2" rows={3} />
      <div className="flex items-center">
        <label className="mr-2">Rating:</label>
        <select value={rating} onChange={e => setRating(e.target.value)}
                className="border border-gray-300 p-2 mr-4">
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n}>{n}⭐</option>
          ))}
        </select>
        <button onClick={handleReview} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
