import {
  Box,
  TextField,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material/Select';
import './CreateOrderForm.css';
import Typography from '@mui/material/Typography';
import { IOrder } from '../models/order';
//import { ModalContext } from '../../context/modalContext';

// потом подключим UserId
export interface CreateOrderFormProps {
  order?: IOrder;
  providerId?: string;
  onCreate: (order: IOrder) => void;
  setCurrentOpen: (arg0: number) => void;
}

export default function CreateOrderForm({
  onCreate,
  setCurrentOpen,
}: CreateOrderFormProps) {
  //const { open, close } = useContext(ModalContext);

  const { handleSubmit, control } = useForm<CreateOrderFormProps>({
    mode: 'onChange',
    //resolver: yupResolver(projectValidationSchema),
  });

  const { errors } = useFormState({
    control,
  });

  const [raw, setRaw] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRaw(event.target.value as string);
  };

  const onSubmit: SubmitHandler<CreateOrderFormProps> = async (data) => {
    // const response = await createOrder(data.order, data.providerId)
    //console.log(response)
  };

  return (
    <Box className={useState() ? 'modal__content active' : 'modal__content'}>
      <Typography
        variant="h3"
        sx={{ fontSize: '30px', color: 'black', textAlign: 'center' }}
      >
        Составление запроса
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="create-order request">
        <div className="create-order form">
          <div className="create-order left-field">
            <div className="create-order left-field first-group">
              <div className="create-order left-field time-life">
                <Typography>Максимальный срок ожидания КП</Typography>
                <Controller
                  control={control}
                  name="order.timeLife"
                  render={({ field }) => (
                    <TextField
                      size="small"
                      type="number"
                      margin="normal"
                      defaultValue={7}
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.timeLife?.message}
                      helperText={errors.order?.timeLife?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
              <div className="create-order left-field checkpoints">
                <Typography>Количество изготовителей</Typography>
                <Controller
                  control={control}
                  name="order.countOfControlPoints"
                  render={({ field }) => (
                    <TextField
                      size="small"
                      margin="normal"
                      type="number"
                      defaultValue={1}
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.countOfControlPoints?.message}
                      helperText={errors.order?.countOfControlPoints?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="create-order left-field second-group">
              <div className="create-order left-field type-of-raw">
                <Controller
                  control={control}
                  name="order.typeOfRaw"
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Давальческое сырье"
                    />
                  )}
                />
              </div>
              <div className="create-order left-field date">
                <Typography>Дата поставки</Typography>
                <Controller
                  control={control}
                  name="order.date"
                  render={({ field }) => (
                    <TextField
                      size="small"
                      type="date"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.date?.message}
                      helperText={errors.order?.date?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mr: '50px',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className="create-order left-field third-group">
              <div className="create-order left-field location">
                <Typography>Регион поиска</Typography>
                <Controller
                  control={control}
                  name="order.locationForSearch"
                  render={({ field }) => (
                    <TextField
                      //label="Локация поиска"
                      size="small"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.locationForSearch?.message}
                      helperText={errors.order?.locationForSearch?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        m: '2',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
              <div className="create-order left-field cost">
                <Typography>Лимитирущая цена</Typography>
                <Controller
                  control={control}
                  name="order.limitOfCost"
                  render={({ field }) => (
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">₽</InputAdornment>
                        ),
                      }}
                      type="number"
                      size="small"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.limitOfCost?.message}
                      helperText={errors.order?.limitOfCost?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="create-order right-field">
            <div className="create-order right-field first-group">
              <Typography
                className="create-order right-field detail-name"
                sx={{ color: 'black', mt: '8px' }}
              >
                Ваша деталь: Имя детали
              </Typography>
              <Typography
                className="create-order right-field amount"
                sx={{ color: 'black', mt: '8px' }}
              >
                Количество деталей: N шт.
              </Typography>
            </div>
            <div className="create-order right-field second-group">
              <div className="create-order right-field comment">
                <Typography>Дополнительные условия</Typography>
                <Controller
                  control={control}
                  name="order.Comment"
                  render={({ field }) => (
                    <TextField
                      id="comment"
                      //label="Комментарий"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.order?.Comment?.message}
                      helperText={errors.order?.Comment?.message}
                      multiline
                      rows={5}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        width: '190%',
                        mt: '8px',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="create-order steps-button-field">
          <Button
            id="to-left-button"
            variant="contained"
            type="reset"
            color="primary"
            disableElevation={true}
            sx={{
              mt: 5,
              bgcolor: '#5252F2',
              color: 'white',
              borderRadius: '3px',
            }}
            onClick={() => {
              setCurrentOpen(1);
            }}
          >
            {'<'}
          </Button>
          <Button
            id="to-right-button"
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
              setCurrentOpen(3);
            }}
          >
            Далее
          </Button>
        </div>
      </form>
    </Box>
  );
}
