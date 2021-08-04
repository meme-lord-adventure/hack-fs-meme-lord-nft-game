import React,{useState,useEffect} from 'react'

import {makeStyles} from '@material-ui/core/styles';
import axios from'axios'
import { Button, FormControl,Grid,TextField,Select,MenuItem, Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import Popup from 'reactjs-popup';

import {Modal} from 'react-responsive-modal'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme)=>({
    root:{
      // position:'absolute',
      // margin:'0',
      // top:'10%',
      // marginLeft:'35%',
       width:'400px',
       height:'450px',
       border:' solid white',
      
       
      //  backgroundColor:'white',
      //  alignContent:'center',
       
    },
    else:{
    //   position:'relative',
    //  display:'flex',
    //  flexBasis:'200px',
    //  justifyContent:'space-around',
     
    //   '& .MuiFormControl-root':{
    //       position:'relative',
         
    //       display:'flex',

          
         
          margin:theme.spacing(6),
    //       color:'white'
   
    //   }

    },
    filler:{
        position:'relative',
        height:'5vh',
    
    
        
        
    },
    cover:{
       
    //    display:'flex',
    //    flexDirection:'column',

        
      
    
    },
    label:{
      marginLeft:'6rem'
    },
    textfield:{
      border:'10px solid white'
    },
    coverAll:{
      width:'100%',
      height:'100%',
      backgroundColor:'grey'
    },
    buttons:{
      border:'solid black',
      display: 'inline-block',
      padding: '25px 30px',
      margin: '50px 90px',
      color: '#bc03f4',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: '0.5s',
      letterSpacing: '4px',
      overflow: 'hidden',
      '&:hover':{
          background: '#bc03f4',
          color: '#050801',
          boxShadow: '0 0 50px #bc03f4'
                     
      }
        
    },
    buttons1:{
      border:'solid white',
      display: 'inline-block',
      padding: '10px 15px',
      margin: '45px 90px',
      color: '#bc03f4',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: '0.5s',
      letterSpacing: '4px',
      overflow: 'hidden',
      '&:hover':{
          background: '#bc03f4',
          color: '#050801',
          boxShadow: '0 0 20px #bc03f4'
                     
      }
        
    }
    
    


}));




export default function NewMemberForm(props){
    // const initialFValues={
    //     name:'',
    //     email:'',
    //     major:'',
    //     year:''
    
    const [formopen, setFormOpen] = useState(false)
    // }
    const classes = useStyles()
    // const [values,setValues] = useState(initialFValues);
    const [namevalue, setNameValue] = useState('');
    const [emailvalue,setEmailValue] = useState('')
    const [majorvalue,setMajorValue] = useState('')
    const [yearvalue,setYearValue] = useState('1')
    function formSubmitHandler(event){
     event.preventDefault()
   
        axios.post('http://localhost:5000/members',{
          Name:namevalue,
          Email:emailvalue,
          Major:majorvalue,
          Year:yearvalue


        }).then((res)=>{
            console.log('Data sent')
        }).catch((err)=>{
            console.log(err)
        })

      
    }
    
    function handleInputChangeName(event){
       setNameValue(event.target.value)
 
    }
    function handleInputChangeEmail(event){
        setEmailValue(event.target.value)
  
     }
     function handleInputChangeMajor(event){
        setMajorValue(event.target.value)
  
     }
     function handleInputChangeYear(event){
        setYearValue(event.target.value)
  
     }

  
    return( 
<>
      <Button className={classes.buttons} variant = "outlined" onClick={() => setFormOpen(true)}>
      Sign Up
  </Button>
  <Modal open={formopen} onClose={() => setFormOpen(false)} center>
  <div className = {classes.root}>
        <form  className = {classes.else} onSubmit ={formSubmitHandler} noValidate autoComplete="off">
            <Container >
              
    <TextField id="standard-basic" label="Name" variant = "outlined" className = {classes.textfield} InputProps={{
            color:'primary'

          }}
          value = {namevalue} onChange = {handleInputChangeName} />
      <TextField id="filled-basic" label="Email" variant="outlined" value = {emailvalue} className = {classes.textfield} onChange = {handleInputChangeEmail}  />
      <TextField id="outlined-basic" label="Major" variant="outlined" value = {majorvalue} className = {classes.textfield} onChange = {handleInputChangeMajor}  />
      
    
            </Container>
           <br></br>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearvalue}
          className = {classes.label}
          onChange={handleInputChangeYear}
        >
          <MenuItem value={1}>Freshman</MenuItem>
          <MenuItem value={2}>Sophomore</MenuItem>
          <MenuItem value={3}>Junior</MenuItem>
          <MenuItem value={4}>Senior</MenuItem>
        </Select>
        
            <Button type = "submit" variant = "filled" className = {classes.buttons1} onClick = {() => setFormOpen(false)}>Submit</Button>  
      </form>
   
      </div>
  </Modal>
     
     </>
    ) 
}