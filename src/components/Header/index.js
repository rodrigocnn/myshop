import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {MdShoppingBasket} from 'react-icons/md'
import logo from './../../assets/img/logo.png'
import {Container, ContentHeader, Cart} from './style'

function Header({cartSize}) {
  return (
    <Container fixed> 
        <ContentHeader>
                <Link to="/">
                 <img src={logo} alt="MyShop" />
               </Link>
               <Cart to="/cart">
                  <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} Item(s)</span>
                  </div>
                  <MdShoppingBasket size={36} color="#FFF"/>
               </Cart>
        </ContentHeader>
    </Container>
  )
}

const mapStateToProps = state => ({
  cartSize:state.cart.length
});

export default connect(mapStateToProps)(Header)
