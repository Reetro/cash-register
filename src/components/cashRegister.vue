<template>
  <div class="title">
    <h1>Cash Register</h1>
    <ul id="productList">
      <li v-for="item in items">
          <span>{{item.name}} {{item.price | currency}}</span>
          <button class="addtoCartButton" v-on:click="addProductToCart(item)">Add to cart</button>
      </li>
    </ul>
    <ul id=cartItems>
      <li v-for="cart in cartItems">
        {{cart.name}} {{cart.price | currency}}
      </li>
    </ul>
  </div>
</template>

<script>
import Product from '../Classes/Product.js'

export default {
  name: 'items',
  data () {
    return {
      items:[
        new Product("Cougar Tail", 8),
        new Product("Hot Dog", 5),
        new Product("Hot Chocolate", 4),
        new Product("BYU Mug", 10),
        new Product("Chocolate", 3.5),
      ],
      cartItems: []
    }
  },
  methods: {
    addProductToCart: function(item) {
        this.cartItems.push({
          name: item.name,
          price: item.price
        });
    }
  }
}


</script>

<style>

.title{
  text-align: center;
}

#productList{
  list-style-type: none;
}

#cartItems{
  list-style-type: none;
}

</style>
