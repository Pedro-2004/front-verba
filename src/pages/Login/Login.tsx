import MainForms from '@/components/MainForms/MainForms'
import Box from '@mui/material/Box'
import ButtonTheme from '@/components/ButtonTheme/ButtonTheme'
import { useState } from 'react'

const Login = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  const changeColor = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: isDark ? '#0B1F33' : '#FFFFFF',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#03141f',
        }}
      >
        <Box
          component="img"
          src="/Login/financas.png"
          alt="Verba: suas finanças em um só lugar"
          sx={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minWidth: 0,
          boxSizing: 'border-box',
          px: { xs: 3, sm: 4, lg: 6 },
          pt: 9,
          pb: 5,
          minHeight: '100vh',

          position: 'relative',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: isDark ? '#0B1F33' : '#FFFFFF',
          colorScheme: isDark ? 'dark' : 'light',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
        >
          <ButtonTheme
            isDark={isDark}
            onClick={changeColor}
          />
        </Box>

        <MainForms isDark={isDark} />
      </Box>
    </Box>
  )
}

export default Login
