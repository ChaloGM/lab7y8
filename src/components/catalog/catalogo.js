import { css } from '@emotion/css'
import {Container} from './style'

import { CarritoState } from '../context';
import Producto from '../producto';
//import { useReducer } from 'react';


export function Catalogo() {
  const {carritoState:{productos}} = CarritoState();
  console.log(productos);

    return(
      <>
    <div className={css`padding-top: 6rem` }>
    <Container>
      <div className='catalogo col-md-12'>
        {
          productos.map((prod)=>{
            return <Producto prod={prod} key={prod.id}></Producto>
          })
        }
      </div>
      </Container>
  </div>
  
  </>
  )
}