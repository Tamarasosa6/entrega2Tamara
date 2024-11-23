import { useEffect, useState } from "react"
import { getProductByID } from "../../asyncMock"
import {useParams} from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(()=>{
    getProductByID(productId)
      .then((data)=>{
        console.log(data)
        setProduct(data)
      })
  }, [productId])
  return (
    <div>
      <h2>Detalle del producto</h2>
      <hr/>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer