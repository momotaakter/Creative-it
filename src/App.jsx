

import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Translate from './component/translate/Translate';


function App() {
  return (
<div>
 

  <Translate></Translate>
  <Navbar></Navbar>
  <Outlet></Outlet>
  {/*----<Left></Left>----*/}

</div>
  )
}

export default App
