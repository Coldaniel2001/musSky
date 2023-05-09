import React, { useContext, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

import Button from "../Button/Button";

import UserContext from '../../context/UserContext'


const ChangePassword = () => {
    const { user, getIdTokenClaims} = useAuth0()

    // const {  inputChange, state } = useContext(UserContext)
    // const [ password, setPassword] = useState({
    //     previousPassword: "",
    //     newPassword: "",
    //     confirmPassword: "",
    // });

    // const handleInputChange = (e) => {
    //     setPassword({...password, [e.target.name]: e.target.value})
    // }

    // const handleSubmit = (e) => {

    //     e.preventDefault()
    //     if((inputChange.password === password.previousPassword) && (password.newPassword === password.confirmPassword)){
    //         inputChange.password = password.confirmPassword
    //         inputChange.passwordrepeat = password.confirmPassword   
    //     }

    //     if((state.user.password === password.previousPassword) && (password.newPassword === password.confirmPassword)){
    //         state.user.password = password.confirmPassword   
    //     }

    // }
    const handleSendEmail = async () => {
        try {
            const token = await getIdTokenClaims()
            const response = await fetch(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/dbconnections/change_password`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token.__raw,
                    'content-type': 'application/json' 
                },
                body: JSON.stringify({
                    client_id: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
                    email: user.email,
                    connection: 'Username-Password-Authentication'
                })
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h2 className='text-white mt-16 sm:mt-12 md:mt-24 lg:mt-10 xl:mt-0 text-[1.5rem] 2xl:text-[2rem] font-extrabold'>CONFIGURACIÓN</h2>
            <p className='font-bold text-xl mt-5'>Contraseña</p>
            <p className='text-[#a1a1a1]'>Si cambias tu contraseña, tendrás que volver a iniciar sesión en otros dispositivos.</p>
            <Button
                value={'Solicitar Cambio de contraseña con tu correo'}
                classButton={'bg-[#7C8BBF] sm:mx-10 h-[2rem] mt-4 mb-6 sm:mt-0 sm:mb-0 sm:mx-0 px-3 rounded'}
                handleSubmit={handleSendEmail}
            />


            {/* <form onSubmit={handleSubmit} className='sm:w-full md:w-auto md:flex 2xl:flex gap-5 mt-5'>
            <div className='flex flex-col sm:w-2/3 md:w-auto '>
                <label htmlFor="">Contraseña actual</label>
                <input className='rounded h-[2rem] xl:w-[14rem] text-black' 
                type="password"
                name="previousPassword"
                value={password.previousPassword}
                onChange={handleInputChange}
                required
                 />
            </div>
            <div className='flex flex-col sm:w-2/3 md:w-auto '>
                <label htmlFor="">Nueva contraseña</label>
                <input className='rounded h-[2rem] xl:w-[14rem] text-black' 
                type="password"
                name="newPassword"
                onChange={handleInputChange}
                required />
            </div>
            <div className='flex flex-col sm:w-2/3 md:w-auto '>
                <label htmlFor="">Confirma contraseña</label>
                <input className='rounded h-[2rem] xl:w-[14rem] text-black' 
                type="password"
                name="confirmPassword"
                onChange={handleInputChange}
                required />
            </div>
            <div className='flex items-end sm:my-5 md:my-0 justify-end '>
                <Button value={'Actualizar'}
                types="submit"
                classButton={'bg-[#7C8BBF] sm:mx-10 h-[2rem] mt-4 mb-6 sm:mt-0 sm:mb-0 sm:mx-0 px-3 rounded'} />
            </div>
            
        </form> */}

        </div>
    )
}

export default ChangePassword