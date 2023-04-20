import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import React from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { IDetail } from '../models/detail';
import './CreateDetailForm.css';

export interface CreateDetailFormProps {
  detail?: IDetail;
  onCreate: (detail: IDetail) => void;
  setCurrentOpen: (arg0: number) => void;
}

export default function CreateDetailForm({
  onCreate,
  setCurrentOpen,
}: CreateDetailFormProps) {
  const { handleSubmit, control } = useForm<CreateDetailFormProps>({
    mode: 'onChange',
    //resolver: yupResolver(projectValidationSchema),
  });

  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<CreateDetailFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <Box className="create-detail detail">
      <Typography
        variant="h3"
        sx={{ fontSize: '30px', color: 'black', textAlign: 'center' }}
      >
        Характеристики детали
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="modal__content">
        <div className="create-detail form">
          <div className="create-detail left-field">
            <div className="create-detail left-field first-group">
              <div className="create-detail left-field name-field">
                <Typography>Название детали</Typography>
                <Controller
                  control={control}
                  name="detail.Name"
                  render={({ field }) => (
                    <TextField
                      id="text-field"
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mt: '8px',
                        width: '99%',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                      //label="Название детали"
                      size="small"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.detail?.Name?.message}
                      helperText={errors.detail?.Name?.message}
                    />
                  )}
                />
              </div>
              <div className="create-detail left-field material-field">
                <Typography>Материал</Typography>
                <Controller
                  control={control}
                  name="detail.materialName"
                  render={({ field }) => (
                    <TextField
                      id="text-field"
                      //label="Материал изделия"
                      size="small"
                      margin="normal"
                      fullWidth={true}
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                      error={!!errors.detail?.materialName?.message}
                      helperText={errors.detail?.materialName?.message}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        mt: '8px',
                        width: '99%',
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          { borderColor: 'white', borderRadius: '10px' },
                      }}
                    />
                  )}
                />
              </div>
            </div>

            <div className="create-detail left-field second-group">
              <div className="create-detail left-field box">
                <div className="create-detail left wight">
                  <Typography>Ширина мм</Typography>
                  <Controller
                    control={control}
                    name="detail.Wight"
                    render={({ field }) => (
                      <TextField
                        id="size-field"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mm</InputAdornment>
                          ),
                        }}
                        size="small"
                        margin="normal"
                        type="number"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.detail?.Wight?.message}
                        helperText={errors.detail?.Wight?.message}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          mr: '0',
                          mt: '8px',
                          width: '96%',
                          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            { borderColor: 'white', borderRadius: '10px' },
                        }}
                      />
                    )}
                  />
                </div>
                <div className="create-detail left long">
                  <Typography>Длина мм</Typography>
                  <Controller
                    control={control}
                    name="detail.Long"
                    render={({ field }) => (
                      <TextField
                        id="size-field"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mm</InputAdornment>
                          ),
                        }}
                        size="small"
                        margin="normal"
                        type="number"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.detail?.Long?.message}
                        helperText={errors.detail?.Long?.message}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          mr: '0',
                          mt: '8px',
                          width: '96%',
                          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            { borderColor: 'white', borderRadius: '10px' },
                        }}
                      />
                    )}
                  />
                </div>
                <div className="create-detail right height">
                  <Typography>Высота мм</Typography>
                  <Controller
                    control={control}
                    name="detail.Height"
                    render={({ field }) => (
                      <TextField
                        id="size-field"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mm</InputAdornment>
                          ),
                        }}
                        size="small"
                        margin="normal"
                        type="number"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.detail?.Height?.message}
                        helperText={errors.detail?.Height?.message}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          mr: '0',
                          mt: '8px',
                          width: '96%',
                          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            { borderColor: 'white', borderRadius: '10px' },
                        }}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="create-detail left-field box">
                <div className="create-detail right weight">
                  <Typography>Масса кг</Typography>
                  <Controller
                    control={control}
                    name="detail.Weight"
                    render={({ field }) => (
                      <TextField
                        id="size-field"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">kg </InputAdornment>
                          ),
                        }}
                        size="small"
                        margin="normal"
                        type="number"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.detail?.Weight?.message}
                        helperText={errors.detail?.Weight?.message}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          mt: '8px',
                          width: '97%',
                          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            { borderColor: 'white', borderRadius: '10px' },
                        }}
                      />
                    )}
                  />
                </div>
                <div className="create-detail right weight">
                  <Typography>Количество деталей</Typography>
                  <Controller
                    control={control}
                    name="detail.detailAmount"
                    render={({ field }) => (
                      <TextField
                        type="number"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">шт</InputAdornment>
                          ),
                        }}
                        size="small"
                        margin="normal"
                        defaultValue={1}
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.detail?.detailAmount?.message}
                        helperText={errors.detail?.detailAmount?.message}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '10px',
                          mt: '8px',
                          width: '97%',
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

          <div className="create-detail right-field">
            <div className="create-detail right-field upload-file">
              <Button
                variant="contained"
                component="label"
                sx={{ backgroundColor: '#5252F2', borderRadius: '3px' }}
              >
                Upload a file
                <input type="file" hidden />
              </Button>
            </div>
            <div className="create-detail right-field comment">
              <Typography>Комментарий</Typography>
              <Controller
                control={control}
                name="detail.Comment"
                render={({ field }) => (
                  <TextField
                    id="comment"
                    //label="Комментарий"
                    placeholder="Особенности изготовления, применяемые покрытие, технические требования, термообработка и др параметры"
                    margin="normal"
                    fullWidth={true}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={!!errors.detail?.Comment?.message}
                    helperText={errors.detail?.Comment?.message}
                    multiline
                    rows={5}
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      width: '180%',
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

        <div className="create-detail steps-button-field">
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
          >
            {'<'}
          </Button>
          <Button
            id="to-right-button"
            variant="contained"
            type="submit"
            color="primary"
            size="medium"
            disableElevation={true}
            sx={{
              mt: 5,
              ml: 4,
              width: '50%',
              bgcolor: '#5252F2',
              color: 'white',
              borderRadius: '3px',
              fontSize: '11px',
              lineHeight: '16px',
            }}
            onClick={() => {
              setCurrentOpen(1);
            }}
          >
            Подобрать <br /> изготовителя
          </Button>
        </div>
      </form>
    </Box>
  );
}
