import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Cart() {
    const cart = useSelector((state) => state.cart.length);
    const mode = useSelector((state) => state.darkMode)
  return (
    <>
    <NavLink to='/cartPage' className={`btn btn-sm btn-${mode==='light'?'dark':'light'} position-relative`}>
  Cart
  {cart > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart}
                    </span>
                )}
  
</NavLink>

    </>
  )
}
