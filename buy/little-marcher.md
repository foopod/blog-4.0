---
layout: page.njk
tags: product
title: Little Marcher (6 x 8)
description : Among the adults at the Animal Rights March are children standing strong and demonstrating their beliefs.
image : march2.jpg
price : 22
---

<div class="column">
  <h1>{{title}}</h1>
  <img class="product-image" src="/assets/images/{{ image }}"/>
  <div class="column-narrow">
    <p>{{description}}</p>
    <p><span class="product-price">${{price}}</span></p>
    <button class="purchase"
  id="checkout-button-sku_FqCAAnD5oJFFKt"
  role="link">
  Purchase
</button>
<input type="text" id="searchTextField"/>
    <div id="error-message"></div>
  </div>
</div>

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJyBhPDP_kMYM9v3hMeM292mY_4uL3v6M&libraries=places"></script>
<script>
  var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(-33.8902, 151.1759),
  new google.maps.LatLng(-33.8474, 151.2631));

  var input = document.getElementById('searchTextField');
  var options = {
    bounds: defaultBounds,
    types: ['establishment']
  };
  
  autocomplete = new google.maps.places.Autocomplete(input, options);
</script>

<script src="https://js.stripe.com/v3"></script>
<script>
  var stripe = Stripe('pk_test_AwZVuVgR86s5FeCu0mAI3Lm9');
  
  var nzShipping = 'sku_FqCAAnD5oJFFKt';
  var globalShipping = 'sku_Fs3orOP0K6ugcF'

  var checkoutButton = document.getElementById('checkout-button-sku_FqCAAnD5oJFFKt');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{sku: 'sku_FqCAAnD5oJFFKt', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//jonoshields.com/buy/?action=success',
      cancelUrl: window.location.protocol + '//jonoshields.com/buy/?action=cancel',
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
