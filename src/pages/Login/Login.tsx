import MainForms from '@/components/MainForms/MainForms'
import Box from '@mui/material/Box'
import ButtonTheme from '@/components/ButtonTheme/ButtonTheme'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
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
        backgroundColor: isDark ? '#0B1F33' : '#FFFFFF',
      }}
    >
      <Box
        sx={{
          width: '50%',
          minHeight: '100vh',

          backgroundImage: "url('/Login/financas.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Box
        sx={{
          width: '50%',
          minHeight: '100vh',

          position: 'relative',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: isDark ? '#0B1F33' : '#FFFFFF',
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
            icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
            onClick={changeColor}
          />
        </Box>

        <MainForms isDark={isDark} />
      </Box>
    </Box>
  )
}

export default Login