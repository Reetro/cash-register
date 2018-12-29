import CartItem from '@/Classes/CartItem'
import Product from '@/Classes/Product'

describe('CartItem', () => {

  describe.skip('constructor', () => {
    describe('called with an array of Products', () => {
      it('converts the Products to CartItems with quantity 1 by default', () => {
        const items = [
          new Product("x", 10.10, "1"),
          // NOTE: We assume that the first product for a given ID is correct and ignore any other values.
          new Product("x", 15.10, "1"),
          new Product("b", 10.10, "2"),
          new Product("c", 5.15, "3")
        ]
        const cart = new Cart(items);
        expect(cart.items).toBeInstanceOf(Array)
        expect(cart.items.length).toEqual(3)
        expect(cart.items[0]).toBeInstanceOf(CartItem)
        expect(cart.items[0].product).toBe(items[0])
        expect(cart.items[0].product.price).toEqual(10.10)
        expect(cart.items[0].quantity).toEqual(2)
        expect(cart.items[1].quantity).toEqual(1)
      })
    })

    describe('called with an array of CartItems', () => {
      it('sets the cart items', () => {
        const items = [
          new CartItem(new Product("x", 10.10, "1"), 2),
          new CartItem(new Product("b", 10.10, "2"), 1),
          new CartItem(new Product("c", 5.15, "3"), 1)
        ]
        const cart = new Cart(items);
        expect(cart.items).toBeInstanceOf(Array)
        expect(cart.items.length).toEqual(3)
        expect(cart.items[0]).toBeInstanceOf(CartItem)
        // NOTE: We gave up on dealing with the fact that these are copies.
        expect(cart.items[0]).toMatchObject(items[0])
        expect(cart.items[0].product).toBe(items[0].product)
        expect(cart.items[0].quantity).toEqual(2)
        expect(cart.items[1].quantity).toEqual(1)
      })
    })
  })

  describe('getTotalPrice', () => {

    describe('with a quantity of 0', () => {
      it('gets the total price of 0', () => {
        const item = new CartItem(new Product("x", 10.10, "1"), 0)
        expect(item.getTotalPrice()).toEqual(0)
      })
    })

    describe('with a quantity of 1', () => {
      it('gets the total price', () => {
        const item = new CartItem(new Product("x", 10.10, "1"), 1)
        expect(item.getTotalPrice()).toMatch('$10.10')
      })
    })

    describe('with a quantity of 2', () => {
      it('gets the total price', () => {
        const item = new CartItem(new Product("x", 10.15, "1"), 2)
        expect(item.getTotalPrice()).toMatch('$20.30')
      })
    })
  })

})
