import {useState} from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(()=> {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
      .then(data => setProducts(data))
  }, [categoryId])
  return (
    <main className="container my-4" id="mainContent" >
          <section  className="row">
            <ItemList products={products} />
          </section>
    </main>
  )
}

export default ItemListContainer