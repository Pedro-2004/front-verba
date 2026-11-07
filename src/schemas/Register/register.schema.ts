import { z } from 'zod'

export const registerSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })

  .refine((data) => {
    if (data.password === data.confirmPassword) {
      return true
    }
    return false
    
  }, {
    error: 'As senhas não coincidem',
    path: ['confirmPassword']
  })
