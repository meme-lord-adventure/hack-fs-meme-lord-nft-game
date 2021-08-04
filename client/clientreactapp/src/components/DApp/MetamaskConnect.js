// import logo from './logo.svg'
// import './App.css'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider';
import { useEffect, useState } from 'react'
import { Navbar ,Container,Row,Col,Button,Alert } from 'react-bootstrap'


    

 function MetamaskConnect() {

    const ConnectWallet = async () => {

        console.log("Try Connect");
    
        try {
          await window.ethereum.enable();
    
          const id = await window.ethereum.request({ method: 'eth_chainId' })
          let  setCurrentChainID= () => parseInt(id, 16)
    
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          setIsLogged(true)
          let setCurrentAccount = accounts[0]
          return accounts[0]
    
        } catch(err) {
            if (err.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.
              console.log('Please connect to MetaMask.')
              setMessage(messages =>[...messages, {head : "User Rejected Request", body: 'Please connect to MetaMask.', variant: 'info'}])
    
            } else if(err.code === -32002) {
              console.log('Please unlock MetaMask.')
              setMessage(messages =>[...messages, {head : "User Request Pending", body: 'Please unlock MetaMask and try agin.', variant: 'info'}])
            } else {
              console.error(err);
              setMessage(messages =>[...messages, {head : "Error", body: err.message, variant: 'info'}])
            }
    
        }
        
      }
    const SignIn = async () => {
        //Detect Provider
        const provider = await detectEthereumProvider()
        const web3 = new Web3(provider)
  
        if(!provider) {
  
          setMessage(messages => [...messages, {head : "Wallet not found", body: `Please install MetaMask!`, variant: 'warning'}])
  
        } else {
  
          const address = await ConnectWallet()
          if (address)
            setMessage(messages =>[...messages, {head : "User Login", body: `addres: ${address}`, variant: 'success'}])
  
        }
        
    }
    
  const [isLogged, setIsLogged] = useState(false)

//   const SignIn = async () => {
//     setIsLogged(true)
//   }

  const SignOut = async () => {
    setIsLogged(false)
  }


  
  const [messages, setMessage] = useState([
    {head : "User Rejected Request", body: 'Please connect to MetaMask.', variant: 'info'},
    {head : "User Rejected Request", body: 'Please connect to MetaMask.', variant: 'info'}
  ])


  const Message = (props) => {

    const [show, setShow] = useState(true);

    const close = () => {
      setShow(false)
      setMessage(messages.filter((item, index) => index !== props.id))
    }

    if(show) {
      return (
        <Alert variant={props.variant ? props.variant : 'light'} onClose={close} dismissible>
          <Alert.Heading>{props.head}</Alert.Heading>
          <p>
            {props.body}
          </p>
        </Alert>
      )
    } else {
      return(<></>)
    }

    
  }
  
  return (
  <>
 
    
    <div>
      <Button onClick={SignIn} variant="primary">Connect</Button>{' '}
      <Button onClick={SignOut} style={{visibility: isLogged ? "visible" : "hidden"}} variant="danger">X</Button>
    </div>
  

    <div className="message-list" >
        {
          messages.map((item,i) => (
            <Message head={item.head} body={item.body} variant={item.variant} id={i} key={i} />
          ))
        }
    </div>

    
  </>
  );
}

export default MetamaskConnect;