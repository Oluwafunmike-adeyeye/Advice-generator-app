import React, { useState, useEffect } from 'react';
import { BsFillDice5Fill } from "react-icons/bs";
import '../App.css';

const AdviceDisplay = () => {
    const [advice, setAdvice] = useState({ id: null, text: '' });
    const [loading, setLoading] = useState(true);

    const fetchAdvice = async () => {
        try {
        setLoading(true);
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice({ id: data.slip.id, text: data.slip.advice });
        } catch (error) {
        console.error('Error fetching advice:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
      }, []);

    return (
        <div className="flex flex-col items-center w-[343px] md:w-[540px] h-[332px] bg-[#313A48] px-8 font-manrope rounded-xl relative shadow-lg">
            <div className='h-[180px]'>
                <h6 className='text-[#53FFAA] pt-10 text-[12px] md:text-[13px] lg:text-[14px] text-center'>ADVICE #{advice.id}</h6>
                {loading ? (
                    <p className='text-[#53FFAA] pt-8 text-[24px] md:text-[28px] text-center font-semibold'>FETCHING....</p>
                    ) : (
                    <p className='text-[#CEE3E9] pt-8 text-[22px] md:text-[24px] text-center'>"{advice.text}"</p>
                )}
            </div>
            

            <div className='flex mt-16'>
                <div className="h-[1px] w-[122px] md:w-[196px] border-[#4F5D74] border-2 mx-1 rounded-md mt-1"></div>
                <div className="border-1 border-gray-400 h-4 w-[4px] mx-[2px] rounded-md bg-[#CEE3E9]"></div>
                <div className="border-1 border-gray-400 h-4 w-[4px] mx-1 rounded-md bg-[#CEE3E9]"></div>
                <div className="h-[1px] w-[122px] md:w-[196px] border-[#4F5D74] border-2 mx-1 rounded-md mt-1"></div>
            </div>
            <div className='absolute top-[300px] left-[139px] md:top-[300px] md:left-[238px]'>
                <div className='bg-[#53FFAA] h-16 w-16 rounded-full relative cursor-pointer dice'>
                    <BsFillDice5Fill className='mt-8 absolute top-[-10px] left-[20px] cursor-pointer' size={24} id="dice-icon" onClick={fetchAdvice} />
                </div>
                
            </div>
        </div>
    );
};

export default AdviceDisplay;
