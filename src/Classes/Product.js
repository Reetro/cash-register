import Price from '@/Classes/Price'
import Guid from '@/Classes/Guid'

class Product {
  constructor(name, price) {
    this.name = name
    this.money = new Price(price)
    this.id = new Guid()
  }

  get price() {
    return this.money.toFormat()
  }
}

export default Product
