<template>
  <div class="container">
    <h1>Amazing Shop</h1>
      <div class="storePrice">
        <h2>Price</h2>
        <ul id="storeItems">
          <li v-for="item in items">
            {{item.price}}
          </li>
        </ul>
      </div>
      <div class="storeItemsContainer">
        <h2>Items to Buy</h2>
        <ul id="storList">
          <li v-for="item in items">
            {{item.Item}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

  export default {
      data () {
          return {
              items: [
              { Item: "Sonic Screwdriver" },
              { price: 69 },
              { Item: "Okai" },
              { price: 54 },
              { Item: "Plumby" },
              { price: 65 },
              { Item: "Hot Doge" },
              { price: 86 },
              { Item: "Tardis" },
              { price: 76 }
              ],
              cartItems: []
          }
      }
  }

</script>

<style>

.container {
  text-align: center;
}
.storePrice {
  float: right;
  width: 5%;
  overflow: hidden;
}
.storeItemsContainer {
  overflow: hidden;

}
#storList {
  list-style-type: none;
}
#storeItems{
  list-style-type: none;
}

</style>
