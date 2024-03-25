import { makeStyles } from "@mui/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    login_container: {
    backgroundImage: "url(/fondo.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: "flex",
    justifyContent: "left",
    verticalAlign: "middle"
    },
    content: {
        width: "35%",
        marginLeft: "5%",
        marginTop: "10%",
        color: "#0A0A0A",
    },
});





const card = (
    <React.Fragment  >
            
            <Typography align="center" sx={{pt: 5}} variant="h3">
                <img alt="logo" style={{ height: "100px" }} align="center" src="/logo192.png"/> React App
            </Typography>

            <Typography align="center" sx={{ color: 'action.active', pt: 1}} variant="h5">
                LOGIN
            </Typography>


        <CardContent>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mx:"10%", my:"5%", width: "80%"}}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField sx={{  width: "100%"}}  id="input-with-sx" label="User Name" variant="standard" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mx:"10%", width: "80%"}}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField sx={{  width: "100%"}} id="input-with-sx" label="Password" variant="standard" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center',pt: 5, mx:"10%", width: "80%"}}>
                <Button sx={{  width: "100%", backgroundColor: 'action.active', "&:hover": {backgroundColor: 'action.active'}}}  variant="contained">
                    <NavLink style={{ textDecoration: 'none',
                         color: '#FFFFFF'} }  to="/home">Entrar</NavLink>
                </Button>
            </Box>


        </CardContent>
    </React.Fragment>
);

export default function Login(){

    const classes = useStyles();
    
    return(
        <div className={classes.login_container}>

        <Box className={classes.content}>
            <Card sx={{
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: "1rem"
    }} variant="outlined">{card}</Card>
        </Box>

        </div>
    )
}

// class Login extends Component {
//   render() {
//     return (
//       <div className={}>
//       </div>
//     );
//   }
// }

// export default Login;