import { css } from '@emotion/css'
import { Container } from './catalog/style'
import React, { useEffect, useState } from 'react'
import { CarritoState } from './context'
import '../index.css'
import Vacio from './vacio'


const Carrito = () => {

  const { carritoState: { carrito }, dispatch, } = CarritoState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(carrito.reduce((acumulador, actual) => acumulador + Number(actual.precio) * actual.cantidad, 0))
  }, [carrito])

  return (
    <div className={css`padding-top: 5rem; padding-bottom: 3rem`}>
      <Container>
        {
          carrito.length === 0 ? <Vacio></Vacio> : null
        }
        <div className="col-8 col-md-7 col-sm-11">
          <ul id="listaCarrito" className="list-group list-group-flush">
            {
              carrito.map((prod) => {
                return (
                  <li className="list-group-item">
                    <div className="carro-item ">
                      <div className=" col-4 col-md-3 col-sm-3"><img className="imgCarrito" src={prod.img} alt="" /></div>
                      <div className="detalles row  col-8  col-md-8 col-sm-9">
                        <h5 id="modeloCard">{prod.nombre}</h5>
                        <div className="info row col col-12">
                          <p className="col col-12">Codigo: {prod.codigo}</p>

                          <div className="col col-4 col-sm-3">
                            <p >Talla: <span>S</span></p>
                          </div>
                          <div className="row col col-5 col-sm-6">
                            <label className="col col-5" forHTML="inputCant">Cantidad</label>
                            <div className="col input input-group-sm">
                              <input type="number" className="form-control col col-3" min="1" onChange={(e) => dispatch({ type: "cambiarCantidad", payload: { id: prod.id, cantidad: e.target.value } })} />
                            </div>
                          </div>

                          <div className="col col-10">
                            <span id="precioCard" className="precio">S/{prod.precio.toFixed(2)}</span>
                          </div>
                          <div className="col col-2" onClick={() => {
                            dispatch({ type: 'quitar', payload: prod })
                          }}>
                            <i className="fa-solid fa-trash"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )

              })
            }

          </ul>
        </div>

        <div className="col-4 col-md-4 col-sm-11">
          <div className="card">
            <h5 className="card-header">total</h5>
            <div className="card-body row">
              <div className="col col-6">
                <p className="card-text">Products ({carrito.length}):</p>
              </div>
              <div className="col col-6">
                <p>S/. {total}</p>
              </div>
              
              <a href="checkout.html" className="btn btn-primary col col-11 mx-auto">Procesar compra</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Carrito