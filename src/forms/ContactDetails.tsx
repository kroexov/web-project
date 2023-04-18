import React, { useContext } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
//import './ContactDetails.css';
import { Telegram } from '@mui/icons-material';
//import { ModalContext } from '../../context/modalContext';
//import Modal from '../Modal';
import CreateDetailForm from './CreateDetailForm';
import { IDetail } from '../models/detail';
//import Selection from '../homepage/selection';
import { createContext } from 'react';

export interface ContactDetailFormProps {
  setCurrentOpen: (arg0: number) => void;
}
export const ContactDetailFormContext = createContext<
  ContactDetailFormProps | undefined
>;

function ContactDetails({ setCurrentOpen }: ContactDetailFormProps) {
  const createDetailHandler = (detail: IDetail) => {
    console.log(detail);
  };
  //const { open, close } = useContext(ModalContext);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className="ContactDetailsForm">
      <form className="modal__content">
        <Typography
          variant="h3"
          className="modal__title"
          sx={{ fontSize: '30px' }}
        >
          Укажите свои контактные данные
        </Typography>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: '60px' }}
        >
          <Grid item>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                width: '20vw',
                borderRadius: '10px',
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="номер телефона"
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                width: '20vw',
                borderRadius: '10px',
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              className="checkbox__label"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Или используйте telegram <Telegram />
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography className="checkbox__label">
                <Link
                  href="#"
                  underline="always"
                  sx={{ color: '#000000', textDecorationColor: '#000000' }}
                >
                  принять лицензионное соглашение
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item className="button__container">
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '70px' }}
          >
            <Button
              color="primary"
              className="button__back"
              size="small"
              variant="contained"
              sx={{
                marginRight: '10px',
                borderRadius: '3px',
                backgroundColor: '#5252F2',
              }}
              onClick={() => {
                setCurrentOpen(2);
              }}
            >
              {'<'}
            </Button>

            <Button
              className="button__next"
              size="large"
              variant="contained"
              sx={{ borderRadius: '3px', backgroundColor: '#5252F2' }}
            >
              Далее
            </Button>
          </Box>
        </Grid>
      </form>
    </Box>
  );
}

export default ContactDetails;
