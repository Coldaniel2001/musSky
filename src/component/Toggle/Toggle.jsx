import React from 'react'


const Toggle = () => {
  return (
    <div className='mt-3.5'>
        <label className='relative inline-flex items-center cursor-pointer'>
        <input type="checkbox" value="" className='sr-only peer' checked={true}/>
        <div className="w-11 h-6 bg-detailsGray focus:outline-none rounded-full peer-checked:after:translate-x-full checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-mainPurple after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainPurple"></div>
        </label>
    </div>
  )
}

export default Toggle