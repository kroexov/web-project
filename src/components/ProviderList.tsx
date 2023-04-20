import { Box, Button, Link, Typography } from '@mui/material';
import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ProviderItem from './ProviderItem';
import { IProvider } from '../models/provider';

interface ProviderListProps {
  providers: IProvider[];
}

export default function ProviderList({ providers }: ProviderListProps) {
  return (
    <Box component="div" sx={{ mt: 3, width: '70%' }}>
      {providers.length === 0 ? (
        <Typography variant="body1" sx={{ ml: 2 }}>
          Предложений нет
        </Typography>
      ) : (
        providers.map((provider) => (
          <ProviderItem provider={provider} key={provider.Id} />
        ))
      )}
    </Box>
  );
}
