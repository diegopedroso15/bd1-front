'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Box from '@mui/material/Box';

const data = [
  { films: 'Filme 1', awards: 15 },
  { films: 'Filme 2', awards: 8 },
  { films: 'Filme 3', awards: 8 },
  { films: 'Filme 4', awards: 8 },
  { films: 'Filme 5', awards: 8 },
  { films: 'Filme 6', awards: 8 },
  { films: 'Filme 7', awards: 8 },
  { films: 'Filme 8', awards: 8 },
  { films: 'Filme 9', awards: 8 },
  { films: 'Filme 10', awards: 8 },
];

const Histogram = () => {

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#adf2f9',
        gap: 5,
        margin: -1,
      }}
    >
      <h1>10 Filmes mais premiados</h1>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="films" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="awards" fill="#191970" />
      </BarChart>
    </Box>
  );
};

export default Histogram;
