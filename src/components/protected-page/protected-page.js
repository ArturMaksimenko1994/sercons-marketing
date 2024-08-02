import React, { useEffect, useState } from 'react';

const PageSignature = ({ token }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://www.signature.custom-wp.ru/wp-json/your-protected-endpoint', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error('Failed to fetch protected data');
      }
    };

    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Protected Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PageSignature;
