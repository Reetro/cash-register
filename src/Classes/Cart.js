import CartItem from '@/Classes/CartItem'
import Product from '@/Classes/Product'


class Cart {

  items = []

  constructor(items = []) {
    if (!Array.isArray(items)) throw Error("items is not an array")

    for (let item of items) {
      if (item instanceof Product) {
        this.addItem(item)
      }
      else if (item instanceof CartItem) {
        this.addItem(item.product, item.quantity)
      }
      else {
        throw Error("one or more items is not a Product or CartItem")
      }
    }
  }

  getTotalPrice() {
    let sum = 0
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      sum += item.getTotalPrice()
    }
    return sum
  }

  addItem(product, quantity = 1) {
    let index = this.findProductItemIndex(product)

    if (index != -1) {
      this.items[index].quantity += quantity
    }
    else {
      this.items.push(
        new CartItem(product, quantity)
      )
    }
  }

  removeItem(product, quantity) {
    // TODO: find item by id
    // TODO: remove item if quantity is undefined
    // TODO: remove n of item if quantity is defined
    // TODO: make sure the product is actually in the cart
    let index = this.findProductItemIndex(product)

    if (quantity == 0) {
      this.items.splice(index, 1)
    }
    if (quantity != -1) {

    }
  }

  findProductItemIndex(product) {
    return this.items.findIndex(function(item) {
      return item.product.id == product.id
    })
  }

}

export default Cart
