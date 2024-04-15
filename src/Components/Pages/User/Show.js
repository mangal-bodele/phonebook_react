import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PencilSquare, Trash } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Show() {
  const [users, setUser] = useState([])

  async function fetchdata(){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)

  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='col-10 m-auto'>
      <table className='show-table col-10 m-auto'>
        <thead>
            <tr className='bg-dark text-white'>
              <th>phone</th>
              <th>person</th>
              <th>city</th>
              <th>action</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map((obj)=>{
              return(
                <tr>
                  <td>{ obj.phone }</td>
                  <td>{ obj.name }</td>
                  <td>{ obj.city }</td>
                  <td>
                      <NavLink to={`/Update/${obj.id}`}><button className='btn btn-primary'><PencilSquare/>Update</button></NavLink>
                      <NavLink to={`/Delete/${obj.id}`}><button className='btn btn-warning'><Trash/>Delete</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Show