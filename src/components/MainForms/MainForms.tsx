import { useState } from 'react'
import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Typography,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Title from '@/components/Title/Title'
import Logo from '@/components/Logo/Logo'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone'
import GoogleIcon from '@mui/icons-material/Google'
import ButtonTheme from '@/components/ButtonTheme/ButtonTheme'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

// #12355B → botões principais, áreas de destaque, cabeçalhos
// #14B8A6 → ações secundárias, detalhes, indicadores positivos
// #F7FAFC → fundo geral da aplicação
// #0B1F33 → títulos e textos principais
// #5B6B7A → descrições, labels e textos menos importantes

const MainForms = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isDark, setIsDark] = useState<boolean>(false)

  const ChangeColor = () => {
    return setIsDark(!isDark)
  }

  return (
    <>
     
        <Card
          sx={{
            width: '100%',
            maxWidth: '600px',
            height: '800px',
            textAlign: 'center',
            boxShadow: 'none',
            border: 'none',
            borderRadius: 0,
            backgroundColor: !isDark ? 'transparent' : '#0B1F33',
          }}
        >
          <Box>
            <ButtonTheme
              icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
              onClick={ChangeColor}
            />
          </Box>
          <Box
            sx={{
              pt: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Logo
              icon={
                <Box
                  component="img"
                  src="/Login/logo-icon.png"
                  alt="Logo Verba"
                  sx={{
                    display: 'block',
                    width: '90px',
                    height: '90px',
                    objectFit: 'contain',
                  }}
                />
              }
            />

            <Title
              title="Verba"
              variant="h3"
              fontFamily="arial"
              color="#000000"
              fontWeight="700"
            />
          </Box>

          <Box sx={{ marginTop: '25px', marginLeft: '18px' }}>
            <Title
              title="Bem-vindo de volta"
              fontFamily="arial"
              fontSize="24px"
              fontWeight="600"
              color="#000000"
            />
            <Title
              title="Acesse sua conta e continue cuidando das susa finanças"
              fontFamily="arial"
              fontSize="14px"
              fontWeight="200"
              color="#000000b8"
            />
          </Box>

          <Stack
            spacing={3}
            sx={{ marginTop: '30px', width: '400px', marginLeft: '115px' }}
          >
            <Stack spacing={1} sx={{ textAlign: 'left' }}>
              <Title
                title="E-mail"
                fontFamily="arial"
                fontWeight="700"
                fontSize="14px"
              />
              <TextField
                id="email"
                type="email"
                placeholder="seu@email.com"
                variant="outlined"
                size="medium"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    border: '1px',
                  },
                }}
                slotProps={{
                  htmlInput: { 'aria-label': 'E-mail' },
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>
            <Stack spacing={1.5} sx={{ textAlign: 'left' }}>
              <Title
                title="Senha"
                fontFamily="arial"
                fontWeight="700"
                fontSize="14px"
              />

              <TextField
                id="senha"
                placeholder="Sua senha"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                size="medium"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    border: '1px ',
                  },
                }}
                slotProps={{
                  htmlInput: { 'aria-label': 'Senha' },
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'Ocultar senha' : 'Mostrar senha'
                          }
                          aria-pressed={showPassword}
                          onClick={() => setShowPassword((show) => !show)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Box>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lembrar de mim"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#000000',
                    },
                  }}
                />
              </Box>

              <Button
                variant="outlined"
                endIcon={<EastTwoToneIcon />}
                sx={{
                  textTransform: 'none',
                  fontFamily: 'Inter, sans-serif',
                  justifyContent: 'center',
                  color: 'white',
                  border: '  solid 2px  ',
                  borderRadius: '10px',
                  height: '50px',
                  width: '100%',
                  background: '#14B8A6',
                }}
              >
                Entrar
              </Button>

              <Divider
                variant="middle"
                sx={{ fontFamily: 'Inter, sans-serif' }}
              >
                {' '}
                ou
              </Divider>

              <Button
                startIcon={<GoogleIcon />}
                sx={{
                  border: 'solid 1px #dce0e3 ',
                  color: 'black',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 200,
                  textTransform: 'none',
                  height: '50px',
                  borderRadius: '10px',
                }}
              >
                Entrar com o Google
              </Button>
            </Stack>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '100px' }}>
              <Typography>Ainda não tem uma conta ?</Typography>
              <Typography
                sx={{ fontWeight: 700, color: 'var(--color-secondary)' }}
                component="a"
                href="/cadastro"
              >
                Criar Conta
              </Typography>
            </Box>
          </Stack>
        </Card>
      
    </>
  )
}

export default MainForms
