<template>
  <div class="title">
    <h1>Cash Register</h1>
    <ul id="productList">
      <li
        v-for="item in items"
        :key="item.name"
      >
          <span>{{item.name}} {{item.price | currency}}</span>
          <button class="addtoCartButton" v-on:click="addProductToCart(item)">Add to cart</button>
      </li>
    </ul>
    <ul id=cartItems>
      <li
        v-for="item in cartItems"
        :key="item.name"
      >
        {{item.name}} {{item.price | currency}}
      </li>
    </ul>
    <div class="total">
      <h2>Total: {{getTotal | currency}}</h2>
    </div>
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
  },
  computed: {
    getTotal: function () {
      let sum = 0
      for(let cart of this.cartItems){
        sum += cart.price
      }
      return sum
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
