---
tags: product
layout : page.njk
title: Heart Pendant
description : This heart shaped pendant was cast from reclaimed tin bronze. Comes on a wax corded necklace with instructions on how to resize as needed.
image : heart_2.JPG
price : 40
live: true
---

<div class="column">
  <h1>{{title}}</h1>
  <img id="hero" class="product-image" src="/assets/images/{{ image }}"/>
  <div class="gallery">
  <img class="thumb" src="/assets/images/heart_2.JPG" onclick="imageSwap('heart_2.JPG')">
    <img class="thumb" src="/assets/images/heart_1.JPG" onclick="imageSwap('heart_1.JPG')">
  </div>
  <div class="column-narrow">
    <p>{{description}}</p>
    <p>These items are made in our community foundry as part of ongoing learnings from a casting student. Please note that each cast item is unique, we can't guarantee the colour or finish for each item, for this reason the item you receive may appear slightly different to the one in the listing.</p>
    <a class="purchase" href="#">Purchase for ${{price}}</a>
  </div>
</div>

<script>
  function imageSwap(image){
    document.getElementById("hero").src = "/assets/images/" + image;
  }
</script>