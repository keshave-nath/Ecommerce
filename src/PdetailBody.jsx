import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { cartContext } from './context/Maincontext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function PdetailBody() {
    let param = useParams()
    let idd= param.id

    // console.log(param)
    const [sing,setsingprod]=useState([])
    const [smallimg,setsmallimg]=useState([])
    const [bigimg,setbigimg]=useState([])
    const [change,setchange]=useState([]) 
    // console.log(sing)
    let singleprod=()=>{
        axios.get(`https://dummyjson.com/products/${idd}`)
        .then((ress)=>{
            setsingprod(ress.data)
            setsmallimg(ress.data.images)
            setbigimg(ress.data.thumbnail)
            setchange({
              Utitle:ress.data.title,
              Uprice:ress.data.price,
              Urating:ress.data.rating,
              Uimg:ress.data.thumbnail,
              Uqty:1,
              Ubrand:ress.data.brand,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // 

    

    // 

    let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)
    let wishwork=()=>{
      toast.success("Item added to wishlist")
      setwishh([...wishh,change])
      
    }
    // console.log(wishh)

    useEffect(()=>{
        singleprod()
    },[])
  return (
    
        <div >
          <ToastContainer />
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
    <div class="flex flex-col md:flex-row -mx-4">
      <div class="md:flex-1 px-4">
        <div className=''>
          <div class=" md:h-80 rounded-lg bg-white-100 mb-4">
            <div x-show="image === 1" class="h-80 md:h-[400px] rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <img src={bigimg} alt="" className='w-full h-full' />
            </div>

            <div className='flex justify-between mt-[20px] gap-[10px]'>
                {smallimg.map((v,i)=>{
                    return(
                        <div onMouseOver={()=>setbigimg(v)} class=" h-[150px] w-[150px]  rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <img src={v} className='w-full h-full'/>
                      </div>
                    )
                })}
           
            </div>
          </div>

          <div class="flex mx-2 mb-4">
            <template x-for="i in 4">
              <div class="flex-1 px-2">
                <button  class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                  <span x-text="i" class="text-2xl"></span>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="md:flex-1 px-4">
        <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{sing.title}</h2>
        <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">{sing.brand}</a></p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="text-indigo-400 mr-1 mt-1">$</span>
              <span class="font-bold text-indigo-600 text-3xl">{sing.price}</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-green-500 text-xl font-semibold">Save {sing.discountPercentage}%</p>
            <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p class="text-gray-500">{sing.description}</p>

        <div class="flex py-4 space-x-4">
          <div class="relative">
            <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>

          <Link to={''}>
          <button type="button" onClick={wishwork} class="h-14 px-6 py-2 font-semibold flex items-center rounded-xl bg-pink-600 hover:bg-pink-500 text-white">
            Add to Wishlist &nbsp; <FaHeart/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
        
    
  )
}
