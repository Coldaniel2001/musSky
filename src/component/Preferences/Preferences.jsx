import React from 'react'
import Toggle from '../Toggle/Toggle'


const Preferences = () => {
  return (
    <>
    <div className='mb-4'>
        <span className='text-white font-bold text-title'>Preferences</span>
    </div>

    <div className='w-[50%]'>
        <div className='flex justify-between'>
            <div className='flex flex-col mb-2'>
                <span className='text-white'>Reproducción automática</span>
                <span className='text-detailsGray text-sm'>La siguiente canción se reproducirá de forma automática</span>
            </div>
            <Toggle classNname='mb-6' />
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col mb-2'>
                <span className='text-white'>Igualar el volumen en todas las canciones</span>
                <span className='text-detailsGray text-sm'>Todas las canciones se escuchan en el mismo volumen</span>
            </div>
            <Toggle classNname='mb-3' />
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col mb-2'>
                <span className='text-white'>Canciones similares</span>
                <span className='text-detailsGray text-sm'>Sigue escuchando canciones similares al terminar tu música</span>
            </div>
            <Toggle classNname='mb-3' />
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col mb-2'>
                <span className='text-white'>Modo sin conexión</span>
                <span className='text-detailsGray text-sm'>Sólo podrás escuchar las canciones que te hayas descargado</span>
            </div>
            <Toggle classNname='mb-3' />
        </div>
    </div>
    </>

  )
}

export default Preferences