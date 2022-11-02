import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    const { _id, title, price } = data
    const { user } = useContext(AuthContext);


    const handelPlaceOder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order placed');
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='my-10'>
            <h2 className='text-4xl font-medium my-2'>You are about to buy : <span className='font-bold text-cyan-600'>{title}</span></h2>
            <h2 className='text-3xl font-medium my-2'>Price :  <span className='font-semibold text-red-700'>{price}$</span></h2>
            <form onSubmit={handelPlaceOder}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input name='first' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                    <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered input-error w-full " />
                </div>
                <textarea name='message' className="textarea textarea-secondary w-full h-32 mt-4" placeholder="Your Message"></textarea>
                <input className='btn btn-outline btn-success btn-block' type="submit" value="Confirm your order" />
            </form>
        </div>
    );
};

export default CheckOut;