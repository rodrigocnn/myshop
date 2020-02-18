import React , { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Container from '@material-ui/core/Container';
import {MdAddShoppingCart} from 'react-icons/md'
import {ProductsList, Product} from './styles'
import {formatPrice} from '../../helper/format'
import api from '../../services/api'
import * as CartActions from '../../store/modules/cart/actions'

 function Home(props) {

  const [products, setProducts] = useState([]);
  const { amount} = props 

  useEffect(() => {
    getProducts()
  
  },[]);

  async function getProducts(){
    const response = await api.get('products')

    const data = response.data.map(product =>({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    setProducts(data)

  }

  function handleAddProduct(product){
    const {addToCart} = props
    addToCart(product)
  }

  return (


    <Container>
    
      <ProductsList>

        {
          products.map( product => (
            <Product key={product.id} >
            <img alt={product.title} src={product.image}/>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
                <button onClick={()=>handleAddProduct(product)}>
                  <div><MdAddShoppingCart size={16} color="#FFF" /> <span>{amount[product.id] || 0 }  </span></div>
                  <span>Adicionar ao Carrinho </span>
                </button>
            </Product>
            )
          )
        }
         
      </ProductsList>
    </Container>
  )
}

const mapStateToProps = state => ({
   amount : state.cart.reduce((amount, product)=>{
     amount[product.id] =  product.amount
     return amount
}, {})

})


const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)

