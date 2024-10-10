import React, { useContext, useEffect } from 'react'
import Header from './common/Header'
import { Link } from 'react-router-dom'
import { FaHeart, FaTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { IoBagHandle } from 'react-icons/io5'
import { cartContext } from './context/Maincontext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function WishList() {
    let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)
    // console.log(wishh)
    // toast("Item Added Successfully")

  return (
    <div>
        <Header/>
        <div className='max-w-[1600px]'>
                <h1 className='text-[55px] font-bold my-5 text-center '>Wishlist</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center'>
            
                {wishh.length>0 ? 
        wishh.map((v,i)=>{
            return(
                <WishData vd={v} idd={i}/>
            )
        })
       
        :
        <h1 className='text-[45px] text-center'>No Data Found !!!</h1>}

                </div>
            </div>
        
        
    </div>
  )
}

function WishData({vd,idd}){
    let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)
    
    // 
    let deletework=(delid)=>{
        toast.success("Item Deleted")
        // console.log(delid)
            let updatecart=wishh.filter((v,i)=>i!=delid)
           
            setwishh(updatecart)
            
            
    }
    // deletework()
    // 
    let carttwork=(cart, delid)=>{
        toast.success("Item Added To Cart")
        // console.log(delid)
        let updatecart=wishh.filter((v,i)=>i!=delid)
        setwishh(updatecart)
        setcartt([...cartt,cart])

    }

    // useEffect(()=>{
       
    //     deletework()

    // },[])
    return(
        <>
            
            <div className=" w-[300px] bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ToastContainer />

                            <a href="#">
                                <img className="rounded-t-lg w-full" src={vd.Uimg} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{vd.Utitle}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">PRICE:- ${(vd.Uprice)}</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">RATING:- {vd.Urating}</p>
                                <div className=' flex justify-between gap-[10px] items-center'>
                                    <IconContext.Provider value={{ color: "inherit", className: "global-class-name" }}>
                                    <Link to={''} onClick={()=>carttwork(vd,idd)} class=" w-[50%] flex items-center px-3 py-2 text-[13px] font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                                    Go To Bag &nbsp;<IoBagHandle />
                                    </Link>

                                    
                                    <Link to={''} onClick={()=>deletework(idd)} class="w-[50%] flex justify-around items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    
                                        Remove &nbsp; <FaTrashAlt />
                                        
                                    </Link>
                                    
                                
                                    </IconContext.Provider>
                                </div>
                            </div>
                            
            </div>
            
        </>
    )
}
