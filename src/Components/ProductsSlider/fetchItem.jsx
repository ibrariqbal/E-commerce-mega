import React from 'react'
import { ImagesItems } from './Itemsdata'

export default function FetchItem() {
  return (
   <>
   {
    ImagesItems.map((item)=>{
        return(
            <img src={item.image} alt=""/>
        )
    })
   }
   
   </>
  )
}