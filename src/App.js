import { useState } from 'react'
import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView  from './components/filesView/FilesView'
import SideIcons from  './components/sideicons'
import {auth, provider} from './firebase'

import GDriverLogo from './media/google-drive-logo.png'

function App() {
  const [user, setUer] = useState()
  
  const handleLogin=()=>{
    if(!user){
      auth.signInWithPopup(provider).then((reuslt =>{
        setUer(reuslt.user)
      }))
    }
  }
  
  
  return (
  //authentication
    
     <div className="App">
       {
      user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>  
        </>
      ) : (
        <div className="app__login">
          <img src={GDriverLogo} alt="DriverLogo"/>
          <button onClick={handleLogin}>Log in To Google Driver </button>
        </div>
      )
    }
     
      
    </div>
  );
}

export default App;
