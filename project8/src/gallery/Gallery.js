import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
};

export default Gallery;
