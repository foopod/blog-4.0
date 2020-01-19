---
layout: page.njk
title: Store
description: Handmade Jewellery from New Zealand Makers
---

<div id="success" class="success box">
  <h4>Success<span class="closebutton" onclick="closeWindow()">×</span></h4>
  
  <p>Congratulations on your new purchase. You should receive a confirmation email in just a few minutes.</p>
</div>

<div id="cancel" class="cancelled box">
  <h4>Order Cancelled<span class="closebutton">×</span></h4>
  
  <p> Thanks for having a look.</p>
</div>

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
    window.history.replaceState({}, document.title, "/");
    document.getElementById("success").style.display = 'none';
    document.getElementById("cancel").style.display = 'none';
  };
</script>

<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us4.list-manage.com","uuid":"ccf9453fb98ac9f1f90023474","lid":"cb3f8804ae","uniqueMethods":true}) })</script>