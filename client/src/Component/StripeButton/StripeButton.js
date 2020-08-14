import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HB1IqF3Bm2Sb3JJEyBNaFSnOzo6SM4Gk5WFicxA13PE8Rp3Ikyg8pV5i0vRFBaN4LU83OxHU0hR49Z1UXvb6nil00pISzYwpc'

    const onToken = token => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment succesful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please be to use the provided credit card.'
            )
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'Crown Head Clothing Ltd.'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
        
    )
}

export default StripeCheckoutButton;