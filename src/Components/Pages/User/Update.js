import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

  const{ register, handleSubmit, setValue} = useForm()
  const {userId} = useParams()
  const navi = useNavigate()

  async function fetchdata(){
    const result = await axios.get(`http://localhost:5000/users/${userId}`)
    setValue('phone', result.data.phone)
    setValue('name', result.data.name)
    setValue('city', result.data.city)
  }
  function SaveData(data){
    axios.put(`http://localhost:5000/users/${userId}`,data)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='add-form col-5 p-3 mt-5'>
      <center><h1>PhoneBook</h1></center>
      <form onSubmit={handleSubmit(SaveData)} >
        <label htmlFor='n'>Enter contact number:</label>
        <input type='number' id='n' {...register('phone')}/>
        <br /><br />
        <label htmlFor='p'>Enter person number:</label>
        <input type='text' id='p' {...register('name')}/>
        <br /><br />
        <label htmlFor='c'>Enter city:</label>
        <input type='text' id='c' {...register('city')}/>
        <br /><br />
        <input type='submit' value='save' className='btn btn-success col-4  btn-lg'/>
        <input type='reset' value='cancel' className='btn btn-danger col-4 btn-lg float-end'/>
      </form>
    </div>
  )
}

export default Update