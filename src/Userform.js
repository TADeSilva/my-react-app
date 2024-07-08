import React, { useEffect, useState } from 'react'
import {Grid, Input, Typography,Button} from "@mui/material";

function Userform({addUser,updateUser,submitted,data,isEdit}) {
  
    const[id,setId] = useState(0);
    const[name,setName] = useState('');

    useEffect(()=>{
        if(!submitted){
            setId(0);
            setName('');
        }
    },[submitted])

    useEffect(() =>{
        if(data && data.id && data.id !== 0){
            setId(data.id);
            setName(data.name);
        }
    },[data])

  return (
    <Grid
     container
     spacing={2}
     sx={{
        backgroundColor: '#ffffff',
        marginBottom:'30px',
        display:'block',
     }}
    >
        <Grid item xs={20}>

            <Typography component={'h1'} sx={{color: '#000000'}}>User form</Typography>

        </Grid>

        <Grid xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
            component={'label'}
            htmlFor='id'
            sx={{
                color:'#000000',
                marginRight: '20px',
                fontSize:'16px',
                width:'100px',
                display:'block',
                textAlign: 'center',
            
            }}
            >
             ID
                
            </Typography>
            <Input
             type="number"
             id='id'
             name='id'
             sx={{
                width:'400px'
             }}
             value={id}
             onChange={e => setId(e.target.value)}

            />
        </Grid>

        <Grid xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
            component={'label'}
            htmlFor='id'
            sx={{
                color:'#000000',
                marginRight: '20px',
                fontSize:'16px',
                width:'100px',
                display:'block',
                textAlign: 'center',
            }}
            >
                Name
                
            </Typography>
            <Input
             type="text"
             id='name'
             name='name'
             sx={{
                width:'400px'
             }}
             value={name}
             onChange={e => setName(e.target.value)}

            />
        </Grid>
        <Button sx={{
             margin:'auto',
            marginBottom:'20px',
            backgroundColor:'#00c6e6',
            color:'#000000',
            marginLeft:'15px',
            marginRight:'20px',
            textAlign: 'right'

        }}
        onClick={() => isEdit? updateUser({id:id, name:name}): addUser({id:id, name:name})}
        >
            {
                isEdit ? 'Update': 'Add'
            }
        </Button>

    </Grid>
  )
}

export default Userform