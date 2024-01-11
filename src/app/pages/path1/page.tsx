'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Box from '@mui/material/Box';

const data = [
  { name: 'Actor 1', awards: 5 },
  { name: 'Actor 2', awards: 8 },
  // ...more actors
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
      <h1>Atores com maior quantidade de premios</h1>
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="awards" fill="#191970" />
      </BarChart>
    </Box>
  );
};

export default Histogram;
