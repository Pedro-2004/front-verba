
import Button from '@mui/material/Button';

type ButtonProps ={
  title?: string;
  onClick: () => void
  className?: string
  icon: React.ReactNode
}

const ButtonTheme = ({title, onClick,className, icon}:  ButtonProps) =>{
 return(<>
   <Button onClick={onClick} className={className}>
 {title}
 {icon}
    
   </Button>
 </>)
}

export default ButtonTheme