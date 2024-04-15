import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './User.css'

function Add() {

  const {register, handleSubmit} = useForm()

  const navi = useNavigate()

  function SaveData(data){
    axios.post('http://localhost:5000/users',data)
    navi('/Show')
  }
  return (
    <div className='add-form col-5 p-3 mt-5'>
      <center><h1>PhoneBook</h1></center>
      <form onSubmit={handleSubmit(SaveData)}>
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

export default Add