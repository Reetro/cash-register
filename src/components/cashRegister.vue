<template>
  <div class="title">
    <h1>Cash Register</h1>
    <ul id="productList">
      <li v-for="item in items">
          <span>{{item.name}} {{item.price | currency}}</span>
          <button class="addtoCartButton">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import StoreItem from '../Classes/StoreItem.js'

export default {
  name: 'items',
  data () {
    return {
      items:[
        new StoreItem("Cougar Tail", 8),
        new StoreItem("Hot Dog", 5),
        new StoreItem("Hot Chocolate", 4),
        new StoreItem("BYU Mug", 10),
        new StoreItem("Chocolate", 3),
      ],
      cartItems: []
    }
  },
  created: function () {

  }
}


</script>

<style>

.title{
  text-align: center;
}

</style>
