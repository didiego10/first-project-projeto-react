import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

 import {
   Container,
   H1,
   Image,
   ContainerItens,
   Button,
   User
 } from "./style";


//JSX
// Reacts HOOKS
function Users() {
 
 // Primeiro react HOOKS  useState
  const [ users, setUsers] = useState([])

  useEffect( () =>{

     async function fetchUsers(){
       const { data: newUsers } =  await axios.get("http://localhost:3001/users");
      
       setUsers(newUsers)
     }

     fetchUsers()
    },[])


  function deleteUser(userId) {
    const newUsa = users.filter( user => user.id !== userId)
    setUsers(newUsa)
  }


return(
  <Container>
    <Image alt='logo-imagem' src={Avatar}/>
    <ContainerItens>
      <H1>Usuarios!</H1>

      <ul>
        {users.map( user => (
          <User key={user.id}> 
            <p>{user.name}</p> - <p>{user.age}</p>
            <button onClick={() => deleteUser (user.id)}> 
              <img src={Trash} alt='trash'/> 
            </button>
          </User>
        
        
        ))}
         <Button >
        <img alt='seta' src={Arrow} /> Voltar
      </Button>
        
      </ul>

    </ContainerItens>
    
  </Container>
)
};
export  default Users
