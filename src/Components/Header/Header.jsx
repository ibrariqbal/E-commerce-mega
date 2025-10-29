import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Images/logo.jpg'
import '../../index.css'
import Search from '../Search/Search'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navbar from '../Navigation/Navbar'



 export default function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
 
  return (
    <>
         <header className='bg-white'>
             <div className='top-strip py-2 border-t-1 border-t-[1px] border-gray-250 border-b-[1px]'>
                <div className='container' >
                    <div className='flex items-center justify-between '>
                           <div className='col1 w-[50%]'>
                              <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, listed time only </p>
                           </div>

                           <div className='col2 w-[50%] flex items-center justify-end '>
                              <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                  <Link to='/help-center' className='link text-[13px] font-[500] transition'>Help Center</Link>
                                </li>
                                <li className='list-none'>
                                  <Link to='/order-tracking' className='link text-[13px] font-[500] transition'>Order Tracking</Link>
                                </li>
                              </ul>
                            </div>
                    </div>
                </div>
             </div>
     
         <div class="header py-4 border-gray-250 border-b-[1px] ">

             <div className="container flex justify-between items-center ">
              <div className='col1 w-[25%]'>
                <Link to='/'><img src={Logo} alt=""/></Link>
              </div>
              <div className='col1 w-[45%]'>
                <Search/>
              </div>

              <div className='col3 w-[30%] flex items-center pl-5'>
                <ul className='flex items-center justify-end gap-3 w-full'>
                     <li className='list-none'>
                       <Link className="link transition text-[15px] font-[500] " to='/login'>Login</Link> | &nbsp;
                       <Link className="link transition text-[15px] font-[500] " to='/register'>Register</Link> </li>
                          <li>
                          <Tooltip title="Compare">
                          <IconButton aria-label="cart">
                         <StyledBadge badgeContent={4} color="secondary">
                         <IoMdGitCompare />
                         </StyledBadge>
                          </IconButton>
                          </Tooltip>
                    </li>
                          <li>
                            <Tooltip title="Wishlist">
                          <IconButton aria-label="cart">
                         <StyledBadge badgeContent={4} color="secondary">
                         <MdShoppingCart />
                         </StyledBadge>
                          </IconButton>
                          </Tooltip>
                    </li>
                          <li>
                           <Tooltip title="Cart"> 
                          <IconButton aria-label="cart">
                         <StyledBadge badgeContent={4} color="secondary">
                         <FaRegHeart />
                         </StyledBadge>
                         </IconButton>
                         </Tooltip> 
                    </li>
                </ul> 
              </div>
             </div>
         </div>
         <Navbar/>
   </header>
    </>
  )
}
