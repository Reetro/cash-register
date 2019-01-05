cart<template>
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
    <ul id=cart>
      <li
        v-for="item in cart.items"
        :key="item.product.id"
      >
        {{item.product.name}} {{item.getTotalPrice() | currency}}
         <span class="quantity" v-if="item.quantity > 1">
          ({{item.quantity}})
         </span>
        <button class="removeFromCart" v-on:click="removeFromCart(item.product)">X</button>
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
import Guid from '../Classes/Guid.js'

export default {
  name: 'items',
  data () {
    return {
      id: this.guid(),
      items: [
        new Product("Cougar Tail", 8, new Guid()),
        new Product("Hot Dog", 5, new Guid()),
        new Product("Hot Chocolate", 5, new Guid()),
        new Product("BYU Mug", 10, new Guid()),
        new Product("Chocolate", 3.5, new Guid()),
      ],
      cart: new Cart()
    }
  },
  methods: {
    addProductToCart: function(product) {
      this.cart.addItem(product)
    },
    removeFromCart: function(product) {
      this.cart.removeItem(product.id)
    }
  },
  computed: {
    getTotal: function () {
      return this.cart.getTotalPrice()
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

#cart{
  list-style-type: none;
}

</style>
