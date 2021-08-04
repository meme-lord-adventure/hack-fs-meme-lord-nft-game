import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Button, Card,CardContent,CardActions, Container, IconButton, Toolbar, Typography } from '@material-ui/core';

import NewMemberForm from './NewMemberForm.js';
import Arrowdown from '@material-ui/icons/ExpandMore';
import Mainheader from './Mainheader';

import Popup from 'reactjs-popup';
import Footer from './Footer.js';
import { Modal } from "react-responsive-modal";
import MetamaskConnect from './DApp/MetamaskConnect.js';




const useStyles = makeStyles((theme)=>({
root:{
       
    
   
        
        
        
},
    title:{
        color:"black",
        // backgroundColor:"#fff",
        fontFamily:'Benne',
        fontSize:'3.5rem',
       
        //  borderBottom: 'solid',
        // borderBottomColor: 'cornsilk',
    
    },
    title2:{
        color:"black",
        fontFamily:'Benne',
        fontSize:'1.5rem',
        
    },
    title3:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'2.5rem',
        // position:'absolute',
        // right:'60%',
        // top:'8rem'

    },
    title5:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'2.5rem',
        // position:'absolute',
        // top:'40%',
        // right:'40%',
        // margin:'10rem 27rem'
    },
    title4:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'1.5rem',
        // position:'absolute',
        // right:'40%',
        // top:'18rem'

    },
    cover:{
       
       backgroundColor:'white',
        width:'100%',
        height:'80%',
        alignItems:'center',
        textAlign:'center',
        position:'absolute',
        right:'0%',
       top:'20%',

        
      
    
    },
    newcover:{
        border:'solid',
        borderColor:'purple',
     
            
        borderWidth:'10px',
        backgroundColor:'black',
        // display:'flex',
        width:'100%',
        // height:'300px',
        maxWidth:'500px',
        
        padding:'30px',
        // width:'30%',
        // height:'80%',
        margin:'0 auto',
       
        position:'absolute',
        top:'12%',
        right:'55%',
       alignItems:'center'
        
       

     
    },
    finalcontainer:{
       
       
        // display:'flex',
        width:'100%',
        // height:'300px',
        maxWidth:'500px',
        
        padding:'30px',
        // width:'30%',
        // height:'80%',
        margin:'0 auto',
       
        position:'absolute',
        top:'30%',
        right:'34%',
       alignItems:'center'
    },
    cover1:{
       
        backgroundColor: '#FBF2FF',
        
        width:'100%',
        maxWidth:'1600px',
        height:'80%',
        
        
        position:'absolute',
        top:'100%',
        

        
      
    
    },
    goDown:{
        color:'#FFF',
        fontSize:'2.5rem',
        position:'absolute',
        alignItems:'center',
    },
    filler:{
        position:'absolute',

        top:'0%',
        right:'0%',
        height:'200px',
        width:'100%',
        backgroundColor:'purple',
    },
    filler3:{
        position:'absolute',

        top:'305%',
        right:'0%',
        height:'50px',
        width:'100%',
        backgroundColor:'purple',
    },
    form:{
       
        float:'right'



        
    },
    // video:{
    //     position:'relative',
    //     margin:'0 auto',
    //     top:'50rem'
    // },
    formColor:{
        backgroundColor: 'black',      
        position:'absolute',
        top:'0%', 
        margin:'0 auto',
        width:'100%',
        height:'100%',

        

    },
    buttons:{
        border:'solid black',
        display: 'inline-block',
        padding: '25px 30px',
        margin: '40px 30px',
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
    images:{
//    position:'absolute',
//   marginRight:'200rem',
    maxWidth:'100%',
//     maxHeight:'200%'
    },
    // images2:{
    //     position:'absolute',
    //     top : '160%',
    //     right:'5%',
    //     maxWidth:'60%',
    //     maxHeight:'80%'

    // },
    formContainer:{
        backgroundColor:'black'
    },
    formExit:{
        position:'absolute',
        top:'65%',
        right:'47%',
        padding:'10px'

    },
    footer:{
        position:'relative',
        top:'235%'
    },
    finalfiller:{
        maxWidth:'200rem',
        height:'500px',
        position:'absolute',
        top:'220%',
       
        backgroundColor:'black'

    },

    images3:{
      position:'absolute',
      top:'40%',
      right:'82%',
        // position:'absolute',
        // left:'5rem',
        // top:'9rem',
        maxWidth:'20%',
        maxHeight:'30%',
        overflow:'hidden',
        backgroundColor:'transparent'

    },
    images4:{
        position:'absolute',
        top:'10%',
      right:'82%',
        // position:'absolute',
        // right:'10rem',
        // top:'10rem',
        maxWidth:'20%',
        maxHeight:'30%',
        overflow:'hidden',
        backgroundColor:'transparent'

    },
    images5:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:'10%',
        right:'8%',
        // marginBottom:'9rem',
        maxWidth:'150px',
        maxHeight:'150px'

    },
    images6:{
        position:'absolute',

      top:'40%',
      right:'5%',
        // position:'absolute',
        // right:'45%',
        // top:'20rem',
     
        maxWidth:'15%',
        maxHeight:'20%'

    },
    // wrap:{
        


    // }
    semicircle:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        
        transform: 'translate(-50%, -50%)',
        height: '500px',
        width: '1000px',
        border:' solid whitesmoke',
        borderRadius: '550px 550px 0 0',
        backgroundColor: 'none'
    }
  




   


}));

export default function Header(){

    const [popup, setPopup] = useState(false)
    const classes = useStyles();
    const [formopen, setOpen] = useState(false)

    return(
        
       
        <div className = {classes.root}>
            <Mainheader>
            
            </Mainheader>
     
            <div className = {classes.filler}></div>
            <div className = {classes.cover}> 
            <div className = {classes.wrap}>
              <Typography className = {classes.title}><br />Welcome to Meme Lord Adventure</Typography>
              
              <IconButton>
                  <Arrowdown className = {classes.goDown}></Arrowdown>
            </IconButton>
            <Typography className = {classes.title2}><br />Earn unique NFT's and crypto while playing!</Typography>
            
            <Button className={classes.buttons} variant = "outlined" onClick={() => setOpen(true)}>
        Learn More
      </Button>
      <Modal open={formopen} onClose={() => setOpen(false)} center>
      <div className = {classes.root}>
      <Container>
            <h1>
            Rare Vitalik Butterin and More!
            </h1>

      </Container>
        </div>
        </Modal>
        <MetamaskConnect></MetamaskConnect>
      <NewMemberForm className = {classes.form}></NewMemberForm>
    
      </div>
     
      {/*see our members, explore ecosystems*/}
      <div>
          <Container className = {classes.cover1}>
          {/* <img className = {classes.images} src = {download} alt = ""></img> */}
          <Container className = {classes.newcover}>
                <Typography className = {classes.title3}>Join our community</Typography>
            <Typography className = {classes.title4}>
            Link to discord
            </Typography>
            <Button className = {classes.buttons} >Members</Button>
           
                </Container>
               
          </Container>
            {/* <div className = {classes.cover1}>
               
                {/* <img src = {landscape} className = {classes.images} ></img>  */}
               
           
               
            </div> 
            <Container className = {classes.finalfiller}>
               <div className = {classes.semicircle}></div>
                <Container className = {classes.finalcontainer}>
                <Typography className = {classes.title5}>Explore the ever-evolving landscape</Typography>
                <Button className= {classes.buttons}>Explore</Button>
                </Container>
      
            </Container>
    
            

         
    <div className = {classes.filler3}></div>
              <div className = {classes.footer}>   <Footer className = {classes.footer} ></Footer></div>
         
           
            
           
          </div>
          
        
          
         
                
           </div>
           
       
        
        
    )
}