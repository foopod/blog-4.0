---
tags: product
layout : page.njk
title: Pikorua Pendant
description : The Pikorua symbolises the bond between two people whether it be friendship, kinship or love. This pendant was cast from reclaimed tin bronze. It comes on a wax corded necklace with instructions on how to resize as needed.
image : pikorua_2.JPG
price : 65
live: true
---

<div class="column">
  <h1>{{title}}</h1>
  <img id="hero" class="product-image" src="/assets/images/{{ image }}"/>
  <div class="gallery">
    <img class="thumb" src="/assets/images/pikorua_2.JPG" onclick="imageSwap('pikorua_2.JPG')">
    <img class="thumb" src="/assets/images/pikorua_1.JPG" onclick="imageSwap('pikorua_1.JPG')">
    <img class="thumb" src="/assets/images/pikorua_3.JPG" onclick="imageSwap('pikorua_3.JPG')">
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