"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DefaultPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Your effect logic here
  }, []);

  const handleButtonClick = (path: any) => {
    router.push(path);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#191970',
        gap: 5,
        margin: -1,
      }}
    >
      <Button variant="contained" onClick={() => handleButtonClick('/pages/path1')}>Dez atores com maior número de premios</Button>
      <Button variant="contained" onClick={() => handleButtonClick('/pages/path2')}>10 filmes mais premiados</Button>
      <Button variant="contained" onClick={() => handleButtonClick('/pages/path3')}>10 filmes com maior arrecadação</Button>
      <Button variant="contained" onClick={() => handleButtonClick('/pages/path4')}>Lista dos melhores atores em premios existentes</Button>
      <Button variant="contained" onClick={() => handleButtonClick('/pages/path5')}>Autores e filmes dos premios</Button>
    </Box>
  );
};

export default DefaultPage;
