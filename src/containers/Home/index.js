import React, {useState, useRef,} from 'react'
import axios from 'axios'

import People from "../../assets/people.svg";
import Arrow from '../../assets/arrow.svg';

 import {
   Container,
   H1,
   Image,
   ContainerItens,
   InputLabel,
   Input,
   Button,
   
 } from "./style";


//JSX
// Reacts HOOKS
function App() {
 
 // Primeiro react HOOKS  useState
  const [ users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  //ESTADO → Variavel → ele é imutavel

  // Segundo react HOOKS useRef
   async function addNewUser() {
    
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    console.log(newUser);

     setUsers([...users, newUser]);
   }


return(
  <Container>
    <Image alt='logo-imagem' src={People}/>
    <ContainerItens>
      <H1>Olá!</H1>
      
      
      <InputLabel >Nome</InputLabel>
      <Input ref={inputName} placeholder='Nome'></Input>

      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder='Idade'></Input>

      <Button onClick={addNewUser}>
        Cadastrar <img alt='seta' src={Arrow} />
      </Button>

      

    </ContainerItens>
    
  </Container>
)
};
export  default App
