import React, { useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container  from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell,  { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const useStyles = makeStyles({
    table: {
    //   minWidth: 650,
      width: '90%'
    },
    textField: {
        width: '95%',        
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    Toolbar: {
        backgroundColor: '#000000'
      },
    button:{
        textDecoration: 'none',
        color: '#FFFFFF'
    },
    // spacing: '5%'

  });

  



export default function Home(){

    const [rows, setRows] = useState([]);
        
    const classes = useStyles();

    const request =() => {

        fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json()).then( data => {
                setRows(data);
        })

    }

    useEffect(() => { 
            
    request()

    }, [])


  const requestSearch = (searchedVal) => {
    if(searchedVal === ''){
        request()

    } else{
        const filteredRows = rows.filter((row) => {

            let name  = row.name.toLowerCase().includes(searchedVal.toLowerCase());
            let username = row.username.toLowerCase().includes(searchedVal.toLowerCase());
            let email = row.email.toLowerCase().includes(searchedVal.toLowerCase());
            let phone = row.phone.toLowerCase().includes(searchedVal.toLowerCase());
            let website = row.website.toLowerCase().includes(searchedVal.toLowerCase());
            let result;
            if(name){
                result = name;
            } else if( username){
                result = username
            } else if( email){
                result = email
            } else if(phone){
                result = phone
            } else if( website){
                result = website
            }
          return result;
        });

        setRows(filteredRows);
    }
   
  };



  return (
        <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar className={classes.Toolbar}>
                    <IconButton
                         size="large"
                        edge="start"
                        color="black"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React App
                    </Typography>

                    <Button  color="inherit">
                        <NavLink className={classes.button} to="/">Login</NavLink>
                        </Button>
                </Toolbar>
              </AppBar>

              <br/>
              <Container fixed>
             

              <Paper>
                
              <Typography sx={{ m:2, py: 2 }} align="center" variant="h3" component="h3">
                    Users
              </Typography>

                <TextField
                    //  fullWidth
                     placeholder="Search"
                     id="outlined-basic" variant="outlined"
                     sx={{ mx: 3, my: 2}}
                    className={classes.textField}
                    onChange={(searchVal) => {
                        let val = searchVal.target.value;
                        requestSearch(val)
                    }
                    }
                    // onCancelSearch={() => cancelSearch()}
                />
                <br/>

                <Container sx={{px: 3, py: 2}}>
                <TableContainer >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">User Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Phone</StyledTableCell>
                                <StyledTableCell align="center">Web site</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" align="center" scope="row">
                                    { row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.username}</StyledTableCell>
                                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                                    <StyledTableCell align="center">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="center">{row.website}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Container>

              </Paper>

             <br/>

                

            
              </Container>


        </Box>
    );
  
}
