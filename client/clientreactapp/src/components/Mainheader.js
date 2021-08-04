import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import Arrowdown from '@material-ui/icons/ExpandMore';

const UseStyles = makeStyles((theme)=>({
    
    appbar:{
        background:'black',
        fontFamily:'Nunito',
        

    },
    appbarTitle:{
        flexGrow:"1",
    },
    appbarLogo:{
        width:'10%',
        height:'5%',
        
       
        
       
        
    },
    appbarWrapper:{
        width:"80%",
        margin:'0 auto',
        backgroundColor:'black',
        display:'flex',
        justifyContent:'space-around'
    },
    icon :{
        color:'#fff',
        fontSize:'2rem',
        
        


    },
    links1 :{
        // position:'absolute',
        // left:'40%',
    },
    links2 :{
        // position:'absolute',
        // left:'80%',
    }
}))

function Mainheader() {
    const classes = UseStyles();
    return (
        
    <AppBar className = {classes.appbar} >
            
            <Toolbar className = {classes.appbarWrapper}>
            {/* <img className = {classes.appbarLogo} src={logo} alt= {logo} /> */}
            <Link className = {classes.links} to = '/'>Home</Link>
            <Link className = {classes.links} to = '/about'>About</Link>
            <Link className = {classes.links} to = '/play'>Play</Link>
            <Link className = {classes.links} to = '/play'>Connect Wallet</Link>

          
            <IconButton>
                <SortIcon className = {classes.icon}/>
            </IconButton>
            </Toolbar>
        </AppBar>
       
    )
}

export default Mainheader