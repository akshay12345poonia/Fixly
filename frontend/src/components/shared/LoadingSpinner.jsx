// frontend/src/components/shared/LoadingSpinner.jsx
import React from 'react';
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="loader mr-2"></div><span>Loading...</span>
    </div>
  );
}
