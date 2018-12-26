import Cart from '@/Classes/Cart.js'
import Product from '@/Classes/Product.js'

describe('Cart', () => {

  describe('getTotalPrice', () => {

    describe('with an empty cart', () => {
      it('gets the total price', () => {
        const c = new Cart([]);
        expect(c.getTotalPrice()).toEqual(0)
      })
    })

    describe('with items in the cart', () => {
      it('gets the total price', () => {
        const items = [
          new Product("a", 10.10, "1"),
          new Product("b", 10.10, "2"),
          new Product("c", 5.15, "3")
        ]
        const c = new Cart(items);
        expect(c.getTotalPrice()).toEqual(25.35)
      })
    })

  })

})
