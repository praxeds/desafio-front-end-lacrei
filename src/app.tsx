import { useState } from 'react';
import Home from './components/home/home';
import User from './components/usuario/usuario';
import Profissional from './components/profissional/profissional';

export default function App() {
  const [state, setstate] = useState("firstSection")
  return (
    <div>
      {state === "firstSection" && < Home />}
      {state === "secondSection" && < User />}
      {state === "thirdSection" && < Profissional />}
    </div>
  )
}