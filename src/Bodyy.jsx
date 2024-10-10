import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'
import { FaArrowRight, FaHeart, FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { IconContext } from 'react-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Bodyy() {

    let api

    const [cat,satcat]=useState([])
    // console.log(cat)
    let showCat=()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then((ress)=>{
            satcat(ress.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // 
    const[prod,satprod]=useState([])
    let showprod=(slg="")=>{
        if(slg!=""){
            api=`https://dummyjson.com/products/category/${slg}`
           
       }
       else{
           // api="keshave"
          api='https://dummyjson.com/products?limit=100'
       }    
       
        axios.get(api)
        .then((ress)=>{
            satprod(ress.data.products)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let categoryy=(ress)=>{
        let slg=ress.slug
        // console.log(slg)
       

        // console.log(slg)
        showprod(slg)
        // axios.get(`https://dummyjson.com/products/category/${ress.slug}`)
    }
    
    useEffect(()=>{
        showCat()
        showprod()
    },[])
    console.log(prod)

  return (
    <div>

        <div className='max-w-[1600px] mt-2 flex mx-auto'>
            <div className=' md:w-[30%] lg:w-[20%] mx-2 md:block hidden '>
                <h1 className='md:text-[25px] lg:text-[35px] mb-2 font-bold text-center dark:bg-gray-700 dark:text-white'>CATEGORIES</h1>
                <div class="w-[100%] text-gray-900 bg-white  dark:bg-white-700  dark:text-black">

                    {cat.length>0 ? 
                    
                    cat.map((v,i)=>{
                        return(
                            <button type="button" onClick={()=>categoryy(v)} class="relative inline-flex items-center w-full px-4 py-2 text-[20px] font-medium  border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-white-500 dark:focus:text-black">      
                                {v.name}                       
                            </button>
                        )
                    })
                    :
                     <h1 className='text-2xl text-center'>NO DATA FOUND</h1>}
                </div>
            </div>
            
            <div className='md:w-[70%] lg:w-[80%] w-[100%]'>
            <h1 className='text-[35px] font-bold mb-2 text-center '>PRODUCTS</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-items-center'>

                    {prod.length>0?
                    prod.map((v,i)=>{
                        return(
                            <Link to={`/pdetails/${v.id}`}> 
                                <div className=" w-[100%] bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src={v.thumbnail} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.title}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">PRICE:- ${v.price}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">RATING:- {v.rating}</p>
                            <div className=' flex justify-between gap-[10px] items-center'>
                                <IconContext.Provider value={{ color: "inherit", className: "global-class-name" }}>
                                <Link to={`/pdetails/${v.id}`} class=" w-[120px] flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                                    WISHLIST &nbsp; <FaHeart />
                                </Link>

                                
                                <Link to={`/pdetails/${v.id}`} href="#" class="w-[60%] flex justify-around items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                
                                    Get More Details
                                    
                                </Link>
                                
                               
                                </IconContext.Provider>
                            </div>
                        </div>
                                 </div>
                            </Link>
                        )
                    })
                    :
                    <h1 className='text-2xl text-center'>NO DATA FOUND</h1>}
                </div>
            </div>
        </div>

    </div>
  )
}
