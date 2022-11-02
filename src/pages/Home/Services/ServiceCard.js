import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='p-3 rounded-lg' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className=' font-bold text-lg text-orange-600'>Price : {price}$</p>
                    <Link to={`/checkout/${_id}`}>
                        <span className=' text-orange-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;