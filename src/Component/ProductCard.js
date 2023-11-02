import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
  const navigate=useNavigate()

  const showdetail=()=>{
    navigate(`/product/${item.id}`)
  }

  return (
    <div className="product-card" onClick={showdetail}>
      <img className="img-card" src={item?.img} alt="여러 제품"/>
      <div>{item.choice?'Conscious choice':''}</div>
      <div className='title'>{item?.title}</div>
      <div>￦{item?.price}</div>
      <div>{item.new?'신제품':''}</div>
    </div>
  )
}

export default ProductCard