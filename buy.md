---
layout: page.njk
title: Buy a Print
description: Buy or request a print of Jono's photograpic works. Prints are generally on photographic paper in 6 x 8 or on fine art paper in larger sizes
---

<div id="success" class="success box">
  <h4>Success<span class="closebutton" onclick="closeWindow()">×</span></h4>
  
  <p>Congratulations on your new purchase. You should receive a confirmation email in just a few minutes.</p>
</div>

<div id="cancel" class="cancelled box">
  <h4>Order Cancelled<span class="closebutton">×</span></h4>
  
  <p> Thanks for having a look.</p>
</div>

# Buy a Print


<!--<p>If you don't find what you were looking for you can make a request <a href="request/">here</a>.</p>-->

<div class="column flex">
{%- for product in collections.product -%}
  {%- if product.data.live == true -%}
    <div class="product-container">
      <a class="product-link" href="{{product.url}}">
        <img class="product-image" src="/assets/images/{{ product.data.image }}"/>
        <div class="column-narrow">
          <span class="product-title">{{ product.data.title }}</span>
          <span class="product-price">${{ product.data.price }}</span>
        </div>
      </a>
    </div>
  {%- endif - %}
{%- endfor %}
</div>

<script>
  window.onload = function(){
    var query = window.location.search.substring(1);
    var qs = new URLSearchParams(query);
    if(qs.get('action') == 'success'){
      document.getElementById("success").style.display = 'block';
    } else if (qs.get('action') == 'cancel'){
      document.getElementById("cancel").style.display = 'block';
    }
  };
  
  var closeWindow = function(){
    window.history.replaceState({}, document.title, "/buy/");
    document.getElementById("success").style.display = 'none';
    document.getElementById("cancel").style.display = 'none';
  };
</script>