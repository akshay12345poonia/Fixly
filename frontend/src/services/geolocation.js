// frontend/src/services/geolocation.js
export async function fetchCoordinates(address) {

  const response = await fetch(`https://api.bigdatacloud.net/...&query=${encodeURIComponent(address)}`);
  const data = await response.json();
  return { lat: data.latitude, lng: data.longitude };
}
