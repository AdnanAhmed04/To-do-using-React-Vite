import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Input_feilds from "./componets/Inputs";
import Heading from "./componets/Heading";
import Default from "./componets/default";
import Default1 from './default1';

function App() {

  return <center className='to-do'>
    <Default1 />

    <div className='bg'>

      <Heading />
      <Input_feilds />



    </div>
  </center>


}

export default App
