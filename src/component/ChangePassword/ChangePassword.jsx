import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

import Button from "../Button/Button";


import { toast } from 'react-hot-toast';


const ChangePassword = () => {
    const { user, getIdTokenClaims} = useAuth0()

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
            toast.success("Restablecimiento correcto, revisa tu correo para finalizar el proceso")
        }

    }

    return (
        <div className='ml-4'>
            <h2 className='text-white mt-16 sm:mt-12 md:mt-24 lg:mt-10 xl:mt-0 text-[1.5rem] 2xl:text-[2rem] font-extrabold'>CONFIGURACIÓN</h2>
            <div className='sm:flex items-end w-full'>
                <div className='flex flex-col w-full'>
                    <p className='font-bold text-xl mt-5'>Contraseña</p>
                    <p className='text-[#a1a1a1]'>Si cambias tu contraseña, tendrás que volver a iniciar sesión en otros dispositivos.</p>
                </div>
                <div className='w-full flex justify-end'>
                    <Button
                        value={'Solicitar cambio de contraseña con tu correo'}
                        classButton={'bg-[#7C8BBF] sm:mx-10 h-[2rem] mt-4 mb-6 sm:mt-0 sm:mb-0 sm:mx-0 px-3 rounded'}
                        handleSubmit={handleSendEmail}
                    />

                </div>
            </div>

        </div>
    )
}

export default ChangePassword