import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './common/Header'
import { cartContext } from './context/Maincontext'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
    let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)
    // console.log(cartt.length)
  return (
    <div>
        <Header/>
        <div class="max-w-[1600px] mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-bold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">{cartt.length} Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>

              {cartt.length > 0 ?

                cartt.map((v,i)=>{
                  // console.log(i)
                  return(
                    <Cartbody vd={v} idd={i}/>
                  )
                })

              :<h1 className='text-[45px] text-center'>No Data Found !!!</h1>}
              
               
              

              <Link to={'/'} class="flex font-semibold text-indigo-600 text-sm mt-10">
            
                <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10 bg-gray-100">
              <h1 class="font-bold text-2xl border-b pb-8">Order Summary</h1>
                <Total/>
            </div>

          </div>
        </div>
    </div>
  )
}

function Cartbody({vd,idd}){
  // console.log(vd.id)
  let pricee =vd.Uprice
  let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)
  // console.log(vd)
  let deletework=(delid)=>{
    let updatecart=cartt.filter((v,i)=>i!=delid)
            setcartt(updatecart)
            toast.error("Item Removed")
  }

  const [count,setcount]=useState(1)
 

 
  // let prices = Number((pricee*count).toFixed(0))
  


  // console.log(cartt)
  let handelinput=(e)=>{
    let newcount=e.target.value

    let oldData=[...cartt]
    oldData[idd].Uqty=newcount
    setcartt(oldData)

    // console.log(oldData[idd].Uqty)
    
  }

  // 



  
  
// 
// let handelprice=(p)=>{
//   settotalcount((Number(totalcount )) + )
//   console.log(p.prices)
// }
//  console.log(totalcount)

  return(   
    <>
        
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <ToastContainer/>
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" src={vd.Uimg} alt=""/>
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{vd.Utitle}</span>
                <span class="text-red-500 text-xs">{vd.Ubrand}</span>
                <a href="#" onClick={()=>deletework(idd)} class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              

              <input onChange={handelinput}  class="mx-2 border text-center w-12" type="number" min={1}  defaultValue={vd.Uqty}/>

              
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">${(vd.Uprice)}</span>
            <span class="text-center w-1/5 font-semibold text-sm">${((vd.Uprice)*(vd.Uqty)).toFixed(2)}</span>
          </div>

    </>
  )

}


function Total(){

  let {wishh,setwishh,cartt,setcartt}=useContext(cartContext)

  const [amt,setamt]=useState([])
  

  let totalamt=()=>{
    let totall=0;
      cartt.forEach((item,i) => {
        totall+=((item.Uprice)*(item.Uqty))        
      })
      setamt(totall)
  }
  useEffect(()=>{
    totalamt()
  },[cartt])

  const [promo,setpromo]=useState([])
  console.log(promo)

  let handelform=(e)=>{
    e.preventDefault()
    // console.log()
    let promocode=e.target[0].value
    if(promocode=="keshave"){
    setpromo(promocode)
    }
    else{
      alert("Invalid PromoCode")
    }

    e.target[0].value=""
  }

  // console.log(amt)

  // 
  // let promo=(e)=>{
  //   console.log(e)
  //   if(e){

  //   }
  // }
    return(
      <>
       <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">Total-Items {cartt.length}</span>
                <span class="font-semibold text-sm">Total-Price {amt}</span>
              </div>
              <div>
              <div class="flex justify-between mt-10 mb-5">
                <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping Charges:</label>
                <span class="font-semibold text-sm"> ${(amt*0.1).toFixed(2)}</span>
                </div>
                <select class="block p-2 text-gray-600 w-full text-sm">
                  {amt<500?
                    <option>Standard shipping charges - 10% </option>
                  :
                  <option>Standard shipping charges - Free</option>
                  }
                </select>
              </div>
              <form onSubmit={handelform}>
              {/* <div class="py-10"> */}
                <label for="promo" class="font-semibold inline-block mb-3 mt-10 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" name='promo' placeholder="Enter your code" class="p-2 mb-10 text-sm w-full"/>
              {/* </div> */}
              <button type='submit'  class="bg-red-500 font-bold hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
              </form>
              <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$
                    {/* {if({promo=="keshave"}){
                      amt<500?
                       (( amt+(amt*0.1)-(amt*0.2)))
                        :
                        (amt-(amt*0.2))
                    }
                    else{
                           amt<500?
                           (( amt+(amt*0.1)))
                            :
                            (amt)
                    }} */}
                    {amt<500 && promo!=="keshave" ?
                    (( amt+(amt*0.1)))
                     :
                     (amt)-(amt*0.2)}
                    </span>
                </div>
                <button class="bg-indigo-500 font-bold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
              </div>
    </>
    )
}