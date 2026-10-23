import MainForms from '@/components/MainForms/MainForms'
import Box from '@mui/material/Box'


const Login = () => {

   

    return(<>



  
    <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
   
  }}
>
<Box
  sx={{
    width: "50%",
    minHeight: "100vh",
    backgroundImage: "url('/finanças.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

<Box
  sx={{
    width: "50%",
    minHeight: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F7FAFC",
  }}
>
  <MainForms/>
</Box>
  
   
</Box>
    
    </>)
}

export default Login