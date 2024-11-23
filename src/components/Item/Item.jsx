import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="card mx-4 my-2" style={{width: "18rem"}}>
        <img src={product.imagen} className="card-img-top" alt={product.name}/>
        <div>
            <h2>{product.nombre}</h2>
            <p>{product.categoria}</p>
            <p>{product.precio}</p>
            <Link to={`/product/${product.id}`} >Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item