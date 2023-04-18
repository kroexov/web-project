import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { IProvider } from '../models/provider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import React from 'react';

interface ProviderProps {
  provider: IProvider;
}

export default function ProviderItem(props: ProviderProps) {
  return (
    <Box>
      <div>
        <image
          className="icon-field"
          imageRendering={props.provider.Icon}
          color="primary"
        />

        <Typography
          className="text-field company-name"
          children={props.provider.Name}
        />
      </div>
      <div className="company-about">
        <Typography
          className="text-field company-description"
          children={props.provider.Description}
        />

        <div className="additional-info-container">
          <div className="contacts">
            <div className="contacts address-field">
              <LocationOnIcon />
              <Typography
                className="company-address"
                children={props.provider.Address}
                display={'flex'}
              />
            </div>
            <div className="contacts phone-field">
              <ContactPhoneIcon />
              <Typography
                className="company-phone"
                children={props.provider.Phone}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
