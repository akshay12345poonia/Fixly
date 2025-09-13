
import { useState, useEffect } from 'react';

export default function useGeolocation() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);
  return location;
}
