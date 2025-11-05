import React from 'react'
import Slider1 from '../../assets/Images/ProductSlider/Slider1.jpg'
export default function ProductItem(props) {
  return (
   <>
     <div className='product-item'>
       <img className='h-[39px]' src={props.img} alt=""/>
     </div>
   </>
  )
}
