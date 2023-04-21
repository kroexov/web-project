import {Box, Button} from '@mui/material';
import React, {useState} from 'react';
import './ProviderForm.css';
import Typography from "@mui/material/Typography";
import ProviderList from '../ProviderList';

export default function ProviderForm() {
   
    const providers  = [
        {
        Id : "РадиоКом",
        Icon : "Icon",
        Name : "РадиоКом",
        Description: "Производство мачтовых конструкция для антенн и оборудования.",
        Link : "www.r-com.ru",
        Address : "Москва",
        Phone : "+74955423913 | info@r-com.ru"
    },
    {
        Id : "Дон",
        Icon : "Icon",
        Name : "Дон",
        Description: "Компания ООО \"ДОН\" в Ростове на Дону является промышленно-коммерческим предприятием по производству шлангов высокого давления, обжимной арматуры для РВД.",
        Link : "www.rtmdon.ru",
        Address : "г. Ростов-на-Дону",
        Phone : "+7 928-296-35-35; +7 938-116-16-44 | rtmdon16@mail.ru"
    },
    {
        Id : "Гофроупак",
        Icon : "Icon",
        Name : "Гофроупак",
        Description: "«ГОФРОУПАК» осуществляет производство: трехслойный, пятислойный гофрокартон различных марок, сложная высечка, так же изготавливаем любые виды упаковки из гофрокартона.",
        Link : "картон52.рф/",
        Address : "Нижегородская область, г. Павлово",
        Phone : "+79103997208 | gofroupack@inbox.ru"
    }];

    return (
        <Box className="provider-form form">
                <Typography variant='h3' sx = {{fontSize: '30px', color: 'black', textAlign: 'center'}}>
                    Подходящие изготовители
                </Typography>

                <ProviderList providers={providers}/>

                <div className="contacts continue-button">
                    <Button
                        id="continue-button"
                        variant="contained"
                        type='submit'
                        color="primary"
                        disableElevation={true}
                        sx={{
                            mt: 5,
                            ml: 4,
                            width: '50  %',
                            bgcolor: '#5252F2',
                            color: 'white',
                            borderRadius: '3px'
                        }}
                        onClick={() => {
                            alert("provider")
                        }
                        }
                    >

                        Запросить коммерческое предложение
                    </Button>
                </div>
                <div className="reset-button">
                    <Button
                        id="to-left-button"
                        variant="contained"
                        type='reset'
                        color="primary"
                        size="medium"
                        disableElevation={true}
                        sx={{
                            mt: 5,
                            ml: 4,
                            width: '50  %',
                            bgcolor: '#5252F2',
                            color: 'white',
                            borderRadius: '3px'
                        }}
                        onClick={() => {
                            alert("provider")
                        }
                        }
                    >
                        {'<'}
                    </Button>
                </div>
        </Box>
    )
};