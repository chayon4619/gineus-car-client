import React from 'react';

const Stats = () => {
    return (
        <div className="px-4 py-16 mx-auto my-10 bg-gray-900 rounded-xl text-gray-100 sm:max-w-xl md:max-w-full lg:w-4/5 md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 row-gap-8 md:grid-cols-3">
                <div className="text-left flex my-3">
                    <div className='flex align-middle text-red-700 pt-4 justify-center mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">We are open monday-friday</p>
                        <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                            7:00 am - 9:00 pm
                        </h6>
                    </div>
                </div>
                <div className="text-left flex my-3">
                    <div className='flex align-middle text-red-700 pt-4 justify-center mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>

                    </div>
                    <div >
                        <p className="font-semibold">Have a question?</p>
                        <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                            +2546 251 2658
                        </h6>
                    </div>
                </div>
                <div className="text-left flex my-3">
                    <div className='flex align-middle text-red-700 pt-4 justify-center mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </div>
                    <div>
                        <p className="font-semibold">Need a repair? our address</p>
                        <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                            Liza Street, New York
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;