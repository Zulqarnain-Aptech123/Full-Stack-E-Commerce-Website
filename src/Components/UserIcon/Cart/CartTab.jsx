import React from 'react'
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";


const CartTab = () => {
    return (
        <>
            <div className="ms-auto cartTab d-flex align-items-center">
                <span className='price'> $3.29</span>
                <button className='UserIconCircle  ms-2'><IoBagOutline /></button>

            </div>
        </>
    )
}

export default CartTab
