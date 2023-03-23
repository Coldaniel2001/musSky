import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import Button from "../Button/Button";

const ChangePassword = () => {
    const {  inputChange, state } = useContext(UserContext)
    const [ password, setPassword] = useState({
        previousPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        setPassword({...password, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        console.log(inputChange)
        e.preventDefault()
        if((inputChange.password === password.previousPassword) && (password.newPassword === password.confirmPassword)){
            inputChange.password = password.confirmPassword
            inputChange.passwordrepeat = password.confirmPassword   
        }
        
        if((state.user.password === password.previousPassword) && (password.newPassword === password.confirmPassword)){
            state.user.password = password.confirmPassword   
        }

    }
    

  return (
    <div>
        <h2 className='text-white text-[2rem] font-extrabold'>CONFIGURACIÓN</h2>
        <p className='font-bold text-xl mt-5'>Contraseña</p>
        <p className='text-[#a1a1a1]'>Si cambias tu contraseña, tendrás que volver a iniciar sesión en otros dispositivos.</p>
        <form onSubmit={handleSubmit} className='flex gap-5 mt-5'>
            <div className='flex flex-col'>
                <label htmlFor="">Contraseña actual</label>
                <input className='rounded h-[2rem] w-[14rem] text-black' 
                type="password"
                name="previousPassword"
                value={password.previousPassword}
                onChange={handleInputChange}
                required
                 />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Nueva contraseña</label>
                <input className='rounded h-[2rem] w-[14rem] text-black' 
                type="password"
                name="newPassword"
                onChange={handleInputChange}
                required />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Confirma nueva contraseña</label>
                <input className='rounded h-[2rem] w-[14rem] text-black' 
                type="password"
                name="confirmPassword"
                onChange={handleInputChange}
                required />
            </div>
            <div className='flex items-end'>
                <Button value={'Actualizar contraseña'}
                types="submit"
                classButton={'bg-[#7C8BBF] h-[2rem] px-3 rounded'} />
            </div>
            
        </form>
        
    </div>
  )
}

export default ChangePassword