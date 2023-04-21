import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import CreateDetailForm from "../src/components/forms/CreateDetailForm"
import ContactDetails  from "../src/components/forms/ContactDetails"
import CreateOrderForm from "../src/components/forms/CreateOrderForm"
import ProviderForm from "../src/components/forms/ProviderForm"

const App = () => {
  return (
    <Box component='div'>
      <Routes>
        <Route path='/detail' element={<CreateDetailForm onCreate={detail => null}/>}/>
        <Route path='/contact' element={<ContactDetails/>}/>
        <Route path='/order' element={<CreateOrderForm onCreate={order => null}/>}/>
        <Route path='/provider' element={<ProviderForm/>}/>
      </Routes>
    </Box>
  );
}

export default App;
