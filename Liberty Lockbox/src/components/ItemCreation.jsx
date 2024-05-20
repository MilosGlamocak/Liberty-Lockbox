import { Container, CircularProgress } from '@mui/material'
import React from 'react'
import '../styles/ItemCreation.css'
import { useState } from 'react'
import { createNewItem } from '../../lib/appwrite'
import CustomButton from '../components/CustomButton'
import { useAuth } from '../store'
import CustomInput from './CustomInput'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function ItemCreation() {

  const [loading, setLoading] = useState(false)

  const {userId} = useAuth((state) => state)

    let [itemCred, setItemCred] = useState({
        name: '',
        image: '',
        price: '',
        chamber: '',
        quantity: '',
        category: 'Rifles'
      })

    const handleUpdateItemCred = (e) => {
        const { id, value } = e.target;
        setItemCred({...itemCred, [id]: value}); 
    }

    const handleCreateNewItem = async () => {
      setLoading(true)
        createNewItem(
          itemCred.name,
          itemCred.image,
          parseFloat(itemCred.price),
          itemCred.chamber,
          parseInt(itemCred.quantity),
          userId,
          itemCred.category
        ).catch((error) => console.error(error)).finally(() => setLoading(false))
      }

      const handleCategoryChange = (e) => {
        setItemCred({ ...itemCred, category: e.target.value });
        console.log(itemCred)
    };

      const inputFields = [
        {type: 'text', id: 'name', placeholder: 'name'},
        {type: 'url', id: 'image', placeholder: 'image'},
        {type: 'number', id: 'price', placeholder: 'price'},
        {type: 'text', id: 'chamber', placeholder: 'chamber'},
        {type: 'number', id: 'quantity', placeholder: 'quantity'},
      ]

      const categories = ['Rifles', 'Shotguns', 'Handguns', 'Submachine guns', 'Machine guns', 'Explosive devices'];


  return (
    <Container className='itemCreationCont'>
        <h2>Create new item</h2>
        {inputFields.map((item) => {
            return  <CustomInput type={item.type} id={item.id} placeholder={item.placeholder} key={item.id} onChange={handleUpdateItemCred}/>
               
        })}
      <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth variant='filled' sx={{
        backgroundColor: '#141414',
        border: '1px solid #343434',
        borderRadius: '10px',
        overflow: 'hidden',
    }}>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Category</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={itemCred.category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{
                backgroundColor: '#141414',
                color: 'white',
                "&:hover": {
                    backgroundColor: '#343434',
                },
                '& .MuiSelect-icon': {
                    color: 'white',
                },
                '& .MuiSelect-root': {
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,  
                },
                '& .MuiSelect-select:focus': {
                    backgroundColor: '#141414',
                },
            }}
            MenuProps={{
              sx: {
                "&& .Mui-selected": {
                  backgroundColor: "#343434",
                }, 
                '&& .Mui-hover': {
                  backgroundColor: '#343434'
                }
              }
            }}
        >
            {categories.map((category) => (
                <MenuItem
                    value={category}
                    key={category}
                    sx={{
                        backgroundColor: '#141414',
                        '&:hover': {
                            backgroundColor: '#343434',
                        },
                        color: 'white',
                    }}
                >
                    {category}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
</Box>


        <CustomButton onClick={handleCreateNewItem} text={loading ? <CircularProgress style={{color: 'white', scale: '0.5'}} /> : 'Publish Item'}/>
    </Container>
  )
}

export default ItemCreation