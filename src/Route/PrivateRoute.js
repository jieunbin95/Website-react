import React from 'react'
import {Navigate} from 'react-router-dom'
import ProductDetail from '../Page/ProductDetail'

const PrivateRoute = ({authenticate}) => {
  return authenticate? <ProductDetail/> : <Navigate to='/login'/>
  // redirect를 사용하기 위해서는 Navigate 컴포넌트를 써주어야한다
}

export default PrivateRoute