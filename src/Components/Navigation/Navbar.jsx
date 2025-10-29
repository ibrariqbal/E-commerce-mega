import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoRocketSharp } from "react-icons/io5";
import Categorypannel from '../CategoryPannel/Categorypannel';

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <nav className='py-2'>
        <div className='container flex items-center justify-end gap-8'>
          <div className='col1 w-[20%]'>
            <Button className='!text-black gap-2 w-full' onClick={toggleDrawer} >
              <RiMenu2Fill className='text-[18px]' />
              Shop By Categories
              <LiaAngleDownSolid className='text-[14px] font-bold ml-auto' />
            </Button>
          </div>

          <div className='col2 w-[60%]'>
            <ul className='flex gap-5 items-center'>
              <li><Link to='/home'><Button className='link transition font-[500]'>Home</Button></Link></li>
              <li><Link to='/fashion'><Button className='link transition font-[500]'>Fashion</Button></Link></li>
              <li><Link to='/electronics'><Button className='link transition font-[500]'>Electronics</Button></Link></li>
              <li><Link to='/bags'><Button className='link transition font-[500]'>Bags</Button></Link></li>
              <li><Link to='/footwear'><Button className='link transition font-[500]'>Footwear</Button></Link></li>
              <li><Link to='/groceries'><Button className='link transition font-[500]'>Groceries</Button></Link></li>
              <li><Link to='/beauty'><Button className='link transition font-[500]'>Beauty</Button></Link></li>
              <li><Link to='/wellness'><Button className='link transition font-[500]'>Wellness</Button></Link></li>
              <li><Link to='/jewelery'><Button className='link transition font-[500]'>Jewelery</Button></Link></li>
            </ul>
          </div>

          <div className='col3 w-[20%]'>
            <p className='text-[14px] font-[500] flex items-center gap-3 mt-0 mb-0'>
              <IoRocketSharp className='text-[18px]' />Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <Categorypannel isopen={isopen} toggleDrawer={toggleDrawer} />
    </>
  );
}
