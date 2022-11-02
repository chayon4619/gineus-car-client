import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handelDelete, handelUpdate }) => {
    const { _id, serviceName, customerName, phone, email, price, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                Phone :
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>{email}</td>
            <th>
                <button onClick={() => handelUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;