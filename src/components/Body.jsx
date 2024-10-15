import React from 'react';
import content1 from '../assets/content.png';
import content2 from '../assets/content2.png';

const Body = () => {
    return (
        <>
            <div className="w-4/5 mx-auto mt-5 pb-20">
                {/* Breadcrumb */}
                <div className='text-[#907E7E] text-xs pt-3'>
                    <a href=''><span className='tracking-widest'>Home</span></a>
                    <a href=''><span className='pl-5 tracking-widest'>&gt;&gt;</span></a>
                    <a href=""><span className='pl-5 tracking-widest'>UIDAI Check Aadhaar Card Status</span></a>
                </div>

                {/* Side Links Section */}
                <div className="flex mt-8">
                    <div className="w-2/5">
                        <h2 className="text-lg font-semibold text-white bg-[#a4a0a0] flex items-center justify-center py-3">
                            Services related to:
                        </h2>
                        <ul className="text-sm text-[#A0A0A0] ">
                            <li className="border-b bg-slate-200 tracking-widest border-gray-300 last:border-b-0 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300">
                                <a href="/aadhaar-update" className="block p-2 text-black hover:text-blue-600 hover:underline">Education and Learning</a>
                            </li>
                            <li className="border-b bg-slate-200 tracking-widest border-gray-300 last:border-b-0 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300">
                                <a href="/check-status" className="block p-2 text-black hover:text-blue-600 hover:underline">Health and Wellness</a>
                            </li>
                            <li className="border-b bg-slate-200 tracking-widest border-gray-300 last:border-b-0 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300">
                                <a href="/download-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Money and Taxes</a>
                            </li>
                            <li className="border-b bg-slate-200 tracking-widest border-gray-300 last:border-b-0 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300">
                                <a href="/locate-enrollment-center" className="block p-2 text-black hover:text-blue-600 hover:underline">Electricity, Water and Local services</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Jobs</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Justice, Law and Grievances</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Travel and Tourism</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Business and Self-employed</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Births, Deaths, Marriages and Child care</a>
                            </li>
                            <li className='bg-slate-200 border-b tracking-widest border-gray-300 flex items-center justify-start pl-5 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-300'>
                                <a href="/verify-aadhaar" className="block p-2 text-black hover:text-blue-600 hover:underline">Pension and Benefits</a>
                            </li>
                        </ul>
                    </div>

                
                    <div className="w-3/5 flex items-center ml-9" style={{ marginTop: '-29.5rem' }}>
                        <img src={content1} alt="Content" className="max-w-full h-auto" />
                    </div>
                </div>   

               
                <div className="mt-8 text-center" >
                    <h3 className="text-3xl font-semibold text-gray-700 absolute " style={{marginLeft:'30rem',marginTop:'-30rem'}}>Related Links</h3>
                    <hr className="my-3 w-1/2 border-gray-700 absolute" style={{marginTop:'-26rem',marginLeft:'30rem'}} />
                </div>

                <div className="w-3/5 flex items-center ml-9" style={{ marginTop: '-22.5rem',marginLeft:'30rem' }}>
                        <img src={content2} alt="Content" className="max-w-full h-auto" />
                    </div>

                    <div className="w-3/5 flex items-center ml-9" style={{ marginTop: '3.5rem',marginLeft:'30rem' }}>
                        <img src={content2} alt="Content" className="max-w-full h-auto" />
                    </div>


            </div>
        </>
    );
};

export default Body;
