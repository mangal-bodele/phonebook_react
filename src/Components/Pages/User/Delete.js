import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
  const [user, setUser] = useState({})
  const {userId} = useParams()
  const navi = useNavigate()

  async function fetchdata(){
    const result = await axios.get(`http://localhost:5000/users/${userId}`)
    setUser(result.data)
  }
  function deleteUser(){
    axios.delete(`http://localhost:5000/users/${userId}`)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  
  return (
    <div className='border border-3 col-6 m-auto p-3 mt-5'>
      <center><h1>DELETE CONFIRMATION</h1>
      <div>
      <h3>do you really want to delete <span style={{'color':'red'}}>{user.phone}-{user.name}-{user.city}</span>record?</h3>
      <button onClick={()=>{deleteUser()}}>YES</button>&nbsp;
      <NavLink to='/Show'><button>NO</button></NavLink>
    </div>
    </center>
    </div>
  )
}

export default Delete