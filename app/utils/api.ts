import { API_KEY } from '.';

export const fetchApi = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
