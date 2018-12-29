
class CartItem {
  constructor(product, quantity = 1) {
    this.product = product
    this.quantity = quantity
  }

  getTotalPrice() {
    return this.product.money.multiply(this.quantity)
  }
}

export default CartItem
