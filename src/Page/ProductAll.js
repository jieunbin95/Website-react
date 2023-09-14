import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from '../Component/ProductCard'
import { Container,Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  let [productList,setProductList]=useState([])
  let [query,setQuery]=useSearchParams()

  const getProducts=async()=>{
    let searchQuery=query.get('q')||''
    let url=`https://my-json-server.typicode.com/jieunbin95/Website-react/products?q=${searchQuery}`

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      <Container className="container">
        <Row className="row">
          {productList.map((product)=>
            <Col lg={3}><ProductCard item={product}/></Col>
          )}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll