import {Typography} from '@mui/material'
import type { TypographyProps } from '@mui/material'

type TypeTitle= {
 title: string 
 fontSize?: string,
 fontFamily?: string
 color?: string
 fontWeight: string
 variant?: TypographyProps['variant']
}



const Title = ({title, fontSize, fontFamily, color, fontWeight,variant}: TypeTitle) => {
    return (<>
    <Typography variant={variant} sx={{fontFamily, fontSize, color, fontWeight}}>
     
   {title}

    </Typography>
    
    
    
    
    </>)
}

export default Title
