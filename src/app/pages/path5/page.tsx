'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Histogram = () => {
  const columns = [
    { field: 'Actors', headerName: 'Atores', width: 400 },
  ];

  const rows = [
    { id: 1, Actors: 'Ator 1' },
    { id: 2, Actors: 'Ator 2' },
    { id: 3, Actors: 'Ator 3' },
    { id: 4, Actors: 'Ator 4' },
    { id: 5, Actors: 'Ator 5' },
    { id: 6, Actors: 'Ator 6' },
    { id: 7, Actors: 'Ator 7' },
    { id: 8, Actors: 'Ator 8' },
    { id: 9, Actors: 'Ator 9' },
    { id: 10, Actors: 'Ator 10' },
  ];

  
  
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
      <h1>Lista de atores nominados como melhor ator em todos os eventos</h1>
      <DataGrid
          sx={{
            backgroundColor: "#eaebfe",
            borderRadius: '10px',
            fontSize: '11px',
            color: "#000000",
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid`
            },
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[6]}
          filterDebounceMs={500}
          rowHeight={55}
        />
    </Box>
  );
};

export default Histogram;
