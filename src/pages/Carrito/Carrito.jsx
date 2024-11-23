
const Carrito = () => {
  return (
    <div className="modal fade" id="modalCarrito" aria-labelledby="modalCarritoLabel">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="modalCarritoLabel">Carrito de Compras</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <div id="listaCarrito"></div>
                      <p id="carritoTotal">Total: $0</p>
                      <div id="formCompra" >
                          <h5>Finalizar Compra</h5>
                          <label htmlFor="metodoPago">Método de Pago:</label>
                          <select id="metodoPago" className="form-select mb-2">
                              <option value="transferencia">Transferencia Bancaria</option>
                              <option value="tarjeta">Tarjeta de Crédito</option>
                          </select>
                          <label htmlFor="nombreCompra">Nombre:</label>
                          <input type="text" id="nombreCompra" className="form-control mb-2" required />
                          <label htmlFor="apellido">Apellido:</label>
                          <input type="text" id="apellido" className="form-control mb-2" required />
                          <label htmlFor="email">Email:</label>
                          <input type="email" id="email" className="form-control mb-2" required />
                          <button  className="btn btn-danger">Enviar y Finalizar Compra</button>
                      </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button id="btnFinalizarCompra" type="button" className="btn btn-primary">Finalizar Compra</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Carrito