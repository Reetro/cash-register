
class Cart {
  constructor(items = []) {
    if (!Array.isArray(items)) throw Error("items is not an array")
    this.items = items
  }

  getTotalPrice() {
    let sum = 0
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      sum += item.price
    }
    return sum
  }

  addItem(item, quantity) {

  }

  removeItem(id, quanity) {

  }
}

export default Cart
