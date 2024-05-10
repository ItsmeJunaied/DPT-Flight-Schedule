/* eslint-disable no-unused-vars */
import React from 'react';

const MasterPrice = () => {
    return (
        <div className=' '>
            <div className='shadow-md  px-[300px] '>
                <h1 className=' font-bold text-[#111827] text-3xl'>Master Price</h1>
            </div>

            <div className=' w-full'>
                <div className="join flex flex-row justify-center items-center my-5">
                    <button className=" px-3 py-1 join-item border-[1px] border-[#2E3791] bg-white font-bold">Round Trip</button>
                    <button className=" px-3 py-1 join-item border-[1px] border-[#2E3791] bg-[#2E3791] font-bold text-white">One Way</button>
                    <button className=" px-3 py-1 join-item border-[1px] border-[#2E3791] bg-white font-bold">Multi City</button>
                </div>
            </div>
        </div>
    );
};

export default MasterPrice;