import React,  { useState, useEffect }  from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Container, ProductTable, Total } from './styles';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import * as CartActions from '../../store/modules/cart/actions'
import {formatPrice} from '../../helper/format'


 function Cart({cart, removeFromCart, updateAmount}) {

  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {

      const total = cart.reduce( (prevVal, product)=>{
        return prevVal + product.subtotal
      }, 0)

      setTotalCart(total)
   
  },[cart]);



  function increment(product){
    updateAmount(product, product.amount + 1)
  }

  function decrement(product){
    updateAmount(product, product.amount - 1)
  }

  return (
   <Container>
    <ProductTable>
      <thead>
        <tr>
          <th/>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>

        </tr>
      </thead>

      <tbody>

      {
        cart.map(product=>(

          <tr key={product.id}>
           <td><img alt="produto" src={product.image}/></td>
            <td>
            <strong>{product.title}</strong>
            <strong>{product.price}</strong>
          </td>
      
          
            <td>  
              <div>
                <button type="button" onClick={()=>decrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#e79d3d"/>
                </button> 
                  <input type="number" readOnly value={product.amount} ></input>
                  <button type="button" onClick={()=>increment(product)}>
                  <MdAddCircleOutline size={20} color="#e79d3d"/>
                </button> 
              </div>
            </td>

            <td>  {formatPrice(product.subtotal)}   </td>

            <td>  
              <button onClick={()=>{removeFromCart(product.id)} } type="button">
                <MdDelete size={20} color="#e79d3d"/>
              </button> 
    
            </td>
        </tr>

          )
        )

      }

          
      </tbody>


    </ProductTable>

    <footer>
      <button type="button">Finalizar Pedido</button>

      <Total>
        <span>TOTAL</span>
        <strong> {formatPrice(totalCart)}</strong>
      </Total>
    
    </footer>
   
   </Container>
  );
}

 const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
