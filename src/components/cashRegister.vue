<template>
  <div class="title">
    <h1>Cash Register</h1>
    <ul id="productList">
      <li
        v-for="item in items"
        :key="item.id"
      >
          <span>{{item.name}} {{item.price | currency}}</span>
          <button class="addtoCartButton" v-on:click="addProductToCart(item)">Add to cart</button>
      </li>
    </ul>
    <ul id=cartItems>
      <li
        v-for="item in cartItems"
        :key="item.id"
      >
        {{item.name}} {{item.price | currency}}
         <span class="quantity" v-if="item.quantity > 1">
          ({{item.quantity}})
         </span>
        <button class="removeFromCart" v-on:click="removeFromCart(id)">X</button>
      </li>
    </ul>
    <div class="total">
      <h2>Total: {{getTotal | currency}}</h2>
    </div>
  </div>
</template>

<script>
import Product from '../Classes/Product.js'
import Cart from '../Classes/Cart.js'

export default {
  name: 'items',
  data () {
    return {
      id: this.guid(),
      items: [
        new Product("Cougar Tail", 8, this.guid()),
        new Product("Hot Dog", 5, this.guid()),
        new Product("Hot Chocolate", 5, this.guid()),
        new Product("BYU Mug", 10, this.guid()),
        new Product("Chocolate", 3.5, this.guid()),
      ],
      cart: []
    }
  },
  methods: {
    addProductToCart: function(item) {

    },
    removeFromCart: function(id) {
      this.cartItems.splice(id,1)
    },
    guid: function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
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
