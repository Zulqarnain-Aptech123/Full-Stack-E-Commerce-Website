import React from 'react'

import { FiUser } from "react-icons/fi";
import CartTab from './Cart/CartTab';


const User = () => {
    return (
        <>
            <div className='UserIcon d-flex align-items-center ms-auto'>
                <button className='UserIconCircle me-3'><FiUser /></button>
                <CartTab />
            </div>
        </>
    )
}

export default User
