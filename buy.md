---
layout: page.njk
---

<p>If you don't find what you were looking for you can make a request <a href="request">here</a>.</p>

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
</div>