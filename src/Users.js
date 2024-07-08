import React, { useEffect, useState } from 'react'
import Userform from './Userform'
import UsersTable from './UsersTable'
import { Box } from '@mui/material'
import Axios from 'axios';


function Users() {

  const [users,setUsers] = useState([]);
  const [submitted,setsubmitted] = useState(false);
  const[isEdit,setIsedit] = useState(false);
  const [selectedUser,setselectedUser] = useState({});

  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = () => {

    Axios.get('http://localhost:3001/api/users')
    .then(response => {
      setUsers(response.data?.response||[]);
    })
    .catch(error => {
      console.error("Axios error :",error);
    });

  }

  const addUser = (data) => {
    setsubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:3001/api/createUser', payload)
    .then(() => {
       getUsers();
       setsubmitted(false);
       setIsedit(false);
    })
    .catch(error => {
      console.error("Axios error :",error);
    });
  }

  const updateUser = (data) => {
    setsubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:3001/api/updateUser',payload)
    .then(() => {
      getUsers();
      setsubmitted(false);
      setIsedit(false);
   })
   .catch(error => {
     console.error("Axios error :",error);
   });
  }

  const deleteUser = (data) =>{
    
    Axios.post('http://localhost:3001/api/deleteUser',data)
    .then(() => {
      getUsers();
      
      
   })
   .catch(error => {
     console.error("Axios error :",error);
   });

  }


  return (
    <Box
    sx={{
      margin:'auto',
    }} 
    >
        <Userform
        addUser = {addUser}
        updateUser = {updateUser}
        submitted = {submitted}
        data={selectedUser}
        isEdit = {isEdit}
        />
        <UsersTable 
        rows={users}
        selectedUser = {data => {
           setselectedUser(data);
           setIsedit(true);
        }}
        deleteUser = {data => window.confirm('Are you sure?') && deleteUser(data)}
        />

    </Box>
    
  )
}

export default Users