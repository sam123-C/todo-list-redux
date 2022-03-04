import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import LoginPage from './LoginPage'
import './Login.css'

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <LoginPage/>
      <motion.h1>
        Todo App
      </motion.h1>
      <div>
        <Todos />
        <DisplayTodos />
       </div>

<div  >©copyright @sameer birje</div>
    </div>
  );
}

export default App;
