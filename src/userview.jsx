import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
function Userview(){
     const para=useParams()
     console.log(para)
     //search params
     const[searchparams,setsearchparams]=useSearchParams()
     console.log(...searchparams)
     const[userdata,setuser]=useState({})
     useEffect(()=>{
        loaduser()
     },[])
     let loaduser=async()=>{
        try{
        
         let user=    await axios.get(`https://6371f387025414c6370204ec.mockapi.io/add/users/${para.id}`)
           setuser(user.data)
        }catch(error){

        }
     }
    return(
        <>
        <h1>{userdata.name}</h1>
        <h1>{userdata.position}</h1>
        <h1>{userdata.office}</h1>
        <h1>{userdata.age}</h1>
        <h1>{userdata.startdate}</h1>
        <h1>{userdata.salary}</h1>
        </>

    )
}
export default Userview