'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  fullName: string;
  address: string;
  number: string;
  cep: string;
  phone: string;
  cpf: string;
};

const ORANGE_MAIN = '#F88208';
const ORANGE_HOVER = '#FFA13F';
const CARD_BG = '#FDFDFB';
const FIELD_BORDER = '#FFEDCF';

export default function UserRegistrationPage() {
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
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: integrar com backend / Firebase
    console.log('Form data:', data);
    reset();
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: { xs: 3, md: 6 } }}>
      <Box display="flex" justifyContent="center">
        <Paper
          elevation={4}
          sx={{
            width: '100%',
            maxWidth: 375,
            minHeight: 812,
            p: 3,
            borderRadius: '50px',
            bgcolor: CARD_BG,
            boxShadow:
              '0px 20px 40px rgba(0,0,0,0.06), 0px 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: '#484747', mb: 2 }}
          >
            user registration
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
                    req
