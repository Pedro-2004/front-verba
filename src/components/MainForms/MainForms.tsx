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
import { Link } from 'react-router'
import type { SubmitEvent } from 'react'
import { registerSchema } from '@/schemas/Register/register.schema'
import { toast } from 'sonner'

// #12355B → botões principais, áreas de destaque, cabeçalhos
// #14B8A6 → ações secundárias, detalhes, indicadores positivos
// #F7FAFC → fundo geral da aplicação
// #0B1F33 → títulos e textos principais
// #5B6B7A → descrições, labels e textos menos importantes

type MainFormsProps = {
  isDark: boolean
  mode: 'login' | 'register'
}

const MainForms = ({ isDark, mode }: MainFormsProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const textColor = isDark ? '#F7FAFC' : '#0B1F33'
  const secondaryColor = isDark ? '#B3C2D1' : '#5B6B7A'
  const borderColor = isDark ? '#52677D' : '#8593A1'
  const accentColor = isDark ? '#2DD4BF' : '#0F766E'
  const inputBackground = isDark ? '#102A43' : '#FFFFFF'
  const fieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      color: textColor,
      backgroundColor: inputBackground,
      '& .MuiOutlinedInput-notchedOutline': { borderColor },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: secondaryColor,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: accentColor,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: isDark ? '#FDA4AF' : '#B91C1C',
      },
      '& input': { caretColor: accentColor },
      '& input::placeholder': { color: secondaryColor, opacity: 1 },
      '& input:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0 100px ${inputBackground} inset`,
        WebkitTextFillColor: textColor,
        caretColor: accentColor,
      },
      '& input:autofill': {
        boxShadow: `0 0 0 100px ${inputBackground} inset`,
        color: textColor,
      },
    },
  }

  const handleSubmit = async (
    event: SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    // Limpa mensagens anteriores
    setConfirmPasswordError('')

    const formData = new FormData(event.currentTarget)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (mode === 'register') {
      const result = registerSchema.safeParse({
        password,
        confirmPassword,
        email
      })

      if (!result.success) {
        const confirmPasswordIssue = result.error.issues.find(
          (issue) => issue.path[0] === 'confirmPassword',
        )

        setConfirmPasswordError(
          confirmPasswordIssue?.message ?? 'Verifique os dados informados.',
        )

        toast.error('Verifique os dados informados ')
        return
      }
      toast.success('Validação concluída com sucesso')
    }
    try {
      const result = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      const data = await result.json()

      if (!result.ok) {
        throw new Error(data.message || 'Érro ao cadastra usuário')
      }
      console.log('Usuário cadastrado com sucesso!', data)
    } catch (error) {
      console.error('Não foi possível cadastrar o usuário', error)
    }
  }

  return (
    <>
      <Card
        sx={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: 'none',
          border: 'none',
          borderRadius: 0,
          backgroundColor: 'transparent',
        }}
      >
        <Box
          sx={{
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
            color={textColor}
            fontWeight="700"
          />
        </Box>

        <Box sx={{ marginTop: '25px' }}>
          <Title
            title={mode === 'login' ? 'Bem-vindo de volta' : 'Crie sua conta'}
            fontFamily="arial"
            fontSize="24px"
            fontWeight="600"
            color={textColor}
          />
          <Title
            title={
              mode === 'login'
                ? 'Acesse sua conta e continue cuidando das susa finanças'
                : 'Crie a sua conta e tenha mais controle dos seus gastos'
            }
            fontFamily="arial"
            fontSize="14px"
            fontWeight="400"
            color={secondaryColor}
          />
        </Box>

        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={3}
          sx={{ marginTop: '30px', width: '100%' }}
        >
          <Stack spacing={1} sx={{ textAlign: 'left' }}>

  {mode === 'register' && (
              <Stack spacing={1}>
                <Title
                  title="nome"
                  fontSize="14px"
                  fontWeight="700"
                  color={textColor}
                />

                <TextField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Digite o seu nome"
                  variant="outlined"
                  fullWidth
                  sx={fieldStyles}
                
                  onChange={(event) => {
                    setName(event.target.value)
                   
                  }}
                  value={name}
                />
              </Stack>
            )}
            
            <Title
              title="E-mail"
              fontFamily="arial"
              fontWeight="700"
              fontSize="14px"
              color={textColor}
            />
            <TextField
              id="email"
              type="email"
              placeholder="seu@email.com"
              variant="outlined"
              size="medium"
              sx={fieldStyles}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              slotProps={{
                htmlInput: { 'aria-label': 'E-mail' },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon
                        sx={{
                          color: secondaryColor,
                        }}
                      />
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
              color={textColor}
            />

            <TextField
              id="senha"
              name="password"
              placeholder="Sua senha"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size="medium"
              value={password}
              onChange={(event) => setPassword(event.target.value)}

              sx={fieldStyles}
              slotProps={{
                htmlInput: { 'aria-label': 'Senha' },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon
                        sx={{
                          color: secondaryColor,
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          color: secondaryColor,
                        }}
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

            {mode === 'register' && (
              <Stack spacing={1}>
                <Title
                  title="Confirmar senha"
                  fontSize="14px"
                  fontWeight="700"
                  color={textColor}
                />

                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  variant="outlined"
                  fullWidth
                  sx={fieldStyles}
                  error={Boolean(confirmPasswordError)}
                  helperText={confirmPasswordError}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value)
                    setConfirmPasswordError('')
                  }}
                  value={confirmPassword}
                />
              </Stack>
            )}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: secondaryColor,
                      '&.Mui-checked': { color: accentColor },
                    }}
                  />
                }
                label="Lembrar de mim"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: secondaryColor,
                  },
                }}
              />
            </Box>

            <Button
              variant="outlined"
              type="submit"
              endIcon={<EastTwoToneIcon />}
              sx={{
                textTransform: 'none',
                fontFamily: 'Inter, sans-serif',
                justifyContent: 'center',
                color: '#0B1F33',
                border: 'solid 2px transparent',
                borderRadius: '10px',
                height: '50px',
                width: '100%',
                background: '#14B8A6',
                '&:hover': { backgroundColor: '#2DD4BF' },
                '&.Mui-focusVisible': {
                  outline: `2px solid ${accentColor}`,
                  outlineOffset: '3px',
                },
              }}
            >
              Entrar
            </Button>

            <Divider
              variant="middle"
              sx={{
                fontFamily: 'Inter, sans-serif',
                color: secondaryColor,

                '&::before, &::after': {
                  borderColor,
                },
              }}
            >
              ou
            </Divider>

            <Button
              startIcon={<GoogleIcon />}
              sx={{
                border: `solid 1px ${borderColor}`,
                color: textColor,
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 200,
                textTransform: 'none',
                height: '50px',
                borderRadius: '10px',
                '&:hover': {
                  borderColor: accentColor,
                  backgroundColor: isDark ? '#163750' : '#F0FDFA',
                },
                '&.Mui-focusVisible': {
                  outline: `2px solid ${accentColor}`,
                  outlineOffset: '3px',
                },
              }}
            >
              Entrar com o Google
            </Button>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: secondaryColor,
              }}
            >
              {mode === 'login' ? 'Já tem uma conta ?' : 'Acesse agora'}
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                color: accentColor,
                '&:hover': { textDecoration: 'underline' },
                '&:focus-visible': {
                  outline: `2px solid ${accentColor}`,
                  outlineOffset: '3px',
                },
              }}

              component={Link}
              to={mode === 'login' ? '/register' : '/login'}
            >
              {mode === 'login' ? 'Criar Conta' : 'Acesse agora'}
            </Typography>
          </Box>
        </Stack>
      </Card>
    </>
  )
}

export default MainForms
