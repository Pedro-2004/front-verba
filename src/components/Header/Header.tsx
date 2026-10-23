import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";




type HeaderProps ={
    title: string
}
const Header = ({title}: HeaderProps) =>{

    return(<>
    
    <AppBar position='static'>
        <Toolbar>
            <Typography>
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
    </>)

}

export default Header