import React from 'react'

const Manager = () => {
    return (
        <>
        <div className=" bg-slate-300 mycontainer">
        <h1 className="text-4xl">
                    <span className='text-green-700 '>&lt;</span>
                  Pass
                    <span className='text-green-700 '>wops/&gt;</span>

                </h1>
                <p>enter your password</p>
            <div className="   text-white flex justify-between items-center flex-col p-4 max-w-4xl">
                
                <input className='rounded-lg' type="text" />
                <div className="flex">
                    <input type="text" />
                    <input type="text" />
                </div>

            </div>
        </div>
        </>
    )
}

export default Manager

