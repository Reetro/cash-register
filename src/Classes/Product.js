import Price from '@/Classes/Price'

class Product {
  constructor(name, price, id) {
    this.name = name
    this.money = new Price(price)
    this.id = id
  }

  get price() {
    return this.money.toFormat()
  }
}

export default Product
