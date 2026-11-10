import { Toaster } from 'sonner'

import AppRoutes from '@/routes/AppRoutes'

const App = () => {
  return (
    <>
    <Toaster position="top-right" richColors />
      <AppRoutes/>
    </>
  )
}

export default App
