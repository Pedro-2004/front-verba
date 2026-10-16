import { Box, Card, Stack, TextField } from '@mui/material'
import Title from '@/components/Title/index'
import Logo from '@/components/Logo/index'


// #12355B → botões principais, áreas de destaque, cabeçalhos
// #14B8A6 → ações secundárias, detalhes, indicadores positivos
// #F7FAFC → fundo geral da aplicação
// #0B1F33 → títulos e textos principais
// #5B6B7A → descrições, labels e textos menos importantes



const MainForms = () =>{
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100dvh',
                p: 2,
            }}
        >
            <Card sx={{
                    border: 'solid 1px #5B6B7A',
                    width: '100%',
                    maxWidth: '600px',
                    height: '700px',
                    textAlign: 'center',
                }}>
                <Box sx={{pt: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
             <Logo icon={<Box component="img" src="/logo-icon.png" alt="Logo Verba" sx={{display: 'block', width: '90px', height: '90px', objectFit: 'contain'}} />}/>

                 <Title
                 title='Verba'
                 variant='h3'
                 fontFamily='arial'
                 color='#000000'
                 fontWeight='700' />

                 </Box>

                 <Box sx={{marginTop: '25px', marginLeft: '18px'}}>


                <Title
                title='Bem-vindo de volta'
                fontFamily='arial'
                fontSize='24px'
                fontWeight='600'
                color='#000000'
                />
                <Title
                title='Acesse sua conta e continue cuidando das susa finanças'
                fontFamily='arial'
                fontSize='14px'
                fontWeight='200'
                color='#000000b8'
                
                />
                </Box>

                <Stack spacing={6} sx={{marginTop: '50px',width: '400px', marginLeft: '115px' }}>
               
                    <Title
                    title='E-mail'
                    fontFamily='arial'
                    fontWeight='700'
                    fontSize='14px'
                    
                    />
                    <TextField id='outlined-basic' label='Sua senha' variant='outlined' size='medium' sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px' ,border: '1px',
                        },
                    }} />

                   
               
                 <TextField id='outlined-basic' label='seu@email.com' variant='outlined' size='medium' sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px', border: '1px '
    },
  }} />           
                 

                </Stack>
                 
            </Card>
        </Box>
    )
}

export default MainForms
