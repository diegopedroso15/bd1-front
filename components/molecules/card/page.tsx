'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ICardV1Props {
  route: string;
  description: string;
  title: string;
}

export const CardV1 = ({ route, description, title }: ICardV1Props) => {
  const router = useRouter();

  return (
    <div>
      <Card sx={{ height: 200, width: 200, backgroundColor: '#3f51b5' }}>
        <CardActionArea
          sx={{ height: '100%', width: '100%' }}
          onClick={() => {
            router.push(route);
          }}
        >
          <CardContent sx={{ color: '#fff' }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
