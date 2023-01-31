import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <h3>Categories</h3>
        <ul className='list'>
            <li><NavLink to='/' className="activee"><i className="fa-solid fa-chevron-right"></i> <span>All</span> </NavLink></li>
            <li><NavLink to='/'><i className="fa-solid fa-chevron-right"></i> <span>Laptop</span> </NavLink></li>
            <li><NavLink to='/'><i className="fa-solid fa-chevron-right"></i> <span>Laptop</span> </NavLink></li>
            <li><NavLink to='/'><i className="fa-solid fa-chevron-right"></i> <span>Laptop</span> </NavLink></li>
            <li><NavLink to='/'><i className="fa-solid fa-chevron-right"></i> <span>Laptop</span> </NavLink></li>
            <li><NavLink to='/'><i className="fa-solid fa-chevron-right"></i> <span>Laptop</span> </NavLink></li>
        </ul>
        <h3 className='mt-3'>Brand</h3>
        {/* <input type="text" className='w-100' /> */}
        <select className='w-100 p-2'>
            <option value="All">All</option>
            <option value="Sony">Sony</option>
            <option value="Samsung">Samsung</option>
        </select>
        <h3 className='mt-3'>Price</h3>
        <ProgressBar now={30}  />

        <Button type='button' variant='primary' className='px-5 mt-3'>Clear</Button>
    </div>
  )
}

export default Sidebar