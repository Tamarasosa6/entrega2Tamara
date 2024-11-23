import { Link } from "react-router-dom"


const ItemDetail = ({nombre, imagen, categoria, precio, cantidad}) => {
  return (
    <div className="container">
      <h2>{nombre}</h2>
      <div className="card">
        <img 
          src={imagen} 
          style={{width: 300}}
          className="card-image-top"
          alt={nombre}
        />

        <div className="card-body">
          <p>Category: {categoria}</p>
          <p>Precio: $ {precio}</p>
          <p>Disponibles: {cantidad}</p>
        </div>
        <Link to='/cart' >Finalizar compra</Link>
      </div>
    </div>
  )
}

export default ItemDetail