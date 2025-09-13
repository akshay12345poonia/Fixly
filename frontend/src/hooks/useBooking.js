
import axios from 'axios';
import { useAuth } from './useAuth';

export default function useBooking() {
  const { user } = useAuth();
  const bookService = (providerId, timeSlot) => {
    return axios.post('/api/bookings', {
      providerId,
      userId: user._id,
      timeSlot
    });
  };
  return { bookService };
}
