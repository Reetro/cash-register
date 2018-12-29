import Money from 'dinero.js'
import { isString, isFinite } from 'lodash'

class Price {
  constructor(price) {
    console.log('constructor', price)
    this.money = this.parse(price)
  }

  toString() {
    return this.toFormat.apply(this, arguments)
  }

  toFormat() {
    return this.money.toFormat.apply(this, arguments)
  }

  parse(price) {
    let p = price
    console.log('a', price, typeof price, price instanceof Money)
    if (p instanceof Money) return new this.constructor(p)
    if (p instanceof Price) return new this.constructor(p.money)
    console.log('b', p)
    if (isFinite(p)) p = p.toString()
    console.log('c', p)
    if (isString(p)) {
      p = p.replace('$', '')
      if (p.includes('.')) {
        let [dollars, cents] = p.split('.')
        p = dollars + parseFloat('.'+cents).toFixed(2).slice(-2)
      }
      else {
        p += '00'
      }
    }
    console.log('d', p)
    p = parseInt(p, 10)
    console.log('e', p)
    return new this.constructor(new Money({ amount: p }))
  }
}

export default Price
