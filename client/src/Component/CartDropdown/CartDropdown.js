import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import { createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/Cart/CartActions';
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './CartDropdownStyles';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));
