<template>
  <div class="title">
    <h1>Amazing Shop</h1>
    <ul id="storList">
      <li v-for="item in items">
          <span>{{item.name}} {{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import StoreItem from '../Classes/StoreItem.js'

  export default {
      data () {
          return {
              items:[
              {name: "Okai"}, {price: 69}
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
