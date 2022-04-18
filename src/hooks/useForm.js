import { useState } from "react"

const useForm =()=>{

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    

   
      const emailChange = e =>{
    
        setEmail(e.target.value)
    
      }
      const passChange = e =>{
        setPassword(e.target.value)
      }
     


      return [
          email ,
          password,
        
          emailChange,
          passChange,
         
      ]

}
export default useForm;