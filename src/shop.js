import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from './State'

const Shop = () => {
    const dispatch = useDispatch()
    const actions = bindActionCreators(ActionCreators , dispatch)
  return (
    <div>
        <button className='btn btn-primary mx-2' onClick={() => {
        dispatch(ActionCreators.depositMoney(100));
      }}>+</button>
        add this cart
        <button className='btn btn-primary' onClick={() => {
        dispatch(ActionCreators.withdrawlMoney(100));
      }}>-</button>
    </div>
  )
}

export default Shop