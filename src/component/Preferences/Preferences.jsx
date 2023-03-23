import React from 'react'
import Toggle from '../Toggle/Toggle'


const Preferences = () => {
    return (
        <>
            <div className='flex flex-col justify-between h-[20rem]'>
                <div className=''>
                    <span className='text-white font-bold text-title'>PREFERENCIAS</span>
                </div>

                <div className='flex flex-col justify-between h-[15rem]'>
                    <div className=' flex justify-between w-[28rem] '>
                        <div className='flex flex-col mb-2'>
                            <span className='text-white font-semibold'>Reproducción automática</span>
                            <span className='text-detailsGray text-sm'>La siguiente canción se reproducirá de forma automática</span>
                        </div>
                        <Toggle classNname='mb-3' />
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col mb-2'>
                            <span className='text-white font-semibold'>Igualar el volumen en todas las canciones</span>
                            <span className='text-detailsGray text-sm'>Todas las canciones se escuchan en el mismo volumen</span>
                        </div>
                        <Toggle classNname='mb-3' />
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col mb-2'>
                            <span className='text-white font-semibold'>Canciones similares</span>
                            <span className='text-detailsGray text-sm'>Sigue escuchando canciones similares al terminar tu música</span>
                        </div>
                        <Toggle classNname='mb-3' />
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col mb-2'>
                            <span className='text-white font-semibold'>Modo sin conexión</span>
                            <span className='text-detailsGray text-sm'>Sólo podrás escuchar las canciones que te hayas descargado</span>
                        </div>
                        <Toggle classNname='mb-3' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Preferences