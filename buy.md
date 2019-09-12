---
layout: page.njk
title: Buy a Print
description: Buy or request a print of Jono's photograpic works. Prints are generally on photographic paper in 6 x 8 or on fine art paper in larger sizes
---

# Buy a Print

<p>If you don't find what you were looking for you can make a request <a href="request/">here</a>.</p>

<div class="column flex">
{%- for product in collections.product -%}
  <div class="product-container">
    <a class="product-link" href="{{product.url}}">
      <img class="product-image" src="/assets/images/{{ product.data.image }}"/>
      <div class="column-narrow">
        <span class="product-title">{{ product.data.title }}</span>
        <span class="product-price">${{ product.data.price }}</span>
      </div>
    </a>
  </div>
{%- endfor -%}
</div>
