---
layout: page.njk
tags: product
title: Little Marcher
description : Among the adults at the Animal Rights March are children standing strong and demonstrating their beliefs.
image : march2.jpg
price : 22
---

<div class="column">
  <h1>{{title}}</h1>
  <img class="product-image" src="/assets/images/{{ image }}"/>
  <div class="column-narrow">
    <p>{{description}}</p>
    <button class="purchase"
  id="checkout-button-sku_FnBmCuEklON6gs"
  role="link">
  Purchase
</button>
    <div id="error-message"></div>
  </div>
</div>


<script src="https://js.stripe.com/v3"></script>
<script>
  var stripe = Stripe('pk_live_2op5PiMvbfqGessCLzvQrx2X');

  var checkoutButton = document.getElementById('checkout-button-sku_FnBmCuEklON6gs');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: 'sku_FnBmCuEklON6gs', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//jonoshields.com/success',
      cancelUrl: window.location.protocol + '//jonoshields.com/canceled',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
</script>
