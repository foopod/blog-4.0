---
layout: page.njk
---

<div class="column">
{%- for product in collections.product -%}
  <a class="product-link" href="{{product.url}}">
  <div class="product-container">
    <img class="product-image" src="/assets/images/{{ product.data.image }}"/>
    <span class="product-title">{{ product.data.title }}</span>
    <span class="product-price">${{ product.data.price }}</span>
  </div>
  </a>
{%- endfor -%}

<h2><a href="request">Want to request a print?</a></h2>
</div>