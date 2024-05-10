// eslint-disable-next-line no-unused-vars
import React from 'react';

const SearchFilter = () => {

    function generateTimeOptions() {
        const options = [];
        for (let hour = 19; hour <= 23; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const timeString = `${hour.toString().padStart(2, '0')}h ${minute.toString().padStart(2, '0')}M`;
                options.push(<option key={`${hour}:${minute}`} value={`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`}>{timeString}</option>);
            }
        }
        return options;
    }

    return (
        <div className=' px-[300px] '>
            <div className=' border-[1px] border-[#B5BCFB]'></div>
            <div className=' my-2 flex lg:flex-row flex-col justify-between items-center'>
                <div className=' border-2'>
                    <input placeholder='LHR' className=' py-2 px-2 outline-none uppercase' type="text" />
                </div>
                <div className=' border-2'>
                    <input placeholder='CDG' className=' py-2 px-2 outline-none uppercase' type="text" />
                </div>
                <div className=' border-2'>
                    <input className=' py-2 px-2 outline-none' type="date" />
                </div>
                <div className='border-2 p-2'>
                    <select className=' outline-none'>
                        <option value="" disabled selected>DAY -</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </div>

                <div className='border-2 p-2'>
                    <select className=' outline-none'>
                        <option value="" disabled selected>DAY +</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </div>
                <div className='border-2 p-2'>
                    <select className=' outline-none'>
                        <option value="" disabled defaultValue>Select a time</option>
                        {generateTimeOptions()}
                    </select>
                </div>

                <div><p className=' font-bold text-xl'>+</p></div>
                <div className='border-2 p-2'>
                    <select className=' outline-none'>
                        <option value="" disabled selected>ADT</option>
                        <option value="monday">1</option>
                        <option value="tuesday">2</option>
                        <option value="wednesday">3</option>
                        <option value="thursday">4</option>
                        <option value="friday">5</option>
                        <option value="saturday">6</option>
                        <option value="sunday">7</option>
                    </select>
                </div>
                <div className='border-2 p-2'>
                    <select className=' outline-none'>
                        <option value="" disabled selected>1</option>
                        <option value="monday">1</option>
                        <option value="tuesday">2</option>
                        <option value="wednesday">3</option>
                        <option value="thursday">4</option>
                        <option value="friday">5</option>
                        <option value="saturday">6</option>
                        <option value="sunday">7</option>
                    </select>
                </div>
                <div className=' mr-5'><p className=' font-bold text-xl'>+</p></div>
            </div>

            <div className=' border-[1px] border-[#B5BCFB]'></div>

            <div className=' flex lg:flex-row flex-col justify-between items-center my-4 '>
                <div className=' flex flex-row gap-2 items-center h-full'>
                    <div>
                        <input type="checkbox" defaultChecked className="checkbox" />
                    </div>
                    <div><h1 className=' font-bold text-xl'>Extra Options</h1></div>
                </div>
                <div className=' flex flex-row gap-5 items-center'>
                    <div><h1 className=' font-bold text-xl'>Environment</h1></div>
                    <div className=' flex flex-row items-center gap-4'>
                        <div className=''>
                            <input type="radio" name="radio-2" className="radio radio-primary  w-4 h-4" />
                        </div>
                        <div>
                            <h1 className=' font-bold text-xl'>Dummy</h1>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 '>
                        <div>
                            <input type="radio" name="radio-2" className="radio radio-primary w-4 h-4" />
                        </div>
                        <div>
                            <h1 className=' font-bold text-xl'>PDT</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <button className=' uppercase px-5 py-2 bg-[#2E3791] text-white rounded-md'>Search</button>
                </div>
            </div>

            <div className=' border-[1px] border-[#B5BCFB]'></div>
        </div>
    );
};

export default SearchFilter;