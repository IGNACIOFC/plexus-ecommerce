import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Header from '../../components/Header'
import { fetchProducts } from '../../services/products'


export default function Home () {
  const {data: products, error, isLoading} = useQuery(["products"], fetchProducts, 
  {
    staleTime: 60000 * 24
  });

  

  return (
    <div>
      <Header />
      <h2>Nuestros Productos</h2>
      {
        isLoading && <p>Loading...</p>
      }
      {
        products && 
        <>
          {products.map((product) => <p>{product.model}</p>)}
        </>
      }
    </div>
  )
}