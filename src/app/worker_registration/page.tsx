'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  MenuItem,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import FooterIcons from '../components/footer_icons/page';

type FormValues = {
  fullName: string;
  address: string;
  number: string;
  cep: string;
  phone: string;
  cpf: string;
  profession: string;
};

const ORANGE_MAIN = '#F88208';
const ORANGE_HOVER = '#FFA13F';
const FIELD_BORDER = '#FFEDCF';
const BACKGROUND_COLOR = '#FDFDFB';

const PROFESSIONS = [
  'Cleaner',
  'Electrician',
  'Furniture',
  'Gardener',
  'Glazier',
  'Gram',
  'Mason',
  'Masseuse',
  'Painter',
  'Pet sitter',
  'Plumber',
  'Pool',
  'Repairs',
];

export default function WorkerRegistrationPage() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      address: '',
      number: '',
      cep: '',
      phone: '',
      cpf: '',
      profession: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: integrar com backend / Firebase
    console.log('Worker form:', data);
    reset();
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ py: { xs: 3, md: 6 }, bgcolor: BACKGROUND_COLOR, minHeight: '100vh' }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: '#484747', mb: 2 }}
        >
          Cadastro de Trabalhador
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2.5}>
          <LabeledField label="Nome Completo *">
            <Controller
              name="fullName"
              control={control}
              rules={{ required: 'Informe seu nome completo' }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="Seu nome"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              )}
            />
          </LabeledField>

          <LabeledField label="Endereço *">
            <Controller
              name="address"
              control={control}
              rules={{ required: 'Informe seu endereço' }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="Seu endereço"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              )}
            />
          </LabeledField>

          <LabeledField label="Número *">
            <Controller
              name="number"
              control={control}
              rules={{
                required: 'Informe o número',
                pattern: { value: /^\d+$/, message: 'Use apenas dígitos' },
              }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="Número do seu endereço"
                  error={!!errors.number}
                  helperText={errors.number?.message}
                  inputMode="numeric"
                />
              )}
            />
          </LabeledField>

          <LabeledField label="CEP *">
            <Controller
              name="cep"
              control={control}
              rules={{
                required: 'Informe o CEP',
                pattern: {
                  value: /^\d{5}-?\d{3}$/,
                  message: 'Formato válido: 00000-000',
                },
              }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="Seu CEP"
                  error={!!errors.cep}
                  helperText={errors.cep?.message}
                  inputMode="numeric"
                />
              )}
            />
          </LabeledField>

          <LabeledField label="Telefone *">
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Informe o telefone',
                pattern: {
                  value: /^\+?\d[\d\s()-]{7,}$/,
                  message: 'Informe um telefone válido',
                },
              }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="+55"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  inputMode="tel"
                />
              )}
            />
          </LabeledField>

          <LabeledField label="CPF *">
            <Controller
              name="cpf"
              control={control}
              rules={{
                required: 'Informe o CPF',
                pattern: {
                  value: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
                  message: 'Formato válido: 000.000.000-00',
                },
              }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  placeholder="Seu CPF"
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                  inputMode="numeric"
                />
              )}
            />
          </LabeledField>

          <LabeledField label="Profissão *">
            <Controller
              name="profession"
              control={control}
              rules={{ required: 'Selecione uma profissão' }}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  select
                  placeholder="Selecione"
                  error={!!errors.profession}
                  helperText={errors.profession?.message ?? ' '}
                >
                  {PROFESSIONS.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </StyledTextField>
              )}
            />
          </LabeledField>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              alignSelf: 'flex-start',
              mt: 1,
              px: 4,
              py: 1.2,
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 700,
              bgcolor: ORANGE_MAIN,
              '&:hover': { bgcolor: ORANGE_HOVER },
              '&:active': { bgcolor: ORANGE_HOVER },
              boxShadow:
                '0px 6px 14px rgba(248,130,8,0.28), 0px 2px 4px rgba(0,0,0,0.06)',
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Box>
      </Container>
      <FooterIcons />
    </>
  );
}

/** --- Helpers & shared styled field --- */

function LabeledField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ color: '#484747', fontWeight: 600 }}>
        {label}
      </Typography>
      {children}
    </Stack>
  );
}

function StyledTextField(props: React.ComponentProps<typeof TextField>) {
  return (
    <TextField
      fullWidth
      size="medium"
      variant="outlined"
      InputLabelProps={{ shrink: false }}
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          bgcolor: '#FFFFFF',
          '& input::placeholder': { color: '#A4A4A4', opacity: 1 },
          '& fieldset': {
            borderColor: FIELD_BORDER,
          },
          '&:hover fieldset': {
            borderColor: FIELD_BORDER,
          },
          '&.Mui-focused fieldset': {
            borderColor: ORANGE_MAIN,
            borderWidth: '1.5px',
          },
        },
        '& .MuiFormHelperText-root': {
          mt: 0.75,
        },
      }}
    />
  );
}
