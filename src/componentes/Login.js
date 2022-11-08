
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form'




const Login = () =>{
  
    
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm() 
    const customSubmit = (data) => {
        console.log(data)
        // alert("¡Validación exitosa!")
    }
    
   const registrar = () => {
    console.log('hola')
   }
   

    return(
        <div className="container position-relative w-50 p-3 mt-5 rounded px-5 bg-light">
            <h3 className="container rounded bg-light text-center"> Inicio de sesion</h3>
            <form   className="px-4 py-3 bg-primary rounded">
                    <label> Nombre</label>
                <div className="form-control">
                    <input {...register('name', {required : true} )}  type="text" className="form-control"  />
                </div>
                <label> Contrase;a</label>
                <div className="form-control">
                    <input {...register('password', {required : true})}  type="password" className="form-control" />

                </div>
                
                <ul className="list-group list-group-horizontal">
                    <li onClick={handleSubmit(customSubmit)} className="list-group-item2 px-2  mt-3"> 
                        <Link to={"./home"}>
                            <Button variant="secondary">Login</Button>                 
                            
                        </Link>                
                    </li>

                    <li  className="list-group-item2 px-2 mt-3">                 
                        <Link to={"./register"}>
                            <Button variant="secondary">Registrar</Button>   

                        </Link>                
                    </li>
                    
                </ul>  
            </form>
                
            

        </div>
        
    )


}

export default Login;