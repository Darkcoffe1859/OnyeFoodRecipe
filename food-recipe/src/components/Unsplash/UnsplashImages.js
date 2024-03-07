// UnsplashImages.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashImages = ({ query }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: query || 'food', // Default to 'food' if no query is provided
            page: 1,
            per_page: 10,
            order_by: 'relevant',
            client_id: 's_iytN9f90nAkyqbRIL8Pax7B3yaHPAjj9nQg9QuVNw',
          },
        });

        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, [query]); // Include query in the dependency array to trigger a re-fetch when the query changes

  return (
    <div>
      <h2>Images from Unsplash</h2>
      {images.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {images.map(image => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UnsplashImages;

