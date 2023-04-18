import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import './ProviderForm.css';
import Typography from '@mui/material/Typography';
import ProviderList from '../components/ProviderList';
import { IOrder } from '../models/order';

interface CreateProviderFormProps {
  setCurrentOpen: (arg0: number) => void;
}

export default function ProviderForm({
  setCurrentOpen,
}: CreateProviderFormProps) {
  const providers = [
    {
      Id: 'Some company name',
      Icon: 'Icon',
      Name: 'CompanyName',
      Description:
        'some information | some information | some information some information | some information | some information some information |',
      Link: 'link ; link',
      Address: 'Address address',
      Phone: '+18231238138',
    },
    {
      Id: 'Some company name',
      Icon: 'Icon',
      Name: 'CompanyName',
      Description:
        'some information | some information | some information some information | some information | some information some information | some information | some information',
      Link: 'link ; link',
      Address: 'Address address',
      Phone: '+18231238138',
    },
    {
      Id: 'Some company name',
      Icon: 'Icon',
      Name: 'CompanyName',
      Description:
        'some information | some information | some information some information | some information | some information some information | some information | some information',
      Link: 'link ; link',
      Address: 'Address address',
      Phone: '+18231238138',
    },
  ];

  return (
    <Box>
      <Typography className="text-field title">
        Подходящие изготовители
      </Typography>

      <ProviderList providers={providers} />

      <div className="contacts continue-button">
        <Button
          id="continue-button"
          variant="contained"
          type="submit"
          color="primary"
          disableElevation={true}
          sx={{
            mt: 5,
            ml: 4,
            width: '50  %',
            bgcolor: '#5252F2',
            color: 'white',
            borderRadius: '3px',
          }}
          onClick={() => {
            setCurrentOpen(2);
          }}
        >
          Запросить коммерческое предложение
        </Button>
      </div>
      <div className="reset-button">
        <Button
          id="to-left-button"
          variant="contained"
          type="reset"
          color="primary"
          size="medium"
          disableElevation={true}
          sx={{
            mt: 5,
            ml: 4,
            width: '50  %',
            bgcolor: '#5252F2',
            color: 'white',
            borderRadius: '3px',
          }}
          onClick={() => {
            setCurrentOpen(0);
          }}
        >
          {'<'}
        </Button>
      </div>
    </Box>
  );
}
